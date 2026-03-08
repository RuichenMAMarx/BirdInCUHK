const birds = [
  {
    id: 1,
    cnName: "夜鷺",
    enName: "Black-crowned Night Heron",
    scientificName: "Nycticorax nycticorax",
    image: "bird01.jpg",
    habits: ["晝伏夜出的夜行性鳥類", "在水邊覓食"],
    locations: ["泥灘濕地", "漁塘", "人工湖", "荷花池", "水流緩慢的河溪"],
    features: [
      "成鳥頭部及背部黑色，翅膀灰色，後枕長出數根白色飾羽",
      "未成年鳥全身棕色，並有明顯的白色斑點",
    ],
    diet: ["細小的魚蝦"],
    facts: [
      { text: "用作形容熬夜到三更半夜不睡的人" },
      {
        text: "受到驚嚇時，夜鷺會把吃進去的食物吐出來以減輕體重逃走，作為防衛",
      },
      {
        text: "被稱作「熱帶企鵝」，並被誤認過是企鵝",
        link: "https://www.nownews.com/news/2729858",
      },
    ],
    call: {
      text: "低沉、重複",
      link: "https://macaulaylibrary.org/asset/225814",
    },
    sources: [{ label: "未圓湖生態遊（Carrd）", link: "https://cuhkbiodiversitytour.carrd.co/" }],
  },
  {
    id: 2,
    cnName: "黑領椋鳥",
    enName: "Black-collared Starling",
    scientificName: "Sturnus nigricollis",
    image: "bird02.jpg",
    habits: [
      "於樹木高處築大而顯眼的巢",
      "常以小群活動",
      "兩隻鳥會面對面豎起羽毛、張嘴，或鞠躬追逐，並有互相梳理羽毛的互梳行為",
    ],
    locations: ["樹林邊緣", "灌木叢", "濕地環境", "城市內的綠化地區及公園等"],
    features: [
      "頭部白色",
      "眼周圍黃色",
      "面上的裸露皮膚部份為鮮艷的黃色",
      "頸部黑色圍巾一般的斑紋",
      "身上具有許多的深棕色斑紋",
    ],
    diet: ["雜食性，以漿果、昆蟲和蚯蚓等為食物"],
    facts: [
      {
        text: "築巢會就地取材，曾被發現使用尼龍繩、紙巾甚至廢棄口罩",
        link: "https://biodiversity.swireproperties.com/en/biodiversity-stories/animals-black-collared-starling",
      },
    ],
    call: {
      text: "鳴聲如響亮的笛聲",
      link: "https://cms.hkbws.org.hk/cms/join-us-tw/bird-sing/soundclip12-black-collared-starling",
    },
    sources: [{ label: "未圓湖生態遊（Carrd）", link: "https://cuhkbiodiversitytour.carrd.co/" }],
  },
];

function renderBirdList() {
  const list = document.getElementById("bird-grid");
  if (!list) {
    return;
  }

  list.innerHTML = birds
    .map(
      (bird) => `
      <a class="bird-card" href="birdsdetail.html?id=${bird.id}" aria-label="${bird.cnName} ${bird.enName}">
        <img src="${bird.image}" alt="${bird.cnName} ${bird.enName}">
        <div class="bird-overlay">
          <h3>${bird.cnName}</h3>
          <p>${bird.enName}</p>
        </div>
      </a>
    `
    )
    .join("");
}

function listMarkup(items) {
  return `<ul class="bullet-list">${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function factsMarkup(facts) {
  return `<ol class="bullet-list number-list">${facts
    .map((fact) => {
      const source = fact.link
        ? ` <a href="${fact.link}" target="_blank" rel="noopener">參考連結</a>`
        : "";
      return `<li>${fact.text}${source}</li>`;
    })
    .join("")}</ol>`;
}

function sourcesMarkup(sources) {
  return `<ul class="detail-links">${sources
    .map(
      (source) =>
        `<li><a href="${source.link}" target="_blank" rel="noopener">${source.label}</a></li>`
    )
    .join("")}</ul>`;
}

function renderBirdDetail() {
  const detail = document.getElementById("bird-detail");
  if (!detail) {
    return;
  }

  const id = Number(new URLSearchParams(window.location.search).get("id"));
  const bird = birds.find((item) => item.id === id);

  if (!bird) {
    detail.innerHTML = '<p class="not-found">找不到此鳥類資料，請返回列表重新選擇。</p>';
    return;
  }

  const heroTitle = document.getElementById("detail-hero-title");
  if (heroTitle) {
    heroTitle.textContent = `${bird.cnName} ${bird.enName}`;
  }

  detail.innerHTML = `
    <div class="detail-image-wrap">
      <img src="${bird.image}" alt="${bird.cnName} ${bird.enName}">
    </div>
    <article class="detail-content">
      <h2>${bird.cnName}</h2>
      <p class="latin-name">${bird.enName}</p>
      <table class="info-table">
        <tr><th>中文名</th><td>${bird.cnName}</td></tr>
        <tr><th>英文名</th><td>${bird.enName}</td></tr>
        <tr><th>學名</th><td><em>${bird.scientificName}</em></td></tr>
      </table>

      <section class="detail-block">
        <h3>習性</h3>
        ${listMarkup(bird.habits)}
      </section>

      <section class="detail-block">
        <h3>常見位置</h3>
        ${listMarkup(bird.locations)}
      </section>

      <section class="detail-block">
        <h3>辨認特徵</h3>
        ${listMarkup(bird.features)}
      </section>

      <section class="detail-block">
        <h3>食物</h3>
        ${listMarkup(bird.diet)}
      </section>

      <section class="detail-block">
        <h3>趣聞</h3>
        ${factsMarkup(bird.facts)}
      </section>

      <section class="detail-block">
        <h3>叫聲</h3>
        <p>${bird.call.text}</p>
        <p><a href="${bird.call.link}" target="_blank" rel="noopener">前往叫聲連結</a></p>
      </section>

      <section class="detail-block">
        <h3>資料來源</h3>
        ${sourcesMarkup(bird.sources)}
      </section>
    </article>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderBirdList();
  renderBirdDetail();
});
