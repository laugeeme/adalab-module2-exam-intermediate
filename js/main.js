'use strict';

const numberInputElem = document.querySelector('.numberInput');
const buttonSubmitElem = document.querySelector('.buttonSubmit');
const clueElem = document.querySelector('.clue');
const numberAttemptsElem = document.querySelector('#numberAttempts');


let maxNumber = 100;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

const result = getRandomNumber(maxNumber);


function elementInnerContent (element, content){
  element.innerHTML = content;
}

function getNumber() {
  if (numberInputElem.value <= 0 || numberInputElem.value > maxNumber) {
    elementInnerContent(clueElem, 'El número debe estar entre 1 y 100');
  } else if (numberInputElem.value < result) {
    elementInnerContent(clueElem,'Demasiado bajo');
  } else if (numberInputElem.value > result) {
    elementInnerContent(clueElem, 'Demasiado alto');
  } else {
    elementInnerContent(clueElem, 'Has ganado campeona!!');
  }

  numberAttemptsElem.innerHTML = parseInt(numberAttemptsElem.innerHTML) + 1;
}

buttonSubmitElem.addEventListener('click', getNumber);
