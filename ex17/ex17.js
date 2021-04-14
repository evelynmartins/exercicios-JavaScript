/* DESAFIO 18

Crie um programa que receba:
a) o valor da conta em um restaurante (valor total do consumo)
b) O número de amigos que vão dividir o valor

Depois disso calcule e mostre no console:
a) O valor dos 10% (cota do garçom)
b) O valor final da conta (consumo + 10%)
c) O valor que cada cliente deve pagar */

valor= Number(prompt("Digite o valor total da conta:"))
pagantes= Number(prompt("Digite o número de clientes:"))

cota= 0.1*valor
total=1.1*valor
rateio= total/pagantes

alert("a) O valor dos 10% R$ "+cota)
alert("b) O valor total R$"+total)
alert("c) O valor que cada pagante:R$"+rateio)