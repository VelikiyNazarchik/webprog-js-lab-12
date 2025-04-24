let currentPage = 1;
const limit = 5;

async function fetchPosts(page, limit) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`);
  return await res.json();
}

async function loadPosts() {
  const posts = await fetchPosts(currentPage, limit);
  const container = document.getElementById('posts');
  posts.forEach(post => {
    const div = document.createElement('div');
    div.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
    container.appendChild(div);
  });
  currentPage++;
}

document.getElementById('loadMore').addEventListener('click', loadPosts);

document.addEventListener("DOMContentLoaded", loadPosts);
