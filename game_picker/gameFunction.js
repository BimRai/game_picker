function pickGame() {
    // Array of games
    var games = [
        "Counter-Strike",
        "Halo Infinite",
        "Call of Duty",
        "Minecraft",
        "Resident Evil: Shadows Of Rose",
        "GTA V",
        "Tekken",
        "Golf With Friends",
        "Spider-Man",
        "Phasmaphobia",
    ];

    var randomIndex = Math.floor(Math.random() * games.length);

    var resultElement = document.getElementById("result");
    resultElement.textContent = games[randomIndex];
}