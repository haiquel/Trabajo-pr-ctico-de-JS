//#region definir variables
let primera="variable n°1"; 
let segundo='variable n°2';  
const n=5;
const n2=12;
let array=[2,7,3,3,4,5];
//#endregion

//#region mostrar por consola
console.log(array);
//vieja forma de hacer un for
for (let i=0;i<=5;i++){
    console.log(primera);
    console.log(segundo);
}
suma(n,n2);
resta(n,n2);
division(n,n2);
multiplicacion(n,n2);
//#endregion

//#region funciones
function suma(n,n2){
    let respuesta;
    respuesta=n+n2;
    console.log(respuesta);
}
function resta(n,n2){
    let respuesta;
    respuesta=n-n2;
    console.log(respuesta);
}
function division(n,n2){
    let respuesta;
    respuesta=n/n2;
    console.log(respuesta);
}
function multiplicacion(n,n2){
    let respuesta;
    respuesta=n*n2;
    console.log(respuesta);
}
//#endregion
