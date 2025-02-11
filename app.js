let amigos = [];
let listaAmigos = document.querySelector("#listaAmigos");

const adicionarAmigo = () => {
    const amigo = document.querySelector("#amigo").value;
    amigo == "" ? alert("Por favor, insira um nome.") : amigos.push(amigo);

    adicionarNaTela(amigo, "mostrar");
    limparCampo();
}

const limparCampo = () => {
    document.querySelector("#amigo").value = "";
}

const sortearAmigo = () => {
    try {
        if (amigos.length == 0) {
            throw new Error("Por favor, insira um nome.");
        }

        adicionarNaTela(amigo);
        let resultado = document.querySelector("#resultado");
        let li = document.createElement("li");
        let random = parseInt(Math.random() * amigos.length + 1);
        li.innerHTML = `O amigo sorteado é: <span>${amigos[random - 1]}</span>`;
        resultado.appendChild(li);
        amigos = [];
    } catch (erro) {
        alert(erro);
    }

}

const adicionarNaTela = (amigo, condicao) => {
    if (condicao === "mostrar") {
        let li = document.createElement("li");
        li.innerHTML = amigo;
        listaAmigos.appendChild(li);
    } else {
        listaAmigos.innerHTML = "";
    }

}