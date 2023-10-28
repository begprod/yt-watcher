const input = document.getElementById('iframe-input');
const player = document.getElementById('player');

input.addEventListener("change", (event) => {
  const inputData = event.target.value;

  if (inputData) {
    player.innerHTML = inputData;

    player.style.opacity = 1;
  }
});

window.addEventListener('beforeunload', (event) => {
  event.returnValue = `Are you sure you want to leave?`;
});
