'use strict'
let btnSave = document.querySelector( '#btnSave' );
console.log( btnSave );
let btnRaffle = document.querySelector( '#btnRaffle' );
console.log( btnRaffle );
let nodoInput = document.querySelector( '.main__input' );
console.log( nodoInput );
let nodoSaved = document.querySelector( '.main__solution' );

btnSave.addEventListener( 'click', function(){
    let valueInput = nodoInput.value;
    console.log( valueInput );
    console.log('You saved this item properly!')
    if (valueInput !== ''){
        let nodoDiv = document.createElement('div');
        nodoDiv.classList.add('main__name');
        nodoDiv.innerHTML = valueInput;
        nodoSaved.append( nodoDiv );
    }else{}
})

btnRaffle.addEventListener( 'click', function(){
    let listaSorteo = document.querySelectorAll( '.main__name' );
    console.log( 'array con inputs', listaSorteo );
    let anterior = document.querySelector( '.main__name.active' )
    if(anterior){
        anterior.classList.remove( 'active' );

    }
    let arrayMax = listaSorteo.length;
    let random = Math.random() * arrayMax;
    let chosen = Math.trunc(random); // 
    listaSorteo[ chosen ].classList.add( 'active' );
    let interval = setInterval( function(){
        let arrayMax = listaSorteo.length;
        let random = Math.random() * arrayMax;
        let chosen = Math.trunc(random); // 
        let anterior = document.querySelector( '.main__name.active' )
        anterior.classList.remove( 'active' );
        listaSorteo[ chosen ].classList.add( 'active' );  
        } , 100 );
    let time_out = setTimeout( function(){
        clearInterval( interval );
    }, 1000)
})

// Añadir evento para el campo de entrada
nodoInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('enter');
        event.preventDefault(); // Evita el comportamiento por defecto del Enter
        btnSave.click(); // Simula el clic en el botón de guardar
    }
});