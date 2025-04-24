// 1. Оновлення постів
async function displayPosts() {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      const posts = await res.json();
      const container = document.getElementById('posts');
      container.innerHTML = '';
  
      posts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `<strong>${post.title}</strong><p>${post.body}</p>`;
        div.style.marginBottom = '10px';
        container.appendChild(div);
      });
    } catch (error) {
      console.error('Помилка завантаження постів:', error);
    }
  }
  
  document.getElementById('refreshPostsBtn').addEventListener('click', displayPosts);
  
  // 2. Завантаження коментарів
  async function loadComments() {
    const id = document.getElementById('postId').value;
    const list = document.getElementById('comments');
    list.innerHTML = '';
  
    if (!id) {
      alert('Введіть ID поста!');
      return;
    }
  
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
      const comments = await res.json();
  
      comments.forEach(comment => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${comment.name}</strong>: ${comment.body}`;
        list.appendChild(li);
      });
    } catch (error) {
      console.error('Помилка завантаження коментарів:', error);
    }
  }
  
  // 3. Фото автомобілів
  async function loadCarImage() {
    const model = document.getElementById('carModel').value.trim();
    const output = document.getElementById('carImage');
    output.innerHTML = '';
  
    if (!model) {
      output.textContent = 'Введіть модель авто!';
      return;
    }
  
    try {
      const res = await fetch(`https://www.carimagery.com/api.asmx/GetImageUrl?searchTerm=${encodeURIComponent(model)}`);
      const xml = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(xml, "text/xml");
      const url = doc.getElementsByTagName("string")[0]?.textContent;
  
      if (!url || url.includes("notfound")) {
        output.textContent = "Фото не знайдено 😕";
        return;
      }
  
      const img = document.createElement('img');
      img.src = url;
      img.alt = model;
      img.style.width = '300px';
      img.style.borderRadius = '10px';
      output.appendChild(img);
    } catch (error) {
      console.error('Помилка завантаження авто:', error);
      output.textContent = "Щось пішло не так 😢";
    }
  }
  
  // Стартова ініціалізація
  document.addEventListener('DOMContentLoaded', () => {
    displayPosts();
  });
  