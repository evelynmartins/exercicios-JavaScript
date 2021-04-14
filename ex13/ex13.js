/* DESAFIO 13

Escreva um programa que leia dois números inteiros e compare-os, mostrando na tela uma mensagem:

O primeiroValor é maior. O segundoValor é maior. Não exite valor maior, os dois são iguais. */

num1 =0
num2 =0

num1= Number(prompt("Digite um numero:"))

num2= Number(prompt("Digite outro numero:"))

if (num1>num2){ alert("O primeiro valor é maior")}
else if (num1<num2){ alert("O segundo valor é maior")}
else if (num1==num2){ alert("Não exite valor maior, os dois são iguais.")}


