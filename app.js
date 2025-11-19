// V5.4-AI：每頁24；AI風縮圖（類別色＋大佛元素）；區名浮水印；district下拉；導航/電話/複製
const isMobile = /Mobile|Android|iPhone|iPad/i.test(navigator.userAgent);
let items = [], filtered = [], page = 1, perPage = 24, district = '全部';

const els = {
  list: document.getElementById('list'),
  search: document.getElementById('search'),
  select: document.getElementById('district'),
  pager: document.getElementById('pager'),
};

fetch('data.json').then(r=>r.json()).then(json=>{ items = json; initDistricts(); apply(); });

function initDistricts(){
  const set = new Set(items.map(i=> i.district).filter(Boolean));
  const arr = ['全部', ...Array.from(set).sort()];
  els.select.innerHTML = arr.map(d=> `<option value="${d}">${d}</option>`).join('');
}

function normalizePhone(p){ if(!p) return ''; const raw = String(p); if(/無電話/.test(raw)) return ''; return raw.replace(/[^\d+]/g,''); }
function navUrl(item){
  if(item.lat && item.lng){ return `https://www.google.com/maps/dir/?api=1&destination=${item.lat},${item.lng}&travelmode=driving`; }
  const q = encodeURIComponent(item.address || item.name || '');
  return `https://www.google.com/maps/dir/?api=1&destination=${q}&travelmode=driving`;
}
function catAiThumb(cat){
  const map = {
    'rouyuan': 'assets/ai_rouyuan_640x360.png',
    'kongroufan': 'assets/ai_kongroufan_640x360.png',
    'sushi': 'assets/ai_sushi_640x360.png',
    'default': 'assets/ai_default_640x360.png'
  };
  return map[cat] || map['default'];
}

function apply(){
  const kw = (els.search.value||'').trim().toLowerCase();
  filtered = items.filter(it=>{
    const matchKw = !kw || JSON.stringify(it).toLowerCase().includes(kw);
    const matchDist = district==='全部' || it.district===district;
    return matchKw && matchDist;
  });
  page = 1; render();
}

function render(){
  const start = (page-1)*perPage, end = start+perPage;
  const paged = filtered.slice(start, end);
  els.list.innerHTML = `<div class=grid>${paged.map(cardHTML).join('')}</div>`;
  const totalPages = Math.max(1, Math.ceil(filtered.length/perPage));
  els.pager.innerHTML = `
    <div class=pagination>
      <button ${page<=1?'disabled':''} data-act="prev">上一頁</button>
      <span>第 ${page} / ${totalPages} 頁（共 ${filtered.length} 筆；每頁 ${perPage}）</span>
      <button ${page>=totalPages?'disabled':''} data-act="next">下一頁</button>
    </div>`;
}

function cardHTML(it){
  const tel = normalizePhone(it.phone);
  const catLabel = it.category==='rouyuan'?'肉圓':it.category==='kongroufan'?'爌肉飯':'素食麵';
  const img = catAiThumb(it.category);
  const districtName = it.district||'';
  return `
  <div class="card">
    <div class="thumb-wrap">
      <img class="thumb" src="${img}" alt="縮圖：${catLabel}" loading="lazy" />
      <div class="wm">${districtName}</div>
    </div>
    <div class="content">
      <div class="title">${it.name || '未命名'}</div>
      <div class="meta">${districtName}｜${it.address||''}<br/>Google 評分：${it.google??'—'}</div>
      <div class="tags">
        <span class="tag">${catLabel}</span>
        ${it.feature? `<span class="tag">${it.feature}</span>`:''}
        ${it.time? `<span class="tag">${it.time}</span>`:''}
        ${it.price? `<span class="tag">${it.price}</span>`:''}
      </div>
      <div class="actions">
        <a class="btn btn-primary" href="${navUrl(it)}" target="_blank" rel="noopener">導航</a>
        ${tel? `<a class="btn btn-call" href="tel:${tel}">${isMobile? '撥打電話':'用通話 App 撥打'}</a>` : `<button class="btn btn-outline" disabled>無電話</button>`}
        ${it.address? `<a class="btn btn-outline" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(it.address)}" target="_blank">地點</a>`:''}
        <button class="btn btn-outline copy" data-text="${it.phone||''}">複製電話</button>
      </div>
    </div>
  </div>`;
}

// Events
els.search.addEventListener('input', ()=> apply());
els.select.addEventListener('change', (e)=> { district = e.target.value; apply(); });

document.addEventListener('click', async (e)=>{
  if(e.target.classList.contains('copy')){
    try { await navigator.clipboard.writeText(e.target.dataset.text || ''); e.target.textContent = '已複製！'; setTimeout(()=> e.target.textContent='複製電話', 1500); } catch { alert('複製失敗'); }
  }
  if(e.target.dataset && e.target.dataset.act){
    const totalPages = Math.max(1, Math.ceil(filtered.length/perPage));
    if(e.target.dataset.act==='prev' && page>1) page--; else if(e.target.dataset.act==='next' && page<totalPages) page++;
    render();
  }
});

// PWA SW
if('serviceWorker' in navigator){ navigator.serviceWorker.register('./sw.js'); }
