function multiplicar(numero1, numero2){      //numero multiplicado por 0, siempre da 0
    return numero1 * numero2;
}
module.exports = multiplicar 

/*OTRAS OPCIONES: 
function multiplicando(n1, n2){
    if(n1 == 0 || n2 == 0){
        return "no se puede multiplicar por cero"
    }else{
        return n1 * n2
    }
}
console.log(multiplicando(2, 2)); 

 OTRA OPCION: 
 let multiplicando = (n1, n2) => n1 == 0 || n2 == 0 ? "no se puede dividir por cero" : n1 * n2
console.log(multiplicando(2, 2))
*/



/*PROBANDO

function multiplicar(numero1 = 0, numero2 = 0){
    return numero1 * numero2;
}


function multiplicar(numero1, numero2){
    return numero1 * numero2;
    if(numero1 == 0){
        return 0;
    } else if (numero2 == 0){
        return 0;
    }
}   */

