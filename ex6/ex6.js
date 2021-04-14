let nota1 = 0
let nota2 = 0
let nota3 = 0
let media = 0

nota1 = Number(prompt("Digite a primeira nota:"))
nota2 = Number(prompt("Digite a segunda nota:"))
nota3 = Number(prompt("Digite a terceira nota:"))

media = (nota1+ nota2 + nota3)/3

if(media>= 7){alert("Aprovado")}

else if (media >=5 && media <7){alert("O aluno está em recuperação!")}

else {alert("Reprovado")}