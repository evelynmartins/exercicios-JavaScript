/* 
DESAFIO 16

Crie um programa que receba um email e uma senha.
O programa tem salvo em seu sistema o email e a senha correta.
O programa deve retornar se os dados estão ou não corretos.
*/


email=prompt("Digite o email escolhido:")
senha=prompt("Digite a senha escolhida:")


testEmail= prompt("Digite o email:")
testSenha= prompt("Digite a senha")

if (testEmail==email && testSenha==senha) {alert("O e-mail e a senha estão corretas.")}
else if (testEmail==email && testSenha!=senha) {alert("O e-mail está correto mas a senha está incorreta.")}
else if (testEmail!=email && testSenha==senha) {alert("O e-mail está incorreto mas a senha está correta.")} 
else {alert("A senha e o e-mail estão incorretos.")}
