// Authentication module

// Check if user is logged in
function isLoggedIn() {
  return localStorage.getItem('userToken') !== null;
}

// Get current user
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('currentUser') || '{}');
}

// Login user
function loginUser(username, password) {
  // TODO: Implement authentication logic
  const user = { username, id: Date.now() };
  localStorage.setItem('userToken', 'token_' + Date.now());
  localStorage.setItem('currentUser', JSON.stringify(user));
  return user;
}

// Logout user
function logoutUser() {
  localStorage.removeItem('userToken');
  localStorage.removeItem('currentUser');
}

// Register new user
function registerUser(username, email, password) {
  // TODO: Implement registration logic
  return loginUser(username, password);
}
