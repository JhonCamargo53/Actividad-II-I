function getExerciseAnswer() {
    var temp = getOptionValue("exerciseType");
    var nValue = document.getElementById("nValue").value;
    var answer = "";

    if (nValue > 0) {
        switch (temp) {
            case "0":
                answer = firstPrime(nValue);
                break;
            case "1":
                answer = summation(nValue);
                break;
            case "2":
                answer = fibonacci(nValue);
                break;
            default:
                console.log("No valid index");
                break;
        }
    }

    changeText("answer", answer);
}

function getExerciseText() {
    var temp = getOptionValue("exerciseType");
    var text = "";
 
    switch (temp) {
        case "0":
            text = "I. Escriba un programa en JS que reciba un número entero N e imprima todos los números primos desde 1 hasta N. Un número primo es aquel que solo es divisible por el mismo y por el número."
            break;
        case "1":
            text = "II. Dado un número N, Imprima la sumatoria:Sumatoria = 1^N + 2^N +3^N +4^N+…+ N^N."
            break;
        case "2":
            text = "III. Dado un número N, imprima la serie de Fibonacci (N término)."
            break;
    }
    changeText("exerciseInformation",text);

}

function changeText(id, information) {
    document.getElementById(id).innerHTML = information;
}

function getOptionValue(idOption) {
    var type = document.getElementById(idOption).value;
    return type;
}

function firstPrime(amountPrime) {

    let primeList = [];
    let num = 2;

    while (amountPrime != num) {
        if (isPrime(num)) {
            primeList.push(num);
        }
        num = num + 1;
    }
    return primeList;
}

function isPrime(num) {
    for (let i = 0; i < num; i++) {
        if (num % i == 0 && i != 1 && i != num) {
            return false;
        }
    }
    return true;
}

function summation(amount) {
    var summation = 0;
    for (let i = 1; i <= amount; i++) {
        let operation = Math.pow(i, amount);
        summation = summation + operation;
    }
    return summation;
}

function fibonacci(amount) {

    let fibonacciList = [0, 1];
    let count = amount - 2;

    while (count != 0) {
        let size = fibonacciList.length;
        fibonacciList.push(fibonacciList[size - 1] + fibonacciList[size - 2]);
        count--;
    }
    return fibonacciList;
}













