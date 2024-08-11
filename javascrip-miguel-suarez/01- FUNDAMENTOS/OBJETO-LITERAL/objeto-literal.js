let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.7
    },
    trajes: ['M, ark I', 'Mark V', 'hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California',
    },
    'ultima-pelicula': 'Infinity War'
};

console.log( personaje );
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

//referencia a objetos anidados

console.log('Coors', personaje.coords);
// o separado

console.log('Lat', personaje.coords.lat);

console.log('No, trajes', personaje.trajes.length);
console.log('Ultimo traje', personaje.trajes[personaje.trajes,length - 1]);

const x = 'vivo';
console.log('Vivo', personaje[x]);
console.log('Ultima pelicula', personaje["ultima-pelicula"]);


//mas detalles

// borrar edad

delete personaje.edad;

console.log( personaje);


personaje.casado = true;

// trabajar el objeto como un arreglo

const entriesPares = Object.entries ( personaje);
console.log (entriesPares);

// para bloquear de las propiedades o modificaciones

Object.freeze (personaje);

personaje,dinero = 100000;

console.log( personaje);

const propiedades = Object.getOwnPropertyNames ( personaje);
const valores = Object.values ( personaje);
console.log ({propiedades, valores});



