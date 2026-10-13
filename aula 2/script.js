const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let vidas = 10;
let encerrado = false;
const jogo = document.querySelector("#jogo");
jogo.innerHTML = `<p id="mensagem" role="status">Digite um número entre 1 e 100. Você tem 10 chances.</p>
  <form id="palpite"><label for="text">Seu palpite</label>
  <input type="number" min="1" max="100" step="1" id="text" required>
  <button id="btn" type="submit">Inserir</button></form>`;
document.getElementById("palpite").addEventListener("submit", event => { event.preventDefault(); game(); });

function game() {
  if (encerrado) return;
  const campo = document.getElementById("text");
  const chute = Number(campo.value);
  const mensagem = document.getElementById("mensagem");
  if (!campo.value.trim() || !Number.isInteger(chute) || chute < 1 || chute > 100) {
    mensagem.textContent = "Digite um número inteiro entre 1 e 100. Nenhuma chance foi perdida.";
    return;
  }
  vidas--;
  if (chute === numeroSecreto || vidas === 0) {
    encerrado = true;
    mensagem.textContent = chute === numeroSecreto ? "Parabéns! Você acertou!" : `Fim de jogo. O número secreto era ${numeroSecreto}.`;
    campo.disabled = true;
    document.getElementById("btn").disabled = true;
    return;
  }
  mensagem.textContent = `O número secreto é ${chute < numeroSecreto ? "maior" : "menor"}. Restam ${vidas} chances.`;
  campo.value = "";
  campo.focus();
}
