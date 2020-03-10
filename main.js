'use strict';

const numberInputElem = document.querySelector('.numberInput');
const buttonSubmitElem = document.querySelector('.buttonSubmit');
const clueElem = document.querySelector('.clue');
const numberAttemptsElem = document.querySelector('#numberAttempts');



function getRandomNumber(max) {

    return Math.ceil(Math.random() * max)
    }

const result = getRandomNumber(100);

    console.log(result);
   

function getNumber (){

    if (numberInputElem.value == result) {
        clueElem.innerHTML = 'Has ganado campeona!!';
    }

    if (numberInputElem.value < result) {
    
        clueElem.innerHTML = 'Demasiado bajo';
    }

    if (numberInputElem.value > result){
        clueElem.innerHTML = 'Demasiado alto';
    } 
    if (0< numberInputElem.value >100){
        clueElem.innerHTML = 'El número debe estar entre 1 y 100';
    }
 

    numberAttemptsElem.innerHTML = parseInt(numberAttemptsElem.innerHTML) + 1;


}

buttonSubmitElem.addEventListener('click', getNumber);

