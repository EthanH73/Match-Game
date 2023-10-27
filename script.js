let matchedCards = [];
let flippedCards = [];
let buttonPairs = 8;

function initialize() {
  const buttons = document.querySelectorAll('.button');
  for (const button of buttons) {
    button.addEventListener("click", clickCard);
  }
  assignCardImage(buttons);
}

function checkMatch() {
  if (flippedCards.length == 2) {
    if (flippedCards[0].textContent == flippedCards[1].textContent) {
      alert("You found a match!")
      matchedCards.push(flippedCards[0], flippedCards[1]);
      // flippedCards[0].style.backgroundColor = "blue"; 
      // flippedCards[1].style.backgroundColor = "blue"; 
    } else {      
      // flippedCards[0].style.backgroundColor = "red";
      // flippedCards[1].style.backgroundColor = "red";
    }
    flippedCards = [];

    if (matchedCards.length == buttonPairs * 2) {
      alert("You've won!");
    }
  }
}

function clickCard() {
  if (!flippedCards.includes(this) && !matchedCards.includes(this)) {
    flippedCards.push(this);
    this.style.backgroundColor = "white"; 
    checkMatch();
  }
}

function assignCardImage(buttons) {
  const remainingImgs = ['spider.jpg', 'spider.jpg', 'witch.png', 'witch.png', 'wood.png', 'wood.png', 'pumpkinking.png', 'pumpkinking.png', 'horse.png', 'horse.png', 'deathsickle.png', 'deathsickle.png', 'scarecrow.png', 'scarecrow.png', 'threeheadhound.png', 'threeheadhound.png'];

  for (const button of buttons) {
    const randomIndex = Math.floor(Math.random() * remainingImgs.length);
    const cardImage = remainingImgs.splice(randomIndex, 1)[0];

    button.append(cardImage);
    // button.style.color = "red";
    // button.style.backgroundColor = "red"; 
  }
}
