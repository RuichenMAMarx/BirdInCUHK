const birds = [
    {
      id: 1,
      name: "示例鸟种 1",
      img: "img/placeholder1.jpg",
      description: "这是示例鸟类 1 的描述。",
      sound: "audio/sample1.mp3"
    },
    {
      id: 2,
      name: "示例鸟种 2",
      img: "img/placeholder2.jpg",
      description: "这是示例鸟类 2 的描述。",
      sound: "audio/sample2.mp3"
    }
  ];
  
  function getBirdDetail() {
    const params = new URLSearchParams(location.search);
    const id = parseInt(params.get("id"));
    const bird = birds.find(b => b.id === id);
    if (bird) {
      document.getElementById("bird-name").innerText = bird.name;
      document.getElementById("bird-img").src = bird.img;
      document.getElementById("bird-description").innerText = bird.description;
      document.getElementById("bird-sound").src = bird.sound;
    }
  }
  
  if (location.pathname.includes("bird-detail.html")) {
    getBirdDetail();
  }
  