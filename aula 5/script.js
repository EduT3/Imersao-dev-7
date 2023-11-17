var paulo = {
  nome: "Paulo",
  vitoria: 0,
  Empate: 0,
  Derrota: 0,
  pontos: 0,
};

var rafa = {
  nome: "Rafa",
  vitoria: 0,
  Empate: 0,
  Derrota: 0,
  pontos: 0,
};

var elementoTabela = document.getElementById("tabelaJogadores");

function exibirNaTela() {
  elementoTabela.innerHTML = `
<tr>
        <td>${paulo.nome}</td>
        <td>${paulo.vitoria}</td>
        <td>${paulo.Empate}</td>
        <td>${paulo.Derrota}</td>
        <td>${paulo.pontos}</td>
        <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
        <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
      </tr>
      <tr>
        <td>${rafa.nome}</td>
        <td>${rafa.vitoria}</td>
        <td>${rafa.Empate}</td>
        <td>${rafa.Derrota}</td>
        <td>${rafa.pontos}</td>
        <td><button onClick="adicionarVitoria(rafa)">Vitória</button></td>
        <td><button onClick="adicionarEmpate(rafa)">Empate</button></td>
        <td><button onClick="adicionarDerrota(rafa)">Derrota</button></td>
      </tr>
`;
}

exibirNaTela();

function adicionarVitoria(jogador) {
  jogador.vitoria++;
  jogador.pontos = jogador.pontos + 3;
  exibirNaTela();
}

function adicionarEmpate(jogador) {
  jogador.Empate++;
  jogador.pontos++;
  exibirNaTela();
}

function adicionarDerrota(jogador) {
  jogador.Derrota++;
  exibirNaTela();
}
