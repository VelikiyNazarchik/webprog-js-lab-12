async function fetchUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
    const list = document.getElementById('userList');
    users.forEach(user => {
      const li = document.createElement('li');
      li.textContent = `${user.name} (${user.email})`;
      list.appendChild(li);
    });
  }
  
  async function fetchUserById(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return await res.json();
  }
  
  async function loadUserById() {
    const id = document.getElementById('userId').value;
    const user = await fetchUserById(id);
    document.getElementById('userDetails').textContent = JSON.stringify(user, null, 2);
  }
  
  document.addEventListener("DOMContentLoaded", fetchUsers);
  