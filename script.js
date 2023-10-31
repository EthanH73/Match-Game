let matchedCards = [];
let flippedCards = [];
let score = 0;
const buttonPairs = 8;
const Time = document.getElementById("Time");

function initialize() {
  const buttons = document.querySelectorAll('.button');
  for (const button of buttons) {
    button.addEventListener("click", clickCard);
  }
  assignCardImage(buttons);
}

function checkMatch() {
  if (flippedCards.length === 2) {
    if (flippedCards[0].getAttribute('data-image') === flippedCards[1].getAttribute('data-image')) {
      matchedCards.push(flippedCards[0], flippedCards[1]);
      flippedCards = [];
      score++;
      
      alert("You found a match!");
    } else {
      setTimeout(() => {
        for (const card of flippedCards) {
          card.style.backgroundImage = 'none';
          card.style.backgroundColor = 'blue';
        }
        flippedCards = [];
      }, 1000);
    }

    if (matchedCards.length === buttonPairs * 2) {
      alert("You've won!");
    }
  }
}

function clickCard() {
  if (!flippedCards.includes(this) && !matchedCards.includes(this) && flippedCards.length < 2) {
    flippedCards.push(this);
    const originalImage = this.getAttribute('data-image');
    this.style.backgroundImage = `url(images/${originalImage})`;
    this.style.backgroundColor = 'transparent';
    checkMatch();
  }
}

function assignCardImage(buttons) {
  const remainingImgs = [
    'spider.jpg', 'spider.jpg',
    'witch.png', 'witch.png',
    'wood.png', 'wood.png',
    'pumpkinking.png', 'pumpkinking.png',
    'horse.png', 'horse.png',
    'deathsickle.png', 'deathsickle.png',
    'scarecrow.png', 'scarecrow.png',
    'threeheadhound.png', 'threeheadhound.png'
  ];

  for (const button of buttons) {
    const randomIndex = Math.floor(Math.random() * remainingImgs.length);
    const cardImage = remainingImgs.splice(randomIndex, 1)[0];

    button.style.backgroundImage = 'none';
    button.style.backgroundColor = 'blue';
    button.setAttribute('data-image', cardImage);
  }

  let second = 0;
    minute = 0;
  const timeGenerator = ()=> {
    second++;
    if(second==60){
      minute++;
      second=0;
    }
    let secondsValue = second <10 ? `0${second}` : second;
    let minuteValue = minute <10 ?`0${minute}`: minute;

    Time.innerHTML = `<span> Time:</span>${minuteValue}:${secondsValue}`;
  };
}
