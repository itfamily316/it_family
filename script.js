const texts = ["سحر التكنولوجيا ", "عولمة لا محدودة", "إتصالات آمنة", "هندسة النظم"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % texts.length;
    document.getElementById("changing-text").textContent = texts[index];
  }, 4000); // Change text every 2 seconds