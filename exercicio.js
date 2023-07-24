"use strict";
function multiplicacao(a, b) {
    return a * b;
}
function saudacao(nome) {
    return "Olá " + nome;
}
const resultadoMultiplicacao = multiplicacao(5, 3);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);
const nomeSaudacao = "Maria";
const mensagemSaudacao = saudacao(nomeSaudacao);
console.log(mensagemSaudacao);
