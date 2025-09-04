document.getElementById("click-btn").addEventListener("click", () => {
  const emoji = document.createElement("div");
  emoji.textContent = "🦎 Lizard!";
  emoji.classList.add("emoji");
  emoji.style.left = Math.random() * 80 + "%";
  emoji.style.top = "150px";
  document.getElementById("click-area").appendChild(emoji);

  setTimeout(() => emoji.remove(), 1000);

  // Play sound
  const audio = new Audio("click.mp3"); // add click.mp3 in repo
  audio.play();
});

document.getElementById("ad-btn").addEventListener("click", () => {
  alert("This is an ad placeholder!");
});
