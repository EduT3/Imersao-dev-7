var numeroSecreto = parseInt(Math.random() * 100);
var vidas = 10;
var jogo = document.querySelector("#jogo");

function game() {
    let chute = parseInt(document.querySelector("#text").value);

    if (chute === numeroSecreto || vidas <= 0) {
        endGame(chute === numeroSecreto);
    } else if (chute < numeroSecreto && vidas > 0) {
        vidas--;
        jogo.innerHTML = `<p>Errou! O número secreto é maior. Você tem ${vidas} chance${vidas === 1 ? '' : 's'}</p>
            <input type="text" id="text">
            <button id="btn" onclick="game()">Inserir</button>
        `;
    } else if (chute > numeroSecreto && vidas > 0) {
        vidas--;
        jogo.innerHTML = `<p>Errou! O número secreto é menor. Você tem ${vidas} chance${vidas === 1 ? '' : 's'}</p>
            <input type="text" id="text">
            <button id="btn" onclick="game()">Inserir</button>`;
    }
}

function endGame(acertou) {
    if (acertou) {
        jogo.innerHTML += `<p>Parabéns! Você acertou o número secreto!</p>`;
    } else {
        jogo.innerHTML += `<p>Fim de jogo. Você não acertou. O número secreto era ${numeroSecreto}.</p>`;
    }

    // Hide input and button
    document.querySelector("#text").style.display = "none";
    document.querySelector("#btn").style.display = "none";
}

// Initial display
jogo.innerHTML = `
    <p>Digite o número entre 1 e 100.... Você tem ${vidas} chances</p>
    <input type="text" id="text">
    <button id="btn" onclick="game()">Inserir</button>
`;
