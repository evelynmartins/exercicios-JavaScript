/* DESAFIO 13

Crie um sistema de empréstimo.

O usuário precisa ter entre 18 e 65 anos.
O salário deve ser maior ou igual a R$ 1.500.
O valor do empréstimo deverá ser até cinco vezes o salário. */

let idade = 0
let salario =0


idade = Number(prompt("Digite a idade:"))




if (idade>= 18 && idade<= 65  ){
    alert(" Você está habilitado para pegar o empréstimo.")
    salario = Number(prompt("Digite seu salário:"))
    
    if (salario>=1500){ 

        alert("Você pode pegar um empréstimo de até R$"+ salario*5)
    }
    else{

        alert("O seu salário precisa ser acima de R$1500.")
    }

}
else{

    {alert(" Você não pode fazer um emprestimo com a gente. Sinto muito.")}

} 

