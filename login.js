// Login module - Handle user login

function handleLogin() {
  const username = document.getElementById('username')?.value;
  const password = document.getElementById('password')?.value;

  if (!username || !password) {
    alert('Please enter username and password');
    return false;
  }

  if (loginUser(username, password)) {
    window.location.href = 'index.html';
  }
}

function handleRegister() {
  const username = document.getElementById('reg-username')?.value;
  const email = document.getElementById('reg-email')?.value;
  const password = document.getElementById('reg-password')?.value;

  if (!username || !email || !password) {
    alert('Please fill in all fields');
    return false;
  }

  if (registerUser(username, email, password)) {
    window.location.href = 'index.html';
  }
}

function toggleAuthForm() {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  
  if (loginForm) {
    loginForm.style.display = loginForm.style.display === 'none' ? 'block' : 'none';
  }
  if (registerForm) {
    registerForm.style.display = registerForm.style.display === 'none' ? 'block' : 'none';
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const toggleBtn = document.getElementById('toggleAuthBtn');

  if (loginBtn) loginBtn.addEventListener('click', handleLogin);
  if (registerBtn) registerBtn.addEventListener('click', handleRegister);
  if (toggleBtn) toggleBtn.addEventListener('click', toggleAuthForm);
});
