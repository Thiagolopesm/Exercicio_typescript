function multiplicacao(a: number, b: number): number {
    return a * b;
}
function saudacao(nome: string): string {
    return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicacao(5, 3);
console.log("Resultado da multiplicação:", resultadoMultiplicacao);

const nomeSaudacao = "Maria";
const mensagemSaudacao = saudacao(nomeSaudacao);
console.log(mensagemSaudacao);