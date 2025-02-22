function triggerConfetti() {
    confetti({
      particleCount: 400, // Quantidade de partículas
      spread: 200, // Quão espalhado o confete será
      origin: { y: 0.6 }, // Origem do confete (0.6 = 60% da altura da tela)
      colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'], // Cores personalizadas
    });
  }

  // Adiciona o evento de clique ao logo da Netflix
  const logo = document.querySelector('.navbar-brand img');
  if (logo) {
    logo.addEventListener('click', triggerConfetti);
  }

  // Adiciona o evento de clique aos botões dos cards
  const buttons = document.querySelectorAll('.card button');
  buttons.forEach(button => {
    button.addEventListener('click', triggerConfetti);
  });