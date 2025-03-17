const amigos = [];
const nomeInput = document.querySelector("input");

function verificaVazio(valor) {
    return valor.length === 0;
}

function adicionarAmigo() {
    const nome = nomeInput.value;

    if (verificaVazio(nome)) {
        alert("Por favor, insira um nome.");
    } else {
        amigos.push(nome);
        nomeInput.value = "";
        mostrarLista();
    }
}

function mostrarLista() {
    const listaExibida = document.getElementById("listaAmigos");
    listaExibida.innerHTML = ""; // Limpa a lista antes de recriá-la

    amigos.forEach((pessoa) => {
        const li = document.createElement("li");
        li.innerText = pessoa;
        listaExibida.appendChild(li);
    });
}

function sortearAmigo() {
    const resultadoElemento = document.getElementById("resultado");

    if (verificaVazio(amigos)) {
        alert("Por favor, adicione nomes antes de sortear.");
    } else {
        const posicaoEscolhido = Math.floor(Math.random() * amigos.length);
        const nomeEscolhido = amigos[posicaoEscolhido];
        resultadoElemento.innerHTML = `Amigo sorteado: <strong>${nomeEscolhido}</strong>`;
    }
}