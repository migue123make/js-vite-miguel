function crearPersona( nombre, apellido){
    return{
        nombre: nombre,
        apellido: apellido
    }
}

const persona = crearPersona ( 'Miguel', 'Suarez');
console.log(persona);


// mejor

function crearPersona( nombre, apellido){
    return{
        nombre,
        apellido
    }
}

const persona2 = crearPersona ( 'Miguel', 'Suarez');
console.log(persona2);

// como funcion de flecha
const crearPersona1 = (nombre, apellido) => ({nombre, apellido});
const persona3 = crearPersona1 ('miguel', 'suarez');
console.log(persona3);

function imprimeArgumentos(){
    console.log(arguments);
}

imprimeArgumentos(10, true, false, 'Miguel', 'Hola');