const birds = [
  {
    id: 1,
    cnName: "夜鷺",
    enName: "Black-crowned night heron",
    scientificName: "Nycticorax nycticorax",
    image: "img/bird01.jpg",
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
      file: "audio/night-heron.mp3",
      link: "https://macaulaylibrary.org/asset/225814",
    },
    sources: [{ label: "未圓湖生態遊（Carrd）", link: "https://cuhkbiodiversitytour.carrd.co/" }],
  },
  {
    id: 2,
    cnName: "黑領椋鳥",
    enName: "Black collared Starling",
    scientificName: "Sturnus nigricollis",
    image: "img/bird02.jpg",
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
      file: "audio/starling.wav",
      link: "https://cms.hkbws.org.hk/cms/join-us-tw/bird-sing/soundclip12-black-collared-starling",
    },
    sources: [
      { label: "未圓湖生態遊（Carrd）", link: "https://cuhkbiodiversitytour.carrd.co/" },
      { label: "叫聲連結（Macaulay Library）", link: "https://macaulaylibrary.org/asset/134626601" },
    ],
  },
  {
    id: 3,
    cnName: "鵲鴝",
    enName: "Oriental magpie robin",
    scientificName: "Copsychus saularis",
    image: "img/bird03.jpg",
    habits: ["尾巴時常豎起", "常見於人類活動的範圍內", "有很強的領域性"],
    locations: ["樹林邊緣", "灌木叢", "空曠地區", "濕地及市區公園"],
    features: [
      "雄性頭部、背部、胸部及尾部皆為黑色，與白色的腹部及翅上的白帶形成強烈對比",
      "雌性身上為灰白相襯",
      "未成年的鵲鴝則胸部具有鱗片狀的斑紋，喙部末端微帶鈎狀",
    ],
    diet: ["主要以昆蟲為食物", "也會捕食小蜥蜴、小魚、蚯蚓等"],
    facts: [{ text: "模仿其他鳥類鳴叫，最常聽到的鳴聲是清晨時的口哨聲" }],
    call: {
      text: "聲音悅耳",
      file: "audio/magpie-robin.mp3",
      link: "https://macaulaylibrary.org/asset/652231783",
    },
    sources: [],
  },
  {
    id: 4,
    cnName: "麻雀",
    enName: "Eurasian tree sparrow",
    scientificName: "Passer montanus",
    image: "img/bird04.jpg",
    habits: ["常小群活動於地上覓食", "停棲時群聚於灌木或矮樹上", "喜歡小群於沙地進行沙浴"],
    locations: ["灌叢及樹林邊緣", "農地", "草坡地", "市區公園"],
    features: [
      "小型鳥類",
      "喙部強壯",
      "面頰及頦部黑色",
      "頭部深褐色",
      "腹部白色",
      "背部及翅膀有淺棕及黑色交錯的斑紋",
    ],
    diet: ["以禾本科植物的種籽作為食物", "會取食人類遺下的食物"],
    facts: [
      {
        text: "麻雀不會像鴿子一樣走路，而是傾向於跳躍",
        link: "https://discovery.cctv.com/20070516/101903.shtml",
      },
    ],
    call: {
      text: "叫聲錄音",
      file: "audio/tree-sparrow.ogg",
      link: "https://upload.wikimedia.org/wikipedia/commons/8/83/Passer_montanus.ogg",
    },
    sources: [{ label: "叫聲連結（香港觀鳥會）", link: "https://www.hkbws.org.hk/web/chi/birdcall/Tsparrow.wav" }],
  },
  {
    id: 5,
    cnName: "珠頸斑鳩",
    enName: "Spotted dove",
    scientificName: "Streptopelia chinensis",
    image: "img/bird05.jpg",
    habits: [
      "進食後需要喝水以幫助消化所吃的種子，所以經常可以見到正在喝水的珠頸斑鳩",
      "雄性珠頸斑鳩求偶時會進行飛行演示，先急速拍翼向上爬升，然後張開翅膀及尾羽滑翔而下",
    ],
    locations: ["廣泛分佈", "樹林邊沿", "灌木林", "田野", "市區公園"],
    features: [
      "頭部相對於身體的比例較鴿子為小",
      "頭頂為灰色",
      "後頸及頸側的黑色的斑紋上佈滿了珍珠般的白色斑點",
      "幼鳥則並沒有頸上的珍珠斑紋，或者只有零落的斑點",
    ],
    diet: ["種子是珠頸斑鳩的主要食物，牠們喜歡在地上找尋掉落的種子"],
    facts: [
      { text: "牠們的壽命相對較長，通常約10至12年" },
      { text: "世界上最常見的鳥類，分佈在全球各地" },
      {
        text: "通常為一夫一妻制，一起用樹枝築巢",
        link: "https://blog.udn.com/mamabook/131515727",
      },
    ],
    call: {
      text: "叫聲低沉，重音靠後",
      file: "audio/spotted-dove.mp3",
      link: "https://macaulaylibrary.org/asset/117253561",
    },
    sources: [],
  },
  {
    id: 6,
    cnName: "紅耳鵯 / 黑頭公",
    enName: "Red-whiskered bulbul",
    scientificName: "Pycnonotus jocosus",
    image: "img/bird06.jpg",
    habits: ["繁殖期: 2月到8月，每窩產卵3只，孵卵期約2週", "會與其他鳥類混群覓食"],
    locations: ["郊外的林區", "市區的公園", "樹林較密的地方"],
    features: [
      "頭頂及枕部黑色",
      "眼下後方具紅色塊斑，頰部白色，頰紋黑色，喉部白色",
      "兩側自下頸達胸部各有一條黑色帶紋，帶紋後邊緣轉為褐色",
      "上體、尾羽褐色，外側尾羽具白色端斑",
      "下體白色，尾下覆羽紅色",
      "嘴及腳黑色",
      "羽色: 雄鳥 --> 黑色",
      "羽色: 雌鳥 --> 黑褐色",
      "幼鳥: 僅翼部有絨羽",
    ],
    diet: ["幼鳥以毛毛蟲和昆蟲為食，成熟後則改為水果, 漿果, 花蜜和昆蟲"],
    facts: [{ text: "果實中的種子會隨糞便排出, 種子的傳播距離有時可超過1公里" }],
    call: {
      text: "叫聲連結",
      file: "audio/red-whiskered-bulbul.mp3",
      link: "https://avifauna.hkbws.org.hk/species/0290/036000",
    },
    sources: [
      { label: "延伸資料（CUHK）", link: "https://www.srsdo.cuhk.edu.hk/en-gb/trees-and-birds-at-cuhk/birds/red-whiskered-bulbul" },
    ],
  },
  {
    id: 7,
    cnName: "噪鵑 / 升Key雀",
    enName: "Asian koel",
    scientificName: "Eudynamis scolopacea",
    image: "img/bird07.jpg",
    habits: [
      "常於結果的榕樹上活動，亦見於擁有大型果實的樹上 (e.g. 棕櫚科植物及苦棟)",
      "春季繁殖時雄鳥會持續發出響亮叫聲如「Ko~el~」，徹夜可聞",
      "有托卵行為，常以黑領椋鳥、八哥及紅咀藍鵲作為托卵寄主, 通常一個巢中只產 1-2 枚卵",
      "噪鵑第一枚卵的產下時間平均在寄主的第一枚卵產下後一天半內",
      "其雛鳥通常比寄主的雛鳥早約3天孵化, 且不會試圖殺死寄主的雛鳥",
    ],
    locations: ["開闊林地及市區公園", "春夏季節活躍於社區周邊"],
    features: [
      "大型杜鵑",
      "眼睛血紅色",
      "雄鳥全身呈藍黑色，並有綠色喙部",
      "雌鳥全身棕色，具明顯白色斑點和橫紋",
      "幼鳥的上部羽毛更像雄鳥，喙為黑色",
    ],
    diet: ["主要以水果為食 (e.g. 榕果, 黃花夾竹桃的果實), 偶爾會取食小鳥的卵"],
    facts: [{ text: "叫聲似其名 “Ko-el”" }, { text: "由於重複叫時的聲調會不斷提高，故被稱為「升Key雀」" }],
    call: {
      text: "叫聲連結",
      link: "https://digital.lib.hkbu.edu.hk/hkwildtracks/animal_detail.php?ids=HWT-000034&fbclid=IwAR28f0hih30zMutRepAv7-srLE1GBTN_xumUWOO-UjKjIzxfHUyVD7VRCBA",
    },
    sources: [{ label: "延伸資料（CUHK）", link: "https://www.srsdo.cuhk.edu.hk/en-gb/trees-and-birds-at-cuhk/birds/asian-koel" }],
  },
  {
    id: 8,
    cnName: "黑臉噪鶥 / 七姊妹",
    enName: "Masked laughing thrush",
    scientificName: "Garrulax perspicillatus",
    image: "img/bird08.jpg",
    habits: ["常於地上或灌木叢中活動", "巢搭成杯狀，甚不整齊，置於濃密的下層林叢或短樹"],
    locations: ["常見於郊外的叢林下及市區的大型公園", "偏好有枯枝落葉", "稀疏的闊葉樹"],
    features: [
      "體型較大，體長約25厘米",
      "面臉黑色，身軀及臀部棕色",
      "足部較長",
      "叫聲有如「飄、飄、飄、飄……」",
      "頭的兩側、眼睛的周圍有黑斑，額也呈黑色",
      "背部與翅膀呈灰褐色",
      "胸腹部呈淺棕色",
      "喙呈暗褐色",
      "腳黃褐色",
    ],
    diet: ["繁殖季節主要食物是昆蟲，非繁殖季節主要食用果實"],
    facts: [{ text: "因為每次都是7-10隻成群結隊地出現, 所以被稱為七姊妹" }],
    call: {
      text: "叫聲連結",
      file: "audio/masked-laughing-thrush.wav",
      link: "https://www.hkbws.org.hk/web/chi/birdcall/Bflthru1.wav",
    },
    sources: [{ label: "延伸資料（CUHK）", link: "https://www.srsdo.cuhk.edu.hk/en-gb/trees-and-birds-at-cuhk/birds/masked-laughing-thrush" }],
  },
  {
    id: 9,
    cnName: "紅嘴藍鵲 / 藍喜鵲",
    enName: "Red-billed blue magpie",
    scientificName: "Urocissa erythroryncha",
    image: "img/bird09.jpg",
    habits: ["大多數時間群聚於地上活動，見於濃密矮樹叢內", "巢的結構單薄，築於樹上，通常離地約七米", "在樹上和地面覓食", "會掠奪巢中的蛋和雛鳥"],
    locations: ["頗為普遍易見，尤其是香港島半山區"],
    features: [
      "全長約65厘米",
      "頭部、頸部和胸部為黑色，頭頂帶有藍色斑點",
      "肩部和臀部顏色較淡，呈暗紫藍色，腹部則是灰褐色",
      "長尾為明亮的紫藍色，尾端寬大且呈白色",
      "喙為亮橙紅色，腿和腳亦是橙紅色，眼睛周圍有一圈紅色環狀",
      "聲音模仿能力非常明顯，叫聲多變，最常聽到的是刺耳的顫音和類似長笛的高亢哨音",
    ],
    diet: ["食物範圍廣泛，包括無脊椎動物、其他小型動物、水果和種子"],
    facts: [{ text: "與台灣藍鵲非常相似 (小挑戰: ", link: "https://www.hokoon.edu.hk/weeklysp/1705_4.html#gsc.tab=0" }],
    call: {
      text: "叫聲連結",
      file: "audio/red-billed-blue-magpie.mp3",
      link: "https://avifauna.hkbws.org.hk/species/0260/033400",
    },
    sources: [],
  },
  {
    id: 10,
    cnName: "蒼背山雀",
    enName: "Cinereous Tit",
    scientificName: "Parus cinereus",
    image: "img/bird10.jpg",
    habits: ["活躍於枝葉之間", "雌雄常一同活動，在冬季時亦會與其他鳥類混群出現", "於牆洞、樹洞或人工巢箱中築巢"],
    locations: ["樹林", "高大的灌木叢", "市區公園等"],
    features: [
      "小型鳥類，和麻雀差不多大小",
      "面頰白色，頭頂及頸部黑色，喙部短而粗",
      "背部灰藍色",
      "成鳥由喉部至腹部之間有一道黑色粗斑",
      "雄鳥的斑較雌鳥粗",
    ],
    diet: ["以昆蟲、螞蟻為主，兼食植物果實與種子"],
    facts: [],
    call: {
      text: "叫聲連結",
      file: "audio/cinereous-tit.mp3",
      link: "https://cms.hkbws.org.hk/cms/join-us-tw/bird-sing/soundclip7-cinereoustit",
    },
    sources: [{ label: "延伸資料（CUHK）", link: "https://www.srsdo.cuhk.edu.hk/en-gb/trees-and-birds-at-cuhk/birds/cinereous-tit" }],
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

function callMarkup(call) {
  const player = call.file
    ? `<audio class="bird-audio" controls preload="none" src="${call.file}"></audio>`
    : "";
  const linkText = call.file ? "原始來源連結" : "前往叫聲連結";

  return `
    <p>${call.text}</p>
    ${player}
    <p><a href="${call.link}" target="_blank" rel="noopener">${linkText}</a></p>
  `;
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
        ${callMarkup(bird.call)}
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
