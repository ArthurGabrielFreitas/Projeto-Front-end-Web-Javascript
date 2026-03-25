import bcrypt from 'https://cdn.jsdelivr.net/npm/bcryptjs@2.4.3/+esm';

window.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formCadastro");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        console.log(username, password)

        comparaInputPassword(username, password)
            .then(senhaCorreta => {
                if (senhaCorreta)
                    alert('Login bem-sucedido!');
                else
                    alert('Login falhou. Tente novamente.');

            });
    });

    // encryptPassword();
});

const lerArquivoJSONEncryptedPasswords = async () => {

    try {
        const resposta = await fetch("encrypted-passwords.json");
        if (!resposta.ok) {
            throw new Error(`Erro na requisição: ${resposta.statusText}`);
        }
        const usuarios = await resposta.json();

        return usuarios;
    } catch (error) {
        console.log(error.message);
    }
    return [];
}

const comparaInputPassword = async (usernameInput, passwordInput) => {
    const usuarios = await lerArquivoJSONEncryptedPasswords();

    if (usuarios.length === 0) {
        console.log("Falha na leitura do arquivo");
        return false;
    }

    const usuario = usuarios.find(user => user.username == usernameInput);

    if (usuario) {
        if (bcrypt.compareSync(passwordInput, usuario.password)) {
            console.log("senhas iguais");
            return true;
        } else {
            console.log("senhas diferentes", passwordInput, usuario.password);
            return false;
        }
    } else {
        console.log("Usuário não encontrado!");
        return false;
    }
}

const encryptPassword = async () => {
    const url = "https://arthurgabrielfreitas.github.io/Projeto-Front-end-Web-Javascript/Prova-AJAX/API/passwords.json";
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const salt = bcrypt.genSaltSync(10);
            data.forEach(element => {
                const hash = bcrypt.hashSync(element.password, salt)
                console.log(element.password, hash)
            });
        })
}