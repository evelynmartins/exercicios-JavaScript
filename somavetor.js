numeros = [201, 29, 46, 67, 89, 92, 10, 4, 71, 14];

let soma = 0
let somapar = 0
let somaimpar = 0

function somartotal(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i]
    }
    return (soma)
}

function somarpar(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 0) { 
            somapar = somapar + numeros[i]
        }
    }
    return (somapar)
}

function somarimpar(numeros) {
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 == 1) { 
            somaimpar = somaimpar + numeros[i]
        }
    }
    return (somaimpar)
}


somartotal(numeros)
somarpar(numeros)
somarimpar(numeros)

console.log("A soma dos números é " + soma +".")
console.log("A soma dos números pares é " + somapar+ ".")
console.log("A soma dos números ímpares é "+somaimpar+".")