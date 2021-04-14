/* DESAFIO 10

Desenvolva um programa que pergunte a distância de uma viagem em Km.

Calcule o preço da passagem, cobrando 0,50 por Km para viagens de até 200Km e 0,45 por viagens mais longas. */

let distancia = 0

distancia = Number(prompt("Digite o trajeto em km :"))

custobasico=0.5*distancia
custoacima=0.45*distancia

if (distancia <=200){alert("A passagem custa: R$"+custobasico)}

else{alert("A passagem custa: R$"+custoacima)}