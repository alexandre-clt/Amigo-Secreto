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
