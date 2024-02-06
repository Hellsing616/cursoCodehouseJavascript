function soma() {   
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = num1 + num2;
    addResult("resultTable", resultado, 0);
}

function calcularIMC() {
    var peso = parseFloat(document.getElementById("num1").value);
    var altura = parseFloat(document.getElementById("num2").value);
    var resultado = (peso * peso)/altura;
    addResult("resultTable", resultado, 0);
}

function calcularPreco() {
    var valorInicial = parseFloat(document.getElementById("num1").value);
    var valorFinal = parseFloat(document.getElementById("num2").value);
    var taxa = 15;
    var resultado = (valorFinal - valorInicial)/0.15;    
    addResult("resultTable", resultado, 0);
}

function gerarCPF() {   
    var cpf = Array.from({ length: 9 }, () => Math.floor(Math.random() * 10));
    var sum = cpf.reduce((acc, digit, index) => acc + digit * (10 - index), 0);
    var firstDigit = 11 - (sum % 11);
    cpf.push(firstDigit > 9 ? 0 : firstDigit);
    sum = cpf.reduce((acc, digit, index) => acc + digit * (11 - index), 0);
    var secondDigit = 11 - (sum % 11);
    cpf.push(secondDigit > 9 ? 0 : secondDigit);
    resultado = cpf.join('');
    addResult("resultTable", resultado, 0);
}

function verificarPrimo() {
    var num = parseFloat(document.getElementById("num1").value);   

    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            resultado =  false; 
        }else{
            resultado =  true;
        }
    }
    addResult("resultTable", resultado, 0);
}

function addResult(tableId, result, colIndex) {
    var table = document.getElementById(tableId);
    var row = table.insertRow(colIndex);
    var cell = row.insertCell(colIndex);
    cell.innerHTML = result;
}
