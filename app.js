let amigos = [];
console.log(amigos);
function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo == "") {
        alert("Insira um amigo.");
        return;
    }
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    atualizarLista();
}       
