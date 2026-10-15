const botao = document.querySelector("#btn");
const status = document.querySelector("#status");

function acenderLuz() {
    status.textContent = "Luz acesa!";
}

botao.addEventListener("click", acenderLuz);