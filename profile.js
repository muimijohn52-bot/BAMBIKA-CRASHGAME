// Profile module - User profile management

class UserProfile {
  constructor() {
    this.user = getCurrentUser();
  }

  getProfile() {
    return this.user;
  }

  updateProfile(data) {
    this.user = { ...this.user, ...data };
    localStorage.setItem('currentUser', JSON.stringify(this.user));
    return this.user;
  }

  getStats() {
    return {
      totalGamesPlayed: localStorage.getItem('totalGamesPlayed') || 0,
      totalWins: localStorage.getItem('totalWins') || 0,
      totalLosses: localStorage.getItem('totalLosses') || 0,
      balance: localStorage.getItem('balance') || 0,
      joinDate: localStorage.getItem('joinDate') || new Date().toISOString()
    };
  }

  updateStats(stats) {
    Object.keys(stats).forEach(key => {
      localStorage.setItem(key, stats[key]);
    });
  }
}

const profile = new UserProfile();
