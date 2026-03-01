import usersTable from './users.js'

const elemMaiores = document.getElementById("maioresDeIdade");
elemMaiores.innerHTML = `Maiores de idade: `;

const maioresDeIdade = usersTable.filter((user) => user.idade >= 18);
maioresDeIdade.forEach((user, i, vet) => {
    elemMaiores.innerHTML += `${user.nome} - ${user.idade}`;
    elemMaiores.innerHTML += i < vet.length - 1 ? `, ` : `.`;
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
elemMaiorSalario.innerHTML += `${usuarioMaiorSalario.nome}, com ${usuarioMaiorSalario.idade} anos, do sexo ${usuarioMaiorSalario.sexo === "F" ? "feminino" : "masculino"} e recebe R$${usuarioMaiorSalario.salario.toFixed(2)} por mês!`;

const elemMulherGanhaMuito = document.getElementById("salarioMulher");

const mulherGanhaMuito = usersTable.some((user) => user.sexo === "F" && user.salario >= 5000);
elemMulherGanhaMuito.innerHTML = mulherGanhaMuito ? "Pelo menos uma mulher ganha mais de R$5000,00." : "Nenhuma mulher ganha mais de R$5000,00.";

const elemMediaSalariosHomens = document.getElementById("salarioMedioHomens");
const elemMediaSalariosMulheres = document.getElementById("salarioMedioMulheres");

const somaSalarioGeral = usersTable.reduce((acc, user) => {
    if (user.sexo === "M") {
        acc.homens.soma += user.salario;
        acc.homens.quantidade++;
    } else {
        acc.mulheres.soma += user.salario;
        acc.mulheres.quantidade++;
    }
    return acc;
}, {
    homens: {
        soma: 0,
        quantidade: 0
    },
    mulheres: {
        soma: 0,
        quantidade: 0
    }
});

const medias = {
    homens: somaSalarioGeral.homens.soma / somaSalarioGeral.homens.quantidade,
    mulheres: somaSalarioGeral.mulheres.soma / somaSalarioGeral.mulheres.quantidade
}

elemMediaSalariosHomens.innerHTML = `Dos homens: R$${medias.homens.toFixed(2)}.`;
elemMediaSalariosMulheres.innerHTML = `Das mulheres: R$${medias.mulheres.toFixed(2)}.`;