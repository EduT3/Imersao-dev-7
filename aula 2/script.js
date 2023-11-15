var numeroSecreto = parseInt(Math.random() * 100);
var vidas = 10;

while (chute != numeroSecreto && vidas > 0) {
  var chute = prompt("Digite o número entre 1 e 100.... Você tem " + vidas + " chances");

  if (chute == numeroSecreto) {
    alert("Acertou!");
  } else if (chute < numeroSecreto) {
    vidas = vidas - 1;
    alert("Errou! o número secreto é maior. Você tem " + vidas);
  } else if (chute > numeroSecreto) {
      vidas = vidas - 1;
      alert("Errou! o número secreto é menor. Você tem " + vidas);
  }
}
