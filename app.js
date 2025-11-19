// === 全域狀態 ===
let data = {}; // {category: Item[]}
let currentCategory = 'all';
let currentPage = 1;
const itemsPerPage = 24; // 每頁固定 24
let currentKeyword = '';
let currentDistrict = 'all';
let hideSuspect = true;   // 預設隱藏疑似不實（含無評分）
let onlyValidated = true; // 預設只看通過驗證

const DATA_SOURCES = [
  'data/index_sanbao_reset.json',
  'data/index_buddha_reset.json'
];

function mapCategory(cat){
  const c = (cat || '').toLowerCase();
  if (c === 'sushi') return 'vegetarian-noodle'; // 素麵
  if (c === 'kongroufan') return 'kuangroufan';   // 爌肉飯
  return c || 'others';
}
function normalizeItem(item){
  const o = { ...item };
  o.avg_price = o.avg_price || o.price || '';
  o.hours = o.hours || o.time || '';
  return o;
}
function quickValidate(item){
  const addrOk = (item.address || '').includes('彰化') && /[路街號段]/.test(item.address||'');
  const phoneOk = (()=>{const p = item.phone||''; if (!p || p.includes('無電話') || p.trim()==='--') return false; const d = (p.match(/\d/g)||[]).length; return d>=6 && d<=12;})();
  const ratingOk = typeof item.google === 'number' && item.google >= 3.0 && item.google <= 5.0; // 無評分直接視為不實
  const timeOk = /:\d{2}/.test(item.hours||'') && /-/.test(item.hours||'');
  const ok = addrOk && phoneOk && ratingOk && timeOk;
  return { ok, addrOk, phoneOk, ratingOk, timeOk };
}
function renderStars(rating){
  const r = parseFloat(rating); if (isNaN(r)) return '';
  const rounded = Math.round(r*2)/2; const full = Math.floor(rounded);
  const half = (rounded - full)===0.5?1:0; const empty = Math.max(0,5-full-half);
  let svg = '<div class="stars" aria-label="Google 評分 '+rounded+' / 5">';
  const STAR = '<svg class="star full" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.9-5.2-2.7-5.2 2.7 1-5.9-4.2-4.1 5.8-.8z"/></svg>';
  const HALF = '<svg class="star half" viewBox="0 0 20 20" aria-hidden="true"><defs><linearGradient id="halfGrad"><stop offset="50%" stop-color="currentColor"/><stop offset="50%" stop-color="transparent"/></linearGradient></defs><path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.9-5.2-2.7-5.2 2.7 1-5.9-4.2-4.1 5.8-.8z" fill="url(#halfGrad)"/></svg>';
  const EMPTY = '<svg class="star empty" viewBox="0 0 20 20" aria-hidden="true"><path d="M10 1.5l2.6 5.3 5.8.8-4.2 4.1 1 5.9-5.2-2.7-5.2 2.7 1-5.9-4.2-4.1 5.8-.8z"/></svg>';
  svg += STAR.repeat(full) + (half?HALF:'') + EMPTY.repeat(empty) + '</div>';
  return svg;
}

async function loadData(){
  const merged = {};
  for (const src of DATA_SOURCES){
    try{
      const res = await fetch(src);
      if (!res.ok) continue;
      const j = await res.json();
      if (Array.isArray(j)){
        j.forEach(item=>{ const cat = mapCategory(item.category||'others'); merged[cat]=merged[cat]||[]; merged[cat].push(normalizeItem(item)); });
      } else if (j && typeof j==='object'){
        Object.entries(j).forEach(([cat,list])=>{ const k = mapCategory(cat); merged[k]=(merged[k]||[]).concat((list||[]).map(normalizeItem)); });
      }
    }catch(e){ console.warn('資料載入失敗：', src, e); }
  }
  data = merged;
}

function renderDistrictOptions(){
  const districts = new Set(); const allItems = Object.values(data).flat();
  allItems.forEach(i=>{ if (i.district) districts.add(i.district); });
  const sel = document.getElementById('districtFilter');
  sel.querySelectorAll('option:not([value="all"])').forEach(o=>o.remove());
  Array.from(districts).sort().forEach(d=>{ const opt=document.createElement('option'); opt.value=d; opt.textContent=d; sel.appendChild(opt); });
  sel.value = currentDistrict;
}

