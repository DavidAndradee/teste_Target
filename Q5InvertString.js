var entradaText = prompt("Digite um texto para inverter:");

invertText(entradaText);

function invertText(entrada) {

    var invertEntrada = "";
    for (var i = entrada.length - 1; i >= 0; i--) { 
        invertEntrada += entrada[i]; 
    }
   
    return invertEntrada; 
}
