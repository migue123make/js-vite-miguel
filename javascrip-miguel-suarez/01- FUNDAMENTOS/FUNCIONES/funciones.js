function saludar (nombre ){
    console.log(arguments)
    console.log('Hola ' + nombre);
}


// funcion anonima sirve para que ya no se pueda modificar

const saludar2 = function(nombre ){
    console.log ('Hola ' + nombre);
}

// funcion de flecha

const saludarFlecha = () =>{
    console.log('Hola Flecha');
}

// con argumentos

const saludarFlecha2 = (nombre) =>{
    console.log('Hola ' + nombre);
}

saludar ( 'Fernando',40, true, 'Costa rica');
saludar2 ( 'Miguel');
saludarFlecha();
saludarFlecha2('Melissa');

function sumar ( a, b){
    return a + b;
}

const sumar2 = (a,b) =>{
    return a + b;
}


// o 
const sumar3 = (a,b) => a + b;


function getAleatorio(){
    return Math.random();
}

// funcion pero ahora con funcion de flecha

const getAleatorio2 =  () => Math.random();



console.log (sumar (1,2));
console.log (sumar2 (1,2));
console.log (sumar3 (1,2));

console.log ( getAleatorio());
console.log ( getAleatorio2());