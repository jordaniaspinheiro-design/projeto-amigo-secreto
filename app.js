let nomes = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido!");
    return;
  }

  nomes.push(nome);
  atualizarLista();
  input.value = "";
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  nomes.forEach((nome) => {
    const li = document.createElement("li");
    li.textContent = nome;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (nomes.length === 0) {
    alert("Adicione pelo menos um nome para sortear!");
    return;
  }

  const sorteado = nomes[Math.floor(Math.random() * nomes.length)];
  document.getElementById("resultado").textContent =
    "O amigo secreto sorteado é: " + sorteado;
}