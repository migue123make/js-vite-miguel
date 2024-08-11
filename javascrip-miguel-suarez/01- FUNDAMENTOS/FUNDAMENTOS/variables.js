alert('hola desde variables,js');



let a = 10;
let b = 30;
let c = 'Hola ';
let d = 'Spiderman';
let x = a + b;


// constantes en mayusculas
const SALUDO = c + d;


// se pueden poner propiuedaddes de css en caso de que quieras resaltar informacion
console.log('%c Mis variables', 'color:blue; font-weight: bold')

console.log( 'x', x );
// o 

console.log({x});
console.warn( 'x', x );
console.error('x', x );

// var b = 10; ya no se husa
// const c = 10; es para constantes


c = 'Hola de nuevo';

// console.table puede recibir un arreglo objetos entre llaves {} y arreglos entre []
console.table({a, b, c, d, x });