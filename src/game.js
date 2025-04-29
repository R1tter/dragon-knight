import { loadAssets } from "./assets.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const startScreen = document.getElementById("startScreen");
const gameOverScreen = document.getElementById("gameOverScreen");
const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

// Ajustar o tamanho inicial do canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Evento de Start
startBtn.addEventListener("click", startGame);
restartBtn.addEventListener("click", startGame);

function startGame() {
  startScreen.style.display = "none";
  gameOverScreen.style.display = "none";

  // Aqui vamos começar a carregar tudo
  loadAssets().then(() => {
    console.log("Assets carregados! 🚀");
    // TODO: Inicializar o loop do jogo
  });
}
