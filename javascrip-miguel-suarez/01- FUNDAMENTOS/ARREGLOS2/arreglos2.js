let juegos = ['Zelda', 'Mario', 'CarlosDuty', 'Clash of clans', 'War zone'];
console.log('Largo', juegos.length);

let lomismoqueprimero = juegos[2 - 2];
let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];

console.log({lomismoqueprimero, primero, ultimo});

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});


// push sirve para ingresar un elemento nuebo

let nuevaLongitud = juegos.push( 'F-Zero');
console.log ({nuevaLongitud, juegos});

// si necesitas que se insette al inicio

nuevaLongitud2 = juegos.unshift('Fire Emplem');
console.log({nuevaLongitud2, juegos});


//para borrar el ultimo 

let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});


//borrar elemento en posicion espesifica

let pos = 1;

console.log (juegos);
let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

//saber la posicion indice de un juego

let carlosDutyIndex = juegos.indexOf('CarlosDuty'); // casesensitive
console.log({carlosDutyIndex});

//sale q es el 1 ya que se borraron algunos