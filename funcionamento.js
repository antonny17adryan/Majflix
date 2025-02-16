document.addEventListener('DOMContentLoaded', function () {
    const botaoAdicionar = document.getElementById('botao-adicionar');
    const tabela = document.querySelector('tbody.formatacao');

    botaoAdicionar.addEventListener('click', function(event) {
        event.preventDefault(); 

        const nomeFilme = document.getElementById('nome-filme').value;
        const notaFilme = document.getElementById('nota-filme').value;

        if (nomeFilme === "" || notaFilme === "") {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        console.log("Nome do Filme: ", nomeFilme);
        console.log("Nota do Filme: ", notaFilme);

        let linhaPreenchida = false;

        for (let i = 0; i < 10; i++) {
            const linha = tabela.rows[i];
            const celulaFilme = linha.cells[1]; 
            const celulaNota = linha.cells[2]; 

            if (celulaFilme.textContent === "" && celulaNota.textContent === "") {
                celulaFilme.textContent = nomeFilme;
                celulaNota.textContent = notaFilme;
                linhaPreenchida = true;
                break;  
            }
        }

        if (!linhaPreenchida) {
            const numeroLinhas = tabela.rows.length; 
            const novaLinha = tabela.insertRow(numeroLinhas); 
            novaLinha.innerHTML = `
                <th>${numeroLinhas + 1}</th>
                <td>${nomeFilme}</td>
                <td>${notaFilme}</td>
            `;
        }

        document.getElementById('nome-filme').value = '';
        document.getElementById('nota-filme').value = '';
    });
});
