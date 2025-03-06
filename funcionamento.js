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

    atualizarTabela();

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

    window.editarFilme = function (index) {
        const filme = filmes[index];
        document.getElementById('nome-filme').value = filme.nome;
        document.getElementById('nota-filme').value = filme.nota;
        filmes.splice(index, 1);
        atualizarTabela();
    };

    window.removerLinha = function (index) {
        filmes.splice(index, 1);
        atualizarTabela();
    };

    function ordenarPorNome() {
        filmes.sort((a, b) => a.nome.localeCompare(b.nome));
        atualizarTabela();
    }

    function ordenarPorNota() {
        filmes.sort((a, b) => b.nota - a.nota);
        atualizarTabela();
    }

    const thNome = document.querySelector('th:nth-child(2)');
    const thNota = document.querySelector('th:nth-child(3)');

    thNome.addEventListener('click', ordenarPorNome);
    thNota.addEventListener('click', ordenarPorNota);

    const logo = document.querySelector('.navbar-brand img');
    logo.addEventListener('click', () => {
        confetti({
            particleCount: 400,
            spread: 200,
            origin: { y: 0.6 },
            colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'],
        });
    });

    let milho = document.getElementById("milho");
    let cont = 0;

    milho.addEventListener("click", () => {
        cont++;
        if (cont === 5) {
            milho.textContent = "🍿";
            milho.style.pointerEvents = "none";
            createPopcornRain();
        }
    });

    // Função para criar pipocas caindo
    function createPopcornRain() {
        const backgroundPopcorn = document.getElementById('background-popcorn');
        const numPopcorns = 50;

        for (let i = 0; i < numPopcorns; i++) {
            const popcorn = document.createElement('div');
            popcorn.textContent = '🍿';
            popcorn.classList.add('popcorn');
            popcorn.style.left = `${Math.random() * 100}vw`;
            popcorn.style.animationDuration = `${Math.random() * 2 + 1}s`;
            backgroundPopcorn.appendChild(popcorn);


            popcorn.addEventListener('animationend', () => {
                popcorn.remove();
            });
        }
    }

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
    function activateKonamiCode() {
        const message = document.getElementById('message');
        message.textContent = "Que usuário curioso você é";
        message.classList.remove('hidden');
        message.classList.add('visible');

        const bloodEffect = document.createElement('div');
        bloodEffect.classList.add('blood-effect');
        document.body.appendChild(bloodEffect);

        setTimeout(() => {
            message.style.opacity = 0;
        }, 1500);

        setTimeout(() => {
            message.classList.remove('visible');
            message.classList.add('hidden');
            bloodEffect.remove();
        }, 5000);
    }
});