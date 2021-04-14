/* DESAFIO 15

A confederação Nacional de Natação precisa de um programa que leia o ano de nascimento de um atleta e mostre sua categoria, de acordo com a idade:

- Até 9 anos: MIRIM
- Até 14 anos: INFANTIL
- Até 19 anos: JUNIOR
- Até 24 anos: SÊNIOR
- Acima: MASTER */

ano = Number(prompt("Digite o ano do seu nascimento:"))

idade= 2021 - ano

if (idade>24){alert(" MASTER ")}
else if (idade<= 9){alert(" MIRIM ")}
else if (idade<= 14){alert(" INFANTIL ")}
else if (idade<= 19){alert(" JUNIOR ")}
else if (idade<= 24){alert(" SÊNIOR ")}