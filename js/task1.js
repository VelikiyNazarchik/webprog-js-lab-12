async function fetchNumber() {
    return new Promise(resolve => {
      setTimeout(() => resolve(42), 2000);
    });
  }
  
  async function getNumber() {
    try {
      const number = await fetchNumber();
      document.getElementById("result").textContent = `Число: ${number}`;
    } catch (error) {
      document.getElementById("result").textContent = `Помилка: ${error.message}`;
    }
  }
  
  document.addEventListener("DOMContentLoaded", getNumber);
  