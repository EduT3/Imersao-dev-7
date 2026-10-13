const listaFilmes = [];

function adicionarFilme() {
  const campoUrl = document.getElementById("filme");
  const campoNome = document.getElementById("nomeFilme");
  const nome = campoNome.value.trim();
  let url;
  try {
    url = new URL(campoUrl.value.trim());
    if (!["https:", "http:"].includes(url.protocol) || !nome) throw new Error("Entrada inválida");
  } catch {
    alert("Informe o nome do filme e uma URL de imagem http ou https válida.");
    return;
  }
  listaFilmes.push({ url: url.href, nome });
  atualizarListaFilmes();
  campoUrl.value = "";
  campoNome.value = "";
  campoUrl.focus();
}

function atualizarListaFilmes() {
  const elementoFilmes = document.getElementById("listaFilmes");
  elementoFilmes.replaceChildren();
  listaFilmes.forEach((filme, indice) => {
    const card = document.createElement("div");
    card.className = "filme-item";
    const imagem = document.createElement("img");
    imagem.src = filme.url;
    imagem.alt = filme.nome;
    imagem.loading = "lazy";
    const nome = document.createElement("p");
    nome.textContent = filme.nome;
    const remover = document.createElement("button");
    remover.textContent = "Remover";
    remover.setAttribute("aria-label", `Remover ${filme.nome}`);
    remover.addEventListener("click", () => removerFilme(indice));
    card.append(imagem, nome, remover);
    elementoFilmes.appendChild(card);
  });
}

function removerFilme(indice) {
  listaFilmes.splice(indice, 1);
  atualizarListaFilmes();
}
