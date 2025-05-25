const texts = ["سحر التكنولوجيا ", "عولمة لا محدودة", "إتصالات آمنة", "هندسة النظم"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % texts.length;
    document.getElementById("changing").textContent = texts[index];
  }, 2000); // Change text every 2 seconds