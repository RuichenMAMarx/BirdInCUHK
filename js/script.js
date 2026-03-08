const birds = [
  {
    id: 1,
    cnName: "白鹭",
    enName: "Little Egret",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Little_Egret_%28Egretta_garzetta%29.jpg",
    description:
      "体态修长，通体白色，常出现在河边、湖泊和湿地，善于在浅水中缓慢行走并捕食小鱼与昆虫。",
    sound: "",
  },
  {
    id: 2,
    cnName: "翠鸟",
    enName: "Common Kingfisher",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Common_Kingfisher_Alcedo_atthis.jpg",
    description:
      "羽色鲜艳，背部蓝绿、腹部橙褐，常停在水边枝头观察水面，随后快速俯冲捕食。",
    sound: "",
  },
  {
    id: 3,
    cnName: "喜鹊",
    enName: "Eurasian Magpie",
    img: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Pica_pica_-_Compans_Caffarelli_-_Toulouse%2C_France_-_flying-8.jpg",
    description:
      "黑白相间，尾羽较长，常见于校园与居民区，叫声清脆，适应能力强，食性广。",
    sound: "",
  },
  {
    id: 4,
    cnName: "麻雀",
    enName: "Eurasian Tree Sparrow",
    img: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Tree_sparrow_manchuria2.jpg",
    description:
      "体型小巧、活动灵活，成群出现在教学楼周边和草地上，是城市中最常见的鸟类之一。",
    sound: "",
  },
  {
    id: 5,
    cnName: "啄木鸟",
    enName: "Great Spotted Woodpecker",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Dendrocopos_major_male_2.jpg",
    description:
      "喙坚硬有力，常在树干上啄食昆虫，飞行呈波浪状，是森林和校园绿化区的特色鸟类。",
    sound: "",
  },
  {
    id: 6,
    cnName: "猫头鹰",
    enName: "Eurasian Eagle-Owl",
    img: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Bubo_bubo_-_01.jpg",
    description:
      "夜行性猛禽，眼睛大、听觉敏锐，常在傍晚后活动，主要捕食小型哺乳动物和鸟类。",
    sound: "",
  },
];

function renderBirdList() {
  const listContainer = document.getElementById("bird-grid");
  if (!listContainer) {
    return;
  }

  const cards = birds
    .map(
      (bird) => `
      <a class="bird-card" href="birdsdetail.html?id=${bird.id}">
        <img src="${bird.img}" alt="${bird.cnName} ${bird.enName}">
        <div class="bird-overlay">
          <h3>${bird.cnName}</h3>
          <p>${bird.enName}</p>
        </div>
      </a>
    `
    )
    .join("");

  listContainer.innerHTML = cards;
}

function renderBirdDetail() {
  const detailContainer = document.getElementById("bird-detail");
  if (!detailContainer) {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));
  const bird = birds.find((item) => item.id === id);

  if (!bird) {
    detailContainer.innerHTML =
      '<p class="detail-error">未找到该鸟类信息，请返回鸟类列表重新选择。</p>';
    return;
  }

  document.getElementById("bird-image").src = bird.img;
  document.getElementById("bird-image").alt = `${bird.cnName} ${bird.enName}`;
  document.getElementById("bird-cn-name").textContent = bird.cnName;
  document.getElementById("bird-en-name").textContent = bird.enName;
  document.getElementById("bird-description").textContent = bird.description;

  const audioWrap = document.getElementById("bird-audio-wrap");
  const audio = document.getElementById("bird-audio");
  if (audioWrap && audio) {
    if (bird.sound) {
      audio.src = bird.sound;
      audioWrap.hidden = false;
    } else {
      audioWrap.hidden = true;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  renderBirdList();
  renderBirdDetail();
});
