
/**
* Crie um programa que utilize os valores do objeto pessoa e imprima uma string no seguinte formato:
*   
*   João Silva recebe R$ 2000. Após contabilizar suas despesas, ele ainda possui R$ 550 reais sobrando. 
*
* Faça mais testes trocando os valores da variável do objeto pessoa.
*  
*/

let pessoa = {
  nome: 'João',
  sobrenome: 'Silva',
  salario: 2000,
  despesas: {
      contas: 550,
      aluguel: 700,
      poupanca: 200
  }
};

pessoa.nome=(prompt("Digite o nome: "))
pessoa.sobrenome=(prompt("Digite o sobrenome: "))
pessoa.salario= Number(prompt("Digite o salario: "))

pessoa.despesas.contas=Number(prompt("Digite o valor das contas: "))
pessoa.despesas.aluguel=Number(prompt("Digite o valor do aluguel: "))
pessoa.despesas.poupanca=Number(prompt("Digite o valor pra poupança: "))


const usuario = pessoa.despesas
let saldoUser = 0;

const somaDespesas = (usuario) => {
  let soma = usuario.contas + usuario.aluguel + usuario.poupanca;
  return soma;
}

const saldoFinal = (pessoa) => {
  saldoUser = pessoa.salario - somaDespesas(usuario);
  return saldoUser;
}

saldoFinal(pessoa);

alert(pessoa.nome + " " + pessoa.sobrenome + " recebe R$ " + pessoa.salario + ". Após contabilizar suas despesas, seu saldo é de R$ " + saldoUser)
