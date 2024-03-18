/* 
Nesse desafio, você irá solicitar ao usuário que ele insira dois números e, a partir daí, calcular:
soma
subtração
multiplicação
divisão
resto
*/


alert("Informe 2 números")

let numberOne = prompt("Digite o primeiro número:")

let numberTwo = prompt("Digite o segundo número:")


let resultSum = Number(numberOne) + Number(numberTwo)
let resultSub = Number(numberOne) - Number(numberTwo)
let resultMult = Number(numberOne) * Number(numberTwo)
let resultDiv = Number(numberOne) / Number(numberTwo)
let resultRest = Number(numberOne) % Number(numberTwo)

alert("A soma de " + numberOne + " e " + numberTwo + " é: " + resultSum)

alert("A subtração de " + numberOne + " e " + numberTwo + " é: " + resultSub)

alert("A multiplicação de " + numberOne + " e " + numberTwo + " é: " + resultMult)

alert("A divisão de " + numberOne + " e " + numberTwo + " é: " + resultDiv)

alert("O resto da divisão de " + numberOne + " e " + numberTwo + " é: " + resultRest)

/* 
- [ ]  Verifique se a soma dos dois números é par (ou ímpar);
- [ ]  Verifique se os dois números inseridos são iguais (ou diferentes). 
*/

if(Number(resultSum)%2 > 0){ 
    alert("A soma dos números " + numberOne + " e " + numberTwo + " é ímpar.")
}else{
    alert("A soma dos números " + numberOne + " e " + numberTwo + " é par.")
}

if(Number(numberOne) == Number(numberTwo)){
    alert("Os números "+ numberOne + " e " + numberTwo + " são iguais.")
}else{
    alert("Os números "+ numberOne + " e " + numberTwo + " são diferentes.")
}