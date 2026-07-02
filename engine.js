// Game Engine - Core crash game logic

class CrashGame {
  constructor() {
    this.multiplier = 1.0;
    this.isCrashed = false;
    this.gameActive = false;
    this.startTime = null;
    this.crashMultiplier = null;
  }

  // Start a new game round
  startRound() {
    this.multiplier = 1.0;
    this.isCrashed = false;
    this.gameActive = true;
    this.startTime = Date.now();
    this.crashMultiplier = this.calculateCrashPoint();
    this.runGame();
  }

  // Calculate when the game will crash
  calculateCrashPoint() {
    // Random crash between 1.1x and 10x
    return parseFloat((Math.random() * 9 + 1.1).toFixed(2));
  }

  // Run the game simulation
  runGame() {
    if (!this.gameActive) return;
    
    const elapsed = (Date.now() - this.startTime) / 100;
    this.multiplier = parseFloat((1 + elapsed * 0.1).toFixed(2));

    if (this.multiplier >= this.crashMultiplier) {
      this.crash();
    } else {
      requestAnimationFrame(() => this.runGame());
    }
  }

  // Crash the game
  crash() {
    this.isCrashed = true;
    this.gameActive = false;
  }

  // Cashout at current multiplier
  cashout() {
    if (!this.gameActive) return null;
    const amount = this.multiplier;
    this.gameActive = false;
    return amount;
  }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CrashGame;
}