function renderList(){
  const container = document.getElementById('foodList'); container.innerHTML='';
  let items = currentCategory==='all' ? Object.values(data).flat() : (data[currentCategory]||[]);
  const kw = (currentKeyword||'').trim();
  if (kw){ items = items.filter(i=> (i.name||'').includes(kw) || (i.address||'').includes(kw) || (i.feature||'').includes(kw)); }
  if (currentDistrict!=='all'){ items = items.filter(i=> (i.district||'')===currentDistrict); }
  // validation filters
  items = items.filter(i=>{
    const v = quickValidate(i);
    if (onlyValidated && !v.ok) return false;
    if (hideSuspect){ if (!v.ratingOk || !v.phoneOk || !v.addrOk) return false; }
    return true;
  });

  const totalPages = Math.max(1, Math.ceil(items.length / itemsPerPage));
  if (currentPage>totalPages) currentPage=totalPages;
  const start = (currentPage-1)*itemsPerPage; const pageItems = items.slice(start, start+itemsPerPage);

  pageItems.forEach(item=>{
    const v = quickValidate(item);
    const card = document.createElement('div'); card.className='food-item';
    const badge = document.createElement('span'); badge.className = 'badge ' + (v.ok ? 'active' : 'needs_review'); badge.textContent = v.ok ? '已驗證' : '疑似不實'; card.appendChild(badge);
    const header = document.createElement('div'); header.className='item-header';
    const nameEl = document.createElement('h2'); nameEl.textContent = item.name || '未命名店家';
    const badgeWrap = document.createElement('div'); badgeWrap.style.display='flex'; badgeWrap.style.gap='8px';
    const priceEl = document.createElement('div'); priceEl.className='price-badge'; priceEl.textContent = item.avg_price || '';
    const ratingEl = document.createElement('div'); ratingEl.className='google-rating'; ratingEl.title='Google 評分'; ratingEl.innerHTML = (item.google ? renderStars(item.google) : '');
    badgeWrap.appendChild(priceEl); if (item.google) badgeWrap.appendChild(ratingEl);
    header.appendChild(nameEl); header.appendChild(badgeWrap); card.appendChild(header);

    const body = document.createElement('div'); body.className='item-body';
    body.innerHTML = `
      <p><strong>區域：</strong>${item.district || '-'}</p>
      <p><strong>地址：</strong>${item.address || '-'}</p>
      <p><strong>電話：</strong>${item.phone || '-'}</p>
      <p><strong>營業時間：</strong>${item.hours || '-'}</p>
      ${item.feature ? `<p class="item-feature">${item.feature}</p>` : ''}
      ${item.description ? makeToggleDesc(item.description) : ''}
    `;
    card.appendChild(body);

    const actions = document.createElement('div'); actions.className='item-actions';
    const navA = document.createElement('a'); navA.className='btn'; navA.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address || item.name || '')}`; navA.target='_blank'; navA.rel='noopener'; navA.textContent='導航';
    const reviewsA = document.createElement('a'); reviewsA.className='btn reviews'; const q=encodeURIComponent(item.name || item.address || ''); reviewsA.href = `https://www.google.com/maps/search/?api=1&query=${q}`; reviewsA.target='_blank'; reviewsA.rel='noopener'; reviewsA.textContent='看評論';
    const telA = document.createElement('a'); telA.className='btn tel'; telA.href = item.phone ? `tel:${item.phone}` : '#'; telA.textContent='撥打';
    const copyBtn = document.createElement('button'); copyBtn.className='btn copy'; copyBtn.type='button'; copyBtn.textContent='複製電話'; copyBtn.addEventListener('click', ()=> copyPhone(item.phone || ''));
    actions.appendChild(navA); actions.appendChild(reviewsA); actions.appendChild(telA); actions.appendChild(copyBtn);
    card.appendChild(actions);
    container.appendChild(card);
  });

  document.getElementById('pageInfo').textContent = `${currentPage} / ${Math.max(1, Math.ceil(items.length / itemsPerPage))}`;
  const prev = document.getElementById('prevBtn'); const next = document.getElementById('nextBtn');
  prev.disabled = currentPage <= 1; next.disabled = currentPage >= totalPages;
}

function makeToggleDesc(desc){ const limit=120; if (!desc) return ''; const full=String(desc); if (full.length<=limit) return `<p class="item-desc">${full}</p>`; const short = full.slice(0,limit)+'…'; const id='d_'+Math.random().toString(36).slice(2,8); return `<p id="${id}" class="item-desc">${short}</p><button class="desc-toggle" type="button" data-target="${id}" data-full="${full.replace(/"/g,'&quot;')}">展開</button>`; }
function copyPhone(phone){ if (!phone) return alert('此店家未提供電話'); navigator.clipboard.writeText(phone).then(()=> alert('已複製電話：'+phone)).catch(()=> alert('複製失敗')); }

function bindEvents(){
  document.querySelectorAll('.category-buttons button').forEach(btn=>{
    btn.addEventListener('click', ()=>{ document.querySelectorAll('.category-buttons button').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); currentCategory = btn.getAttribute('data-cat'); currentPage = 1; renderList(); });
  });
  document.getElementById('keywordInput').addEventListener('input', e=>{ currentKeyword = e.target.value.trim(); currentPage = 1; renderList(); });
  document.getElementById('districtFilter').addEventListener('change', e=>{ currentDistrict = e.target.value; currentPage = 1; renderList(); });
  document.getElementById('prevBtn').addEventListener('click', ()=>{ if (currentPage>1){ currentPage--; renderList(); } });
  document.getElementById('nextBtn').addEventListener('click', ()=>{ currentPage++; renderList(); });
  document.getElementById('hideSuspect').addEventListener('change', e=>{ hideSuspect = e.target.checked; currentPage=1; renderList(); });
  document.getElementById('onlyValidated').addEventListener('change', e=>{ onlyValidated = e.target.checked; currentPage=1; renderList(); });
  // Hero collapse
  const heroWrap = document.querySelector('.hero-wrap');
  const hero = document.querySelector('.hero');
  const toggleHeroBtn = document.getElementById('toggleHero');
  const saved = localStorage.getItem('hero');
  if (saved === 'collapsed'){ hero.style.display = 'none'; toggleHeroBtn.textContent = '展開'; }
  toggleHeroBtn.addEventListener('click', ()=>{
    const collapsed = hero.style.display === 'none';
    hero.style.display = collapsed ? 'block' : 'none';
    toggleHeroBtn.textContent = collapsed ? '收合' : '展開';
    localStorage.setItem('hero', collapsed ? 'expanded' : 'collapsed');
  });
}

(async function init(){ await loadData(); renderDistrictOptions(); bindEvents(); renderList(); })();
