function restar (numeroA, numeroB){
    return numeroA - numeroB;
}

module.exports = restar

/* OTRAS OPCIONES:
 let restar = (n1, n2) => n1 - n2;
 console.log(restar(2, 2))
 
 let restando = (n1, n2) => typeof n1 !== "number" || typeof n2 !== "number" ? "che, me tenes que pasar un numero" : n1 - n2
 console.log(restando (5, 2))

*/