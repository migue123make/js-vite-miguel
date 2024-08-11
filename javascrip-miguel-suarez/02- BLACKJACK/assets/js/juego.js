    (() => {
        'use strict'
        /**
     * 2C = two of clubs
     * 2D = two of diaminds
     * 2H = two of hearts
     * 2S = two of spades
     */

    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'];
    const especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugador = 0,
        puntosComputadora = 0;

    //referencia a Html
    const btnPedir   = document.querySelector('#btnPedir');
    const btnDetener = document.querySelector('#btnDetener');
    const btnNuevo   = document.querySelector('#btnNuevo');

    const divCartasJugador     = document.querySelector('#jugador-cartas');
    const divCartasComputadora = document.querySelector('#computadora-cartas');
    const puntosHtml           = document.querySelectorAll('small');

    // esta funcion me permite crear una nueva baraja
    const crearDeck = () => {
        for (let i = 2; i<=10; i++){
            for ( let tipo of tipos){
                deck.push( i + tipo);
            }
        }

        for (let tipo of tipos){
            for (let esp of especiales){
                deck.push(esp +tipo);
            }
        }

    // console.log (deck); log en orden

        deck = _.shuffle(deck);
        console.log (deck);
        return deck;
    }

    crearDeck();

    //  esta funcion me permite tomar una carta

    if (deck.length === 0 ){
        throw'No hay cartas en el deck';
    }

    const pedirCarta = () => {
        const carta = deck.pop();
    //    console.log(deck);
    //   console.log(carta);
        return carta;
    }


    // quita las cartas de 1 en 1
    // for (let i = 0; i <= 100; i++){
    // pedirCarta();
    // si funciona


    const valorCarta = (carta) => {

        const valor = carta.substring(0, carta.length - 1);
    // si el valor es diferente a un numero
        return (isNaN(valor)) ?
    // si el valor es igual a A preguntamos 
        (valor === 'A') ? 11 : 10
    // si no es una letra entonces lo multplicamos por 1
        :valor * 1;
        // console.log({valor});
        // let puntos = 0;
        // 2 = 2  10 = 10, 3 = 3
        // tdo esto lo vamos a comentar para mejor reducir codigo
        // if (isNaN(valor)){
        //  console.log('No es un numero');
        // puntos = (valor === 'A' ) ? 11 : 10;
        // si es A vale 11 de lo contrario es 10 ejemplo QD, KD, JD todos esos valen 10
        // }else{
        //     console.log('Es un numero');
        //     puntos = valor * 1;
        // }
        // console.log(puntos);
    }

    // turno de la computadora
    const turnoComputadora = (puntoMinimos) => {
        do {
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta);
        puntosHtml[1].innerText = puntosComputadora; 
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`; 
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if (puntoMinimos > 21){
            break;
        }

        }while((puntosComputadora < puntoMinimos)&& (puntoMinimos <=21));
    
    setTimeout (() => {

        if (puntosComputadora === puntoMinimos){
            alert('Nadie gano :(');
        }
        
        else if (puntoMinimos > 21){
            alert ('Gano la computadora');
        }
        else if (puntosComputadora > 21){
            alert('Jugador gano');
        }else{
            alert('Computadora gano')
        }
    }, 10 ); 
    }




    // valorCarta('10D');



    // antes en el parentesis meti valores en string para probar pero si sirve el metodo ya se puede ingresar la funcion en seco y no 'AD' o cosas asi
    //const valor = valorCarta( pedirCarta ());
    //console.log(valor);


    //Eventos

    btnPedir.addEventListener('click', () =>{

        // prueba de evento click si jalo
    // console.log('click');

    const carta = pedirCarta();
    // console.log(carta);
        puntosJugador = puntosJugador + valorCarta(carta);
        puntosHtml[0].innerText = puntosJugador; 


        //   <img class="carta" src="assets/cartas/10C.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`; //` para poder insertar un blog de codigo ejempolo 3H etc
        imgCarta.classList.add('carta');
        divCartasJugador.append(imgCarta);

        if (puntosJugador > 21){
            console.warn('Perdiste');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
        else if (puntosJugador===21){
            console.warn('21, genial');
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador);
        }
    });

    // esto sirvio de proueba
    // /TODO: Borrar
    //console.log(12);
    //turnoComputadora(12);

    btnDetener.addEventListener('click',()=>{
        btnPedir.disabled   = true;
        btnDetener.disabled = true;

        turnoComputadora(puntosJugador);
    });

    btnNuevo.addEventListener('click', () =>{

        console.clear();
        deck = [];
        deck = crearDeck();

        puntosJugador     = 0;
        puntosComputadora = 0;


        puntosHtml[0].innerText = 0;
        puntosHtml[1].innerText = 0;

        divCartasComputadora.innerHTML = '';
        divCartasJugador.innerHTML     = '';

        btnPedir.disabled   = false;
        btnDetener.disabled = false;

    });
        
    })();




