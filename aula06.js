// Solicitar a quantidade de parcelas e exibir o valor de cada uma
var quantidadeParcelas = parseInt(prompt("Digite a quantidade de parcelas:"));

if (isNaN(quantidadeParcelas) || quantidadeParcelas <= 0) {
    alert("Por favor, digite um número válido e maior que zero.");
} else {
    // Simular um empréstimo e exibir o valor de parcelas decrescentes
    var valorEmprestimo = parseFloat(prompt("Digite o valor do empréstimo:"));

    if (isNaN(valorEmprestimo) || valorEmprestimo <= 0) {
        alert("Por favor, digite um valor válido e maior que zero.");
    } else {
        for (var i = quantidadeParcelas; i >= 1; i--) {
            var valorParcela = valorEmprestimo / i;
            alert("Parcela " + i + ": R$ " + valorParcela.toFixed(2));
        }
    }

    // Solicitar uma entrada através de prompt, manipular o valor a cada repetição
    var input = prompt("Digite um valor para somar (ou 'sair' para encerrar):");
    var soma = 0;
    var quantidadeValores = 0;

    while (input.toLowerCase() !== 'sair') {
        var valor = parseFloat(input);

        if (!isNaN(valor)) {
            soma += valor;
            quantidadeValores++;
            var media = soma / quantidadeValores;
            alert("Soma: R$ " + soma.toFixed(2) + "\nMédia: R$ " + media.toFixed(2));
        } else {
            alert("Por favor, digite um valor numérico.");
        }

        input = prompt("Digite um valor para somar (ou 'sair' para encerrar):");
    }
}

