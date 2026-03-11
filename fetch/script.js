window.addEventListener("DOMContentLoaded", () => {
    // lerArquivoTxt();
    lerArquivoJSON();
});

// const lerArquivoTxt = () => {
//     const url = "https://arthurgabrielfreitas.github.io/Projeto-Front-end-Web-Javascript/APIs/filmes/filmes.txt";
//     fetch(url)
//     .then(resposta => resposta.text())
//     .then(texto => console.log(texto));
// }

// const lerArquivoJSON = () => {
//     const url = "https://arthurgabrielfreitas.github.io/Projeto-Front-end-Web-Javascript/APIs/filmes/filmes.json";
//     fetch(url)
//     .then(resposta => resposta.json())
//     .then(filmes => exibirFilmes(filmes));
// }

const lerArquivoJSON = async () => {
    const url = "https://arthurgabrielfreitas.github.io/Projeto-Front-end-Web-Javascript/APIs/filmes/filmes.json";
    try {
        const resposta = fetch(url);
        const filmes = (await resposta).json();
        exibirFilmes(filmes);
    } catch (error) {
        console.log(error.message);
    }
}

const exibirFilmes = (filmes) => {
    filmes.forEach(filme => {
        console.log(`${filme.nome}: ${filme.imdb}`)
    });
}