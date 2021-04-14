/* DESAFIO 15

Elabore um programa que calcule o valor a ser pago por um produto, considerando o seu preço normal e condição de pagamento:

- À vista dinheiro / cheque: 10% de desconto
- À vista no cartão: 5% de desconto
- Em até 2x no cartão: preço normal
- 3x ou mais no cartão: 20% de juros */

preço = Number(prompt("Digite o preço do produto:"))
pag = Number(prompt("Digite a forma de pagamento (1- À vista, 2 - Cartão, 3 - Em 2x no cartão , 4- Em 3x ou mais):"))

if (pag==1){alert("Valor a pagar: R$ "+ 0.9*preço)}
else if (pag==2){alert("Valor a pagar: R$ "+ 0.95*preço)}
else if (pag==3){alert("Valor a pagar: R$ "+preço)}
else if (pag==4){alert("Valor a pagar: R$ "+ 1.2*preço)}
else {alert("Opção inválida. Tente novamente.")}
