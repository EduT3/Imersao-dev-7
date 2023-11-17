var listaFilmes = [];

function adicionarFilme() {
  var url = document.querySelector("#filme").value;
  var nomeFilme = document.querySelector("#nomeFilme").value;

  if (url !== "" && nomeFilme !== "") {
    var filme = {
      url: url,
      nome: nomeFilme
    };

    listaFilmes.push(filme);

    atualizarListaFilmes();
    limparInputs();
  } else {
    alert("Por favor, insira o endereço de imagem e o nome do filme.");
  }
}

function atualizarListaFilmes() {
    var elementoFilmes = document.getElementById("listaFilmes");
    elementoFilmes.innerHTML = "";
  
    listaFilmes.forEach(function(filme) {
      elementoFilmes.innerHTML += `<div class="filme-item">
                                      <img src="${filme.url}" alt="${filme.nome}">
                                      <p>${filme.nome}</p>
                                      <button onclick="removerFilme('${filme.nome}')">Remover</button>
                                    </div>`;
    });
  
  }
  
  

function limparInputs() {
  document.querySelector("#filme").value = "";
  document.querySelector("#nomeFilme").value = "";
}

function removerFilme(nomeFilme) {
  listaFilmes = listaFilmes.filter(function(filme) {
    return filme.nome !== nomeFilme;
  });

  atualizarListaFilmes();
}
