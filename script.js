KaartArray=[
    {text: "A", image: "images/ronaldo.jpg"},
    {text: "A", image: "images/ronaldo.jpg"},
    {text: "B", image: "images/kante.jpg"},
    {text: "B", image: "images/kante.jpg"},
    {text: "C", image: "images/neymar.jpg"},
    {text: "C", image: "images/neymar.jpg"},
    {text: "D", image: "images/lacca.jpg"},
    {text: "D", image: "images/lacca.jpg"},
    {text: "E", image: "images/ozil.jpg"},
    {text: "E", image: "images/ozil.jpg"},
    {text: "F", image: "images/pogba.jpg"},
    {text: "F", image: "images/pogba.jpg"}

];


ClickedKaart=[];

MatchedKaart=[];

clicks=25;



///////////////////////////////////////// SHUFFLE DECK en audio
var random=function(){
  var CurrentValue = KaartArray.length
  , lengteValue
  , RandomValue;
    

  while (0 !== CurrentValue) {
    RandomValue = Math.floor(Math.random() * CurrentValue);
    CurrentValue -= 1;

    lengteValue = KaartArray[CurrentValue];
    KaartArray[CurrentValue] = KaartArray[RandomValue];
    KaartArray[RandomValue] = lengteValue;
  }
}

var x = document.getElementById("myMusic");

function MusicOn() { 
    x.muted = true;
} 
function MusicOff() { 
    x.muted = false;
}
///////////////////////////////////////// End shuffle DECK en audio
  random();
  console.log(KaartArray);
var Board=document.getElementById("Board");

for(var i=0; i<KaartArray.length; i++){

  // appending cards to Board
  var CardsBack=document.createElement("div");
  CardsBack.classList.add("card");
  Board.appendChild(CardsBack);

  // adding images to cardback
  var images=document.createElement("img");
  images.src = KaartArray[i].image;
  images.className="image";
  CardsBack.appendChild(images);


  // Change color of cards on click
  CardsBack.addEventListener("click",function(){
    console.log(clicks);
    
    var card = this;
    if (ClickedKaart.length < 2){
     card.classList.add("image");
      card.classList.add("match"); // add class of match to all cards
      ClickedKaart.push(card.innerHTML);
      MatchedKaart.push(card);
      console.log("this is card" + card);

  console.log("this is ClickedKaart" + ClickedKaart);
      //// compares cards that are clicked on
      if (ClickedKaart.length === 2){
        if (ClickedKaart[0] === ClickedKaart[1]){

          console.log("It's a match!");
            ClickedKaart=[];
            MatchedKaart=[];
        } else {
          console.log("It's not a match!")
          setTimeout(turnOffAllCards, 1000);
          for (i=0; i<MatchedKaart.length; i++){
            MatchedKaart[i].classList.remove("match");
          }
          MatchedKaart=[];
           // calls turnOffAllCards
        }
      } // close if statement
    } // close second if statement
  }) // event listener
} // close for loop

function turnOffAllCards(){
  var FrontCards = document.querySelectorAll("div.image:not(.match)");
  for(var i = 0; i < FrontCards.length; i++){
    FrontCards[i].classList.remove("image");
    ClickedKaart=[];
   


  }

}
   function stop_the_game() {
        restart_div.slideDown();
        restart_btn.focus();
    }
 var restart_div = $('#restart_div');
 var restart_btn = $('#restart');

var x = document.getElementById("myAudio");

function enableMute() { 
    x.muted = true;
} 
function disableMute() { 
    x.muted = false;
}