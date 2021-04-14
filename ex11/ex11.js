/* 

 Crie um sistema que recebe uma idade e retorna se o usuário é criança, adolescente, adulto ou idoso. */
 
 let idade = 0

idade = Number(prompt("Digite a idade:"))


if (idade>= 60){alert(" Idoso ")}
else if (idade>= 21){alert(" Adulto ")}
else if (idade>= 12){alert(" Adolescente ")}
else if (idade>= 0){alert(" Criança ")}