import getCats from "./theCatAPI.js";

document.addEventListener("DOMContentLoaded", () => {
    mostrarGatos();
});

const mostrarGatos = async () => {
    const gatos = await getCats();
    let boxGatos = document.getElementById("boxGatos");
    boxGatos.innerHTML = gatos.map(gato => `<img src=${gato.url} width=200>`).join("");
}
