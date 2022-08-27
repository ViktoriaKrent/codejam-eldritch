import { brownCards, blueCards, greenCards } from './data/mythicCards/index';
alert(
  'В данной работе прошу проверять только первого древнего и только средний уровень'
);
// кнопки
let but_middle = document.querySelector('.middle-level');
let azathoth = document.querySelector('.azathoth');
azathoth.addEventListener('click', () => azathoth.classList.toggle('az_wh'));
let but_sh = document.querySelector('.shuffle__deck-container');
but_sh.addEventListener('click', () => but_sh.classList.toggle('b_color'));
but_middle.addEventListener('click', () => but_middle.classList.add('b_color'));

// выбор сложности и цвета карт

function getNormalCards(color, difficulties) {
  let normalArr = [];

  for (let i = 0; i < color.length; i++) {
    if (color[i].difficulty == difficulties) {
      normalArr.push(color[i]);
    }
  }
  return normalArr;
}

// перемешать колоду

function shuffle(array) {
  let cloneArr = JSON.parse(JSON.stringify(array));
  let t;
  let j;
  for (let i = cloneArr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let t = cloneArr[i];
    cloneArr[i] = cloneArr[j];
    cloneArr[j] = t;
  }
  return cloneArr;
}

// выводим массив карт по уровням

let allGreenCards = shuffle(greenCards);
let allBlueCards = shuffle(blueCards);
let allBrownCards = shuffle(brownCards);
let greenOne = allGreenCards.splice(0, 1);
let greenTwo = allGreenCards.splice(0, 2);
let greenThree = allGreenCards.splice(0, 2);

let brownOne = allBrownCards.splice(0, 2);
let brownTwo = allBrownCards.splice(0, 3);
let brownThree = allBrownCards.splice(0, 4);

let blueOne = allBlueCards.splice(0, 1);
let blueTwo = allBlueCards.splice(0, 1);

let levelOne = greenOne.concat(brownOne).concat(blueOne);
let levelTwo = greenTwo.concat(brownTwo).concat(blueTwo);
let levelThree = greenThree.concat(brownThree);

let levelOneShuf = shuffle(levelOne);
let levelTwoShuf = shuffle(levelTwo);
let levelThreeShuf = shuffle(levelThree);

let finalCardsPack = [...levelThreeShuf, ...levelTwoShuf, ...levelOneShuf];

// показ карт по очереди при нажатии на колоду

let shuffle_card = document.querySelector('.shuffle__deck-container');
let deck = document.querySelector('.deck__close');
let opened_card = document.querySelector('.card');
let open_card_one = document.querySelector('.deck');

function showOneCard() {
  if (finalCardsPack.length > 0) {
    let newCard = finalCardsPack.pop();
    const img = new Image();
    opened_card.append(img);
    img.classList.add('deck');
    console.log(newCard);
    img.src = newCard.cardFace;
  } else {
    alert('Колода закончилась! \n Спасибо за внимание!');
  }
}

deck.addEventListener('click', () => {
  if (opened_card.children[0]) {
    opened_card.firstChild.remove();
  }
  showOneCard();
});
