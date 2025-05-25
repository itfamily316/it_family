const newsContainer = document.getElementById('news-container');

function loadNews(count = 6) {
  for (let i = 0; i < count; i++) {
    const item = document.createElement('div');
    item.className = 'news-item';
    item.innerHTML = `
      <h3>Headline ${Math.floor(Math.random() * 1000)}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae.</p>
    `;
    newsContainer.appendChild(item);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  loadNews();
});
const texts = ["سحر التكنولوجيا ", "عولمة لا محدودة", "إتصالات آمنة", "هندسة النظم"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % texts.length;
    document.getElementById("changing-text").textContent = texts[index];
  }, 2000); // Change text every 2 seconds