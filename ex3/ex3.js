/**
 * Crie um programa que utiliza os números ímpares encontrados entre numeroInicial
 * e numeroFinal e realiza a soma entre eles.
 *
 * Ex:
 * numeroInicial = 2
 * numeroFinal = 11
 * impares = 3, 5, 7, 9, 11
 * soma = 35
 */
let numeroInicial = 0
let numeroFinal = 0
let n = 0
let vetor = [];
let vetorImpar = []
let soma = 0

numeroInicial = Number(prompt("Digite o número inicial:"));
numeroFinal = Number(prompt("Digite o número final:"));

function criarvetor(numeroInicial, numeroFinal) {
    for (let i = 0; i < numeroFinal; i++) {
        n = numeroInicial + i;
        vetor.push(n)
    }
    return vetor
}
criarvetor(numeroInicial, numeroFinal)

console.log(vetor)


// Opção passo a passo
//function verificarImpar(vetor) {
//    for (let i = 0; i < numeroFinal; i++) {
//
//        if (vetor[i] % 2 == 1) {
//            I = vetor[i]
//            vetorImpar.push(I)
//        }
//    }
//    return vetorImpar
//}
//verificarImpar(vetor)

function somarImpar(vetor) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] % 2 == 1) {
            I = vetor[i]
            vetorImpar.push(I)
            soma= soma + vetor[i]

        }
    }
    return (soma)
    return(vetorImpar)
}

somarImpar(vetor)
alert( "Número Inicial = "+numeroInicial );
alert( "Número Final = "+numeroFinal) ;
alert("Ímpares = "+ vetorImpar);
alert("Soma = "+ soma);

