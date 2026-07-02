// Games module - Handles game list and game selection

const games = [
  {
    id: 1,
    name: 'Crash Game',
    description: 'Predict when the multiplier will crash',
    minBet: 10,
    maxBet: 1000
  },
  {
    id: 2,
    name: 'Double or Nothing',
    description: 'Simple 50/50 chance to double your bet',
    minBet: 5,
    maxBet: 500
  },
  {
    id: 3,
    name: 'Lucky Draw',
    description: 'Draw a number and multiply your bet',
    minBet: 20,
    maxBet: 2000
  }
];

// Load games on page
function loadGames() {
  const gamesGrid = document.getElementById('gamesGrid');
  if (!gamesGrid) return;
  
  gamesGrid.innerHTML = games.map(game => `
    <div class="game-card" onclick="selectGame(${game.id})">
      <h3>${game.name}</h3>
      <p>${game.description}</p>
      <p class="bet-range">Bet: $${game.minBet} - $${game.maxBet}</p>
      <button>Play Now</button>
    </div>
  `).join('');
}

// Select and play a game
function selectGame(gameId) {
  const game = games.find(g => g.id === gameId);
  if (game) {
    window.location.href = 'index.html?game=' + gameId;
  }
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadGames);
} else {
  loadGames();
}
