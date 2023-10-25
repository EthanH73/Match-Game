function initialize() {
  matchedCards = [];
  flippedCards = [];
  button1 = document.getElementById("A");
  button2 = document.getElementById("A");
  button3 = document.getElementByID("B");
  button4 = document.getElementById("B");
  button5 = document.getElementById("C");
  button6 = document.getElementById("C");
  button7 = document.getElementById("D");
  button8 = document.getElementById("D");
  button9 = document.getElementById("E");
  button10 = document.getElementById("E");
  button11 = document.getElementById("F");
  button12 = document.getElementById("F");
  button13 = document.getElementById("G");
  button14 = document.getElementById("G");
  button15 = document.getElementById("H");
  button16 = document.getElementById("H");
  const buttons = document.querySelectorAll('button');
  for (const button of buttons) {
    button.addEventListener("click", clickCard());
  }
}

function checkMatch() {
  if (matchedCards.length == 2) {
    if (matchedCards[0].value == matchedCards[1].value) {
      flippedCards.push(matchedCards[0]);
      flippedCards.push(matchedCards[1]);
      matchedCards = [];
    }
    else {
      matchedCards = [];
    }
}

function clickCard() {
  matchedCards.push(this);
  console.log(1);
  checkMatch();
}

function assignCardValue(){
   {
     var successDraw = 0;
     var num1 = 0;
     var num2 = 0;
     var num3 =0;
     var num4 = 0;
     var num5 = 0;
     var num6 = 0;
     var num7 =0;
     var num8 = 0;
     var num;
     var isDraw = false;
     for (const button of buttons)
       while (!isDraw&&successDraw<=16)
         {
           num = Math.floor(Math.random() * 8)+1;
           if(num1<3)
           {
             if(num==1)
             {
               num1++;
               isDraw = !isDraw;
             }
           }
           else if(num2<3)
           {
             if(num==2)
             {
               num2++;
               isDraw = !isDraw;
             }
           }
           else if(num3<3)
            {
              if(num==3)
              {
                num3++;
                isDraw = !isDraw;
              }
            }
           else if(num4<3)
            {
              if(num==4)
              {
                num4++;
                isDraw = !isDraw;
              }
            }
           else if(num5<3)
            {
              if(num==5)
              {
                num5++;
                isDraw = !isDraw;
              }
            }
           else if(num6<3)
            {
              if(num==6)
              {
                num6++;
                isDraw = !isDraw;
              }
            }
           else if(num7<3)
           {
             if(num==7)
             {
               num7++;
               isDraw = !isDraw;
             }
           }
           else if(num8<3)
           {
             if(num==8)
             {
               num8++;
               isDraw = !isDraw;
             }
           }
         }
     if(num==1)
     {
       button.style.backgroundColor = "red";
     }
     if(num==2)
      {
        button.style.backgroundColor = "blue";
      }
  }
}
