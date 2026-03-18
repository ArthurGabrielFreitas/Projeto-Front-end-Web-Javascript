import getCats from "./theCatAPI.js";

document.addEventListener("DOMContentLoaded", () => {
    mostrarGatos();
});

const mostrarGatos = async () => {
    const gatos = await getCats();
    let boxGatos = document.getElementById("boxGatos");
    boxGatos.innerHTML = gatos.map(gato => `
        <figure>
            <img src=${gato.url} width=200>
            <details>
                <sumary>Saiba mais sobre o gatinho</sumary>
                <p>${gato.breeds[0].description}</p>
                <p>${gato.breeds[0].name}</p>
                <p>${gato.breeds[0].origin}</p>
                <p>${gato.breeds[0].temperament}</p>
            </details>
        </figure>
        `).join("");
};
