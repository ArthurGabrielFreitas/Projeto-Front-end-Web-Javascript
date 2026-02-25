import usersTable from './users.js'

const elemMaiores = document.getElementById("maioresDeIdade");
elemMaiores.innerHTML = `Maiores de idade: `;

const maioresDeIdade = usersTable.filter((user) => user.idade >= 18);
maioresDeIdade.forEach((user, i, vet) => {
    elemMaiores.innerHTML += `${user.nome} - ${user.idade}`;
    i < vet.length ? elemMaiores.innerHTML += `, ` : elemMaiores.innerHTML += `</p>`;
});

const elemSexoMasculino = document.getElementById("sexoMasculino");
elemSexoMasculino.innerHTML = "Pessoas do sexo masculino: ";

const sexoMasculino = usersTable.filter((user) => user.sexo === "M");
sexoMasculino.forEach((user, i, vet) => {
    elemSexoMasculino.innerHTML += `${user.nome}${i < vet.length ? ", " : ""}`;
});

const elemMaiorSalario = document.getElementById("maiorSalario");
elemMaiorSalario.innerHTML = "A pessoa com maior salário é ";

const usuarioMaiorSalario = usersTable.reduce((maior, atual) => atual.salario > maior.salario ? atual : maior);
elemMaiorSalario.innerHTML += `${usuarioMaiorSalario.nome}, com ${usuarioMaiorSalario.idade} anos, do sexo ${usuarioMaiorSalario.sexo === "F" ? "feminino" : "masculino"} e recebe R$${usuarioMaiorSalario.salario} por mês!`;

const elemMulherGanhaMuito = document.getElementById("salarioMulher");

const mulherGanhaMuito = usersTable.some((user) => user.salario = 5000 );
mulherGanhaMuito ? elemMulherGanhaMuito.innerHTML = "Pelo menos uma mulher ganha mais de R$5000,00." : elemMulherGanhaMuito.innerHTML = "Nenhuma mulher ganha mais de R$5000,00.";

const elemMediaSalarios = document.getElementById("mediaSalarios");
const salarioHomens = usersTable.reduce((acc, user) => user.sexo === "M"? acc + user : acc, 0);
const salarioMulheres = usersTable.reduce((acc, user) => user.sexo === "F"? acc + user : acc, 0);

elemMediaSalarios.innerHTML = ``;