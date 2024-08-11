let a = 10;
let b = a;
a = 30;

console.log({a, b});

// problema
let juan = { nombre: 'Juan'};
let ana  = juan;
ana.nombre = 'Ana';

console.log ({ juan, ana});

const cambiaNombre = (persona) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony  = cambiaNombre( peter );


console.log ({peter, tony});


// arreglos

const frutas = ['Manzana', 'Pera', 'Piña'];

// const otrasFrutas = frutas;

// 30 se soluciona con 34


console.time('spread'); // checar el time esta es mas eficiente
const otrasFrutas = [...frutas];
console.timeEnd('spread');

// o tambien

// console.time('slice'); 
// const otrasFrutas = frutas.slice();
// console.timeEnd('slice');


otrasFrutas.push('Mango');

console.table({frutas, otrasFrutas});
