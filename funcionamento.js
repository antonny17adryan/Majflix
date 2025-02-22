document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-avaliacao');
    const tabela = document.getElementById('tabela-filmes').getElementsByTagName('tbody')[0];
    let contador = 1;

    // Função para adicionar uma nova linha na tabela
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nomeFilme = document.getElementById('nome-filme').value;
        const notaFilme = document.getElementById('nota-filme').value;

        if (nomeFilme && notaFilme >= 1 && notaFilme <= 10) {
            const newRow = tabela.insertRow();
            newRow.innerHTML = `
                <td>${contador}</td>
                <td>${nomeFilme}</td>
                <td>${notaFilme}</td>
                <td>
                    <button class="btn-remover" onclick="removerLinha(this)">Remover</button>
                </td>
            `;
            contador++;
            form.reset(); // Limpa o formulário após adicionar
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });

    // Função para remover uma linha da tabela
    window.removerLinha = function (button) {
        const row = button.parentElement.parentElement;
        row.remove();
        atualizarNumeracao(); // Atualiza a numeração das linhas
    };

    // Função para atualizar a numeração das linhas
    function atualizarNumeracao() {
        const rows = tabela.getElementsByTagName('tr');
        for (let i = 0; i < rows.length; i++) {
            rows[i].getElementsByTagName('td')[0].textContent = i + 1;
        }
        contador = rows.length + 1; // Atualiza o contador
    }

    // Efeito de confete ao clicar no logo
    const logo = document.querySelector('.navbar-brand img');
    logo.addEventListener('click', () => {
        confetti({
            particleCount: 400, // Quantidade de partículas
            spread: 200, // Quão espalhado o confete será
            origin: { y: 0.6 }, // Origem do confete (0.6 = 60% da altura da tela)
            colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'], // Cores personalizadas
        });
    });
});