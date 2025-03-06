function triggerConfetti() {
  confetti({
    particleCount: 400,
    spread: 200,
    origin: { y: 0.6 },
    colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'],
  });
}
const logo = document.querySelector('.navbar-brand img');
if (logo) {
  logo.addEventListener('click', triggerConfetti);
}

const buttons = document.querySelectorAll('.card button');
buttons.forEach(button => {
  button.addEventListener('click', triggerConfetti);
});