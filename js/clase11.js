/***************ARREGLOS****** 
// CONSIDERAMOS AHORA ARREGLOS, VECTORES. LISTAS, ETC COMO SI FUERAN LO MISMO.
let arreglo =[];

arreglo[0] = 5;
arreglo[1]= "palabra";
arreglo[2]=3;

//arreglo [5, "palabra",3]
// arreglo [pos1, pos2, pos3]
// arreglo [0,1,2]//

console.log("elemento 1, del indice [1]:${arreglo[0]}");
console.log("elemento 1, del indice [1]:${arreglo[1]}");
console.log("elemento 1, del indice [1]:${arreglo[2]}");
console.log("elemento 1, del indice [1]:${arreglo[5]}");


// declaraciones de un arreglo

let nuevoarreglo = [54,95,32,12,64,78];

for (let i =0; i< nuevoarreglo.length; i++) {
    console.log("arreglo[${i}] = {nuevoarreglo[i]}");
}

for (let i in nuevoarreglo){
    console.log("arreglo[${i}] = ${nuevoarreglo[i]}");
}

for(let elemento of nuevoarreglo){
    console.log(elemento);
}
*/
// funciones se las llama con un nombre cuya definicion
/*
function nomfuncion(parametros){
    escribir las tareas a realizar internamente
}


let variable = 86;
// defino mi funcion
function imprimir (parametro) {
    console.log(a);

}

//llamo o invoco mi funcion
imprimir(); // le paso un argumento -> variable
imprimir(variable);
impimir (x);

//procedimiento y funcion 
//procedimiento no devuelve nada, o no regresa ningun valor
function mostrarinfo () {
    console.log("holamsoy un  procedimiento");
}
mostrarinfo();

//funcion devuelve un valor al finalizar la funcion
function sumar (a,b) {
    let suma = a+b ;
    return suma;

}
//suma (3,6);
let x=3, y=6; z=0;

console.log (sumar(x,y));
z = sumar(x,y);
console.log(z);
 */

// paso de valor en JS

function cambiarvalor(parametro){
    parametro =54;

}
let argumento =23;
console.log(argumento);

 cambiarvalor(argumento);
console.log(argumento);


// pasa por referencia en JS
function cambiarvalor(parameter){
 parameter[0] =45;
}
let arreglo = [20];
console.log(arreglo);
newvalor(arreglo);
console.log(arreglo);


// alcanse de variable o scope

let a =10;

functionmostrarValorGlobal(){
    console.log("variable global",a);
    a =23;
    console.log(a);
    let b =29; // variable local
    console.log(b);

}
mostrarValorGlobal();
console.log(b);
console.log(a);

// recursividad
imprimir 3,2,1,
function mifuncionrecursiva(numero){
    if (numero == 1){
        console.log(numero);
    }
    else{
        console.log(numero);
        mifuncionrecursiva(numero -1);

        }
    }

    
mifuncionrecursiva(numero-1);

}
let numero = 3;
mifuncionrecursiva(numero);
numero ==1? return 0 : mifuncionrecursiva(numero -1); 
// callback
let imp = function imprimir (mensaje){


}
function operacionsumar(op1,op2, functionCallback); {
    let sumar = op1 +op2;
    functionCallback("resultado: ${suma}");

}
operacionesSumar(5,3,imp);