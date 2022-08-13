function sumar(numero1, numero2){
    return numero1 + numero2;
}

module.exports = sumar

/*
OTRAS OPCIONES:
si el usuario pone otra cosa que no sea un numero
function sumar (numero1, numero2){
    if(typeof numero1 !== "number" || typeof numero2 !== "number" ) {
        return "Che, me tenés que pasar un número"
    }
    return numero1 + numero2
}

console.log(sumar(2,2))

*/

//typeof: es una palabra reservada que devuelve un string con el tipo de dato que le estoy pasando

//tenemos que pensar en las cosas que podrian salir mal, asi nuestro proyecto es mas funcional. 