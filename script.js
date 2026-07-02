// Main script - Core functionality

// Initialize app on page load
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
});

// Initialize application
function initializeApp() {
  if (!isLoggedIn()) {
    // Redirect to login if not authenticated
    if (window.location.pathname !== '/login.html') {
      // User should be directed to login page
    }
  } else {
    // Update UI with user info
    const user = getCurrentUser();
    updateUserDisplay(user);
  }
}

// Setup event listeners
function setupEventListeners() {
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', function(e) {
      e.preventDefault();
      logoutUser();
      window.location.href = 'index.html';
    });
  }
}

// Update user display on page
function updateUserDisplay(user) {
  const userDisplay = document.getElementById('userDisplay');
  if (userDisplay) {
    userDisplay.textContent = user.username || 'User';
  }
}

// Format currency
function formatCurrency(amount) {
  return '$' + parseFloat(amount).toFixed(2);
}

// Show notification
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 5000);
}

// Utility function to get URL parameters
function getUrlParameter(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}
