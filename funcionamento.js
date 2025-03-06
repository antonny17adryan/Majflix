document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form-avaliacao');
    const tabela = document.getElementById('tabela-filmes').getElementsByTagName('tbody')[0];
    let filmes = [
        { nome: "O Poderoso Chefão", nota: 9 },
        { nome: "Interestelar", nota: 10 },
        { nome: "Clube da Luta", nota: 8 },
        { nome: "Matrix", nota: 9 },
        { nome: "Cidade de Deus", nota: 10 },
        { nome: "O Senhor dos Anéis: O Retorno do Rei", nota: 10 },
        { nome: "Forrest Gump", nota: 8 },
        { nome: "Gladiador", nota: 9 },
        { nome: "Titanic", nota: 7 },
        { nome: "Os Infiltrados", nota: 8 }
    ];

    // Atualiza a tabela ao carregar a página
    atualizarTabela();

    // Adiciona um filme ao enviar o formulário
    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nomeFilme = document.getElementById('nome-filme').value;
        const notaFilme = parseInt(document.getElementById('nota-filme').value);

        if (nomeFilme && notaFilme >= 1 && notaFilme <= 10) {
            const filme = { nome: nomeFilme, nota: notaFilme };
            filmes.push(filme);
            atualizarTabela();
            form.reset();
        } else {
            alert('Por favor, preencha todos os campos corretamente.');
        }
    });

    // Atualiza a tabela com os filmes
    function atualizarTabela() {
        tabela.innerHTML = '';
        filmes.forEach((filme, index) => {
            const newRow = tabela.insertRow();
            newRow.innerHTML = `
                <td>${index + 1}</td>
                <td>${filme.nome}</td>
                <td>${filme.nota}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="editarFilme(${index})">Editar</button>
                    <button class="btn btn-danger btn-sm" onclick="removerLinha(${index})">Remover</button>
                </td>
            `;
        });
    }

    // Função para editar um filme
    window.editarFilme = function (index) {
        const filme = filmes[index];
        document.getElementById('nome-filme').value = filme.nome;
        document.getElementById('nota-filme').value = filme.nota;
        filmes.splice(index, 1);
        atualizarTabela();
    };

    // Função para remover um filme
    window.removerLinha = function (index) {
        filmes.splice(index, 1);
        atualizarTabela();
    };

    // Ordena os filmes por nome
    function ordenarPorNome() {
        filmes.sort((a, b) => a.nome.localeCompare(b.nome));
        atualizarTabela();
    }

    // Ordena os filmes por nota (decrescente)
    function ordenarPorNota() {
        filmes.sort((a, b) => b.nota - a.nota);
        atualizarTabela();
    }

    // Adiciona event listeners para ordenação
    const thNome = document.querySelector('th:nth-child(2)');
    const thNota = document.querySelector('th:nth-child(3)');

    thNome.addEventListener('click', ordenarPorNome);
    thNota.addEventListener('click', ordenarPorNota);

    // Efeito de confetti ao clicar no logo
    const logo = document.querySelector('.navbar-brand img');
    logo.addEventListener('click', () => {
        confetti({
            particleCount: 400,
            spread: 200,
            origin: { y: 0.6 },
            colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'],
        });
    });

    // Efeito de clique no milho
    let milho = document.getElementById("milho");
    let cont = 0;

    milho.addEventListener("click", () => {
        cont++;
        if (cont === 5) {
            milho.textContent = "🍿";
            milho.style.pointerEvents = "none"; // Impede mais cliques
            createPopcornRain(); // Inicia o efeito de pipocas caindo
        }
    });

    // Função para criar pipocas caindo
    function createPopcornRain() {
        const backgroundPopcorn = document.getElementById('background-popcorn');
        const numPopcorns = 50; // Número de pipocas

        for (let i = 0; i < numPopcorns; i++) {
            const popcorn = document.createElement('div');
            popcorn.textContent = '🍿';
            popcorn.classList.add('popcorn');
            popcorn.style.left = `${Math.random() * 100}vw`; // Posição horizontal aleatória
            popcorn.style.animationDuration = `${Math.random() * 2 + 1}s`; // Velocidade aleatória
            backgroundPopcorn.appendChild(popcorn);

            // Remove a pipoca do DOM após a animação terminar
            popcorn.addEventListener('animationend', () => {
                popcorn.remove();
            });
        }
    }

    // Código Konami
    const konamiCode = [
        'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
        'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
        'b', 'a'
    ];
    let konamiCodePosition = 0;

    document.addEventListener('keydown', (e) => {
        const requiredKey = konamiCode[konamiCodePosition];

        if (e.key === requiredKey) {
            konamiCodePosition++;

            if (konamiCodePosition === konamiCode.length) {
                activateKonamiCode();
                konamiCodePosition = 0;
            }
        } else {
            konamiCodePosition = 0;
        }
    });

    // Ativa o efeito do código Konami
    function activateKonamiCode() {
        const message = document.getElementById('message');
        message.textContent = "Que usuário curioso você é"; // Define o texto
        message.classList.remove('hidden');
        message.classList.add('visible');

        // Cria o efeito de sangue
        const bloodEffect = document.createElement('div');
        bloodEffect.classList.add('blood-effect');
        document.body.appendChild(bloodEffect);

        // Faz o texto desaparecer gradualmente enquanto o sangue escorre
        setTimeout(() => {
            message.style.opacity = 0; // Texto desaparece
        }, 1500); // Começa a desaparecer após 1,5 segundos (metade da animação do sangue)

        // Remove a mensagem e o efeito de sangue após a animação terminar
        setTimeout(() => {
            message.classList.remove('visible');
            message.classList.add('hidden');
            bloodEffect.remove();
        }, 5000); // Tudo desaparece após 5 segundos
    }
});