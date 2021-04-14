// DESAFIO 5:

// Faça um programa que receba um valor em metros e o exiba convertido para centímetros e milímetros.

let medida = 0;
let medidacem =0;
let medidamili=0;


medida = Number(prompt("Digite a medida em metros:"));

medidacem = medida*100 ;
medidamili = medida*1000; 

alert("A medida de "+medida+ "m equivale a "+ medidacem+ "cm e "+medidamili+"mm." )