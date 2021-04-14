/*
Crie um programa que leia um número inteiro e mostre na tela se ele é PAR ou ÍMPAR. */

let num=0

num = Number(prompt("Digite um número:"))

resto= num%2



if (resto==0){alert("O número "+num+" é par. ")}
else{alert("O número "+num+" é ímpar. ")}