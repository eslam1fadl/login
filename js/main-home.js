var items = document.getElementById('items');
var username = localStorage.getItem('username'); 
if (username) {
    items.innerHTML = `
    <div class="d-flex justify-content-center align-items-center text-center text-white">
      <h1 class="welcom">Welcome to ${username}</h1>
    </div>
  `;
} 

function logout() {
  localStorage.removeItem('username'); 
  window.location.href = 'index.html'; 
}
