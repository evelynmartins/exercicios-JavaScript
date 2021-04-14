/* 

Escreva um programa que leia a velocidade de um carro. Se ele ultrapassar 80 Km/h, mostre uma mensagem dizendo que ele foi multado.

A multa vai custar R$ 7,00 por cada Km acima do limite. */

let velocidade =0
let multa=0

velocidade = Number(prompt("Digite a velocidade:"))

multa= (velocidade-80)*7

if(velocidade> 80){alert("Você foi multado em R$"+multa)}
else alert("Parabéns! Você respeitou o limite de velocidade!")
