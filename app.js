let amigos = [];

function adicionarAmigo() {
    let listaAmigo = document.querySelector("input")
    if (listaAmigo.value == "") {
        alert("Por favor, insira um nome!");
    } else {
    amigos.push(listaAmigo.value);
    exibirAmigos();
    listaAmigo.value = "";
    }   
}    

function exibirAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
     for (let nome of amigos) {
        let li = document.createElement("li");
        li.innerHTML = nome;
        lista.appendChild(li); 




    }
}

function sortearAmigo() {
    if (amigos.length == 0) {
        alert("Por favor, adicione amigos para sortear!");
    } else {
        let amigoSecreto = parseInt(Math.random() * amigos.length);
        let amigoSorteado = amigos[amigoSecreto];
        let resultado = document.getElementById("resultado");
        let textoResultado = `O amigo secreto é: ${amigoSorteado}`;
        resultado.innerHTML = textoResultado;
    }
    setTimeout(reiniciarJogo, 5000);
    }
    
function reiniciarJogo() {
    window.location.reload();
}