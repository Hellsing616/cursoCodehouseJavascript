var numero = prompt("Digite um número entre 1 e 100:");

numero = parseInt(numero);

var intervalo = Math.ceil(numero / 10);

var inicioIntervalo = (intervalo - 1) * 10 + 1;
var fimIntervalo = intervalo * 10;

console.log("Número inserido: " + numero);
alert("Número inserido: " + numero + "\nIntervalo correspondente: entre " + inicioIntervalo + " e " + fimIntervalo);
//Calcular a Taxa do ICMS
function calcularICMS(precoCusto) {
    const taxaICMS = 0.18;
    const icms = precoCusto * taxaICMS;
    return icms;
}

//Cálculo ICMS
function calcularEExibirICMS() {
    const precoCusto = parseFloat(prompt("Informe o preço de custo:"));
    const icmsCalculado = calcularICMS(precoCusto);
    alert(`O ICMS calculado é: R$ ${icmsCalculado.toFixed(2)}`);
}

//Múmero é múltiplo do outro
function saoMultiplos(num1, num2) {
    return num1 % num2 === 0 || num2 % num1 === 0;
}

function verificarEMostrarMultiplos() {
    const numero1 = parseInt(prompt("Informe o primeiro número:"));
    const numero2 = parseInt(prompt("Informe o segundo número:"));

    if (saoMultiplos(numero1, numero2)) {
        alert(`${numero1} e ${numero2} são múltiplos.`);
    } else {
        alert(`${numero1} e ${numero2} não são múltiplos.`);
    }
}

// Chamar calculo ICMS
calcularEExibirICMS();

// Chamar calculo numeros multiplos
verificarEMostrarMultiplos();