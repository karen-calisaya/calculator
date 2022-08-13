function dividir(numeroA, numeroB){
    if(numeroA == 0){
        return "No se puede dividir por cero";
    } else if(numeroB == 0){
        return "No se puede dividir por cero"
    } else {
        return numeroA / numeroB;
    }
}

module.exports = dividir 



/*PROBANDO

let dividiendo = (n1, n2) => n1 == 0 || n2 == 0 ? "No se puede dividir por cero" : n1 / n2;
console.log(dividiendo(10, 4))

function dividir(numeroA, numeroB){
    return numeroA / numeroB;
    if(numeroA == 0 || numeroB == 0){
        return "No se puede dividir por cero"
    }
}
*/
