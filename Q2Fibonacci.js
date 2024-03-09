//var n = 20;
var n = prompt("Digite um valor para inspeção dentro da fibonacci: ") 
var sequencia = Fibonacci(n);
console.log(sequencia);

function Fibonacci(n) {
    var x = [0, 1];
    
    for (var i = 2; i < n; i++) {
        x[i] = x[i - 1] + x[i - 2];
        if (x[i] == n) {
            console.log("O numero por você informado está entre a sequencia Fibonacci")
        }
    }
    
    return x;
}


