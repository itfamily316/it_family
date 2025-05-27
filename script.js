const texts = ["أنظمة آمنة","تبادل معلومات","إكتسب خبرات","إكتفاء ذاتي","تقنية متجددة"]
  let index = 0;

  setInterval(() => {
    index = (index + 1) % texts.length;
    document.getElementById("changing-text").textContent = texts[index];
  }, 2000); // Change text every 2 seconds
function home() {
  document.getElementById("main-page").style.display = "block ";  
document.getElementById("news-page").style.display ="none";    
}
function news() {
  document.getElementById("main-page").style.display = "none";  
document.getElementById("news-page").style.display ="block";
}
function media() {
document.getElementById("overlay").style.display="flex";  
}
function confirmYes() {
document.getElementById("overlay").style.display="none";    
}
