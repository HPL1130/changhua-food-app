// 載入資料
let data = {};
let currentCategory = "all";
let currentPage = 1;
const itemsPerPage = 24;
let currentKeyword = "";
let currentDistrict = "all";

// 初始化
async function loadData() {
  const response = await fetch("index_sanbao_reset.json");
  data = await response.json();
  renderDistrictOptions();
  renderList();
}

// 渲染區域選單
function renderDistrictOptions() {
  const districts = new Set();
  Object.values(data).forEach(list => {
    list.forEach(item => districts.add(item.district));
  });
  const select = document.getElementById("districtFilter");
  districts.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d;
    opt.textContent = d;
    select.appendChild(opt);
  });
}

// 渲染列表
function renderList() {
  const container = document.getElementById("foodList");
  container.innerHTML = "";

  let items = currentCategory === "all"
    ? Object.values(data).flat()
    : data[currentCategory] || [];

  // 篩選
  if (currentKeyword) {
    items = items.filter(item =>
      item.name.includes(currentKeyword) ||
      item.address.includes(currentKeyword) ||
      (item.feature && item.feature.includes(currentKeyword))
    );
  }
  if (currentDistrict !== "all") {
    items = items.filter(item => item.district === currentDistrict);
  }

  // 分頁
  const totalPages = Math.ceil(items.length / itemsPerPage);
  if (currentPage > totalPages) currentPage = totalPages || 1;
  const start = (currentPage - 1) * itemsPerPage;
  const pageItems = items.slice(start, start + itemsPerPage);

  pageItems.forEach(item => {
    const card = document.createElement("div");
    card.className = "food-item";

    const badge = document.createElement("span");
    badge.className = "badge " + (item.verified ? "active" : "needs_review");
    badge.textContent = item.verified ? "已驗證" : "待查";
    card.appendChild(badge);

    const header = document.createElement("div");
    header.className = "item-header";
    header.innerHTML = `<h2>${item.name}</h2><span class="google-rating">${item.avg_price || ""}</span>`;
    card.appendChild(header);

    const body = document.createElement("div");
    body.className = "item-body";
    body.innerHTML = `
      <p><strong>區域：</strong>${item.district}</p>
      <p><strong>地址：</strong>${item.address}</p>
      <p><strong>電話：</strong>${item.phone}</p>
      <p><strong>營業時間：</strong>${item.hours}</p>
      <p class="item-feature">${item.feature || ""}</p>
    `;
    card.appendChild(body);

    const actions = document.createElement("div");
    actions.className = "item-actions";
    actions.innerHTML = `
      <a class="btn nav" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}" target="_blank">導航</a>
      <a class="btn tel" href="tel:${item.phone}">撥打</a>
      <button class="btn copy" onclick="copyPhone('${item.phone}')">複製電話</button>
    `;
    card.appendChild(actions);

    container.appendChild(card);
  });

  // 分頁控制
  document.getElementById("pageInfo").textContent = `${currentPage} / ${totalPages || 1}`;
  document.getElementById("prevBtn").disabled = currentPage <= 1;
  document.getElementById("nextBtn").disabled = currentPage >= totalPages;
}

// 複製電話
function copyPhone(phone) {
  navigator.clipboard.writeText(phone).then(() => {
    alert("已複製電話：" + phone);
  });
}

// 事件綁定
document.querySelectorAll(".category-buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".category-buttons button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentCategory = btn.getAttribute("data-cat");
    currentPage = 1;
    renderList();
  });
});

document.getElementById("keywordInput").addEventListener("input", e => {
  currentKeyword = e.target.value.trim();
  currentPage = 1;
  renderList();
});

document.getElementById("districtFilter").addEventListener("change", e => {
  currentDistrict = e.target.value;
  currentPage = 1;
  renderList();
});

document.getElementById("prevBtn").addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderList();
  }
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentPage++;
  renderList();
});

// 啟動
loadData();
