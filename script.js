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


///////////////////////////////////////// Shuffle kaarten en Music code
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

var x = document.getElementById("myMusic"); //heb ik van w3schools gehaald

function MusicOn() { 
    x.muted = true;
} 
function MusicOff() { 
    x.muted = false;
}
///////////////////////////////////////// Shuffle kaarten en music code
  random();
  console.log(KaartArray);
var Board=document.getElementById("Board");

for(var i=0; i<KaartArray.length; i++){

  // toevoegen van kaart naar Board
  var CardsBack=document.createElement("div");
  CardsBack.classList.add("card");
  Board.appendChild(CardsBack);

  // voegt een image toe aan de achterkant van de kaart
  var images=document.createElement("img");
  images.src = KaartArray[i].image;
  images.className="image";
  CardsBack.appendChild(images);


  // veranderd de kleur bij aanklikken met de muis
  CardsBack.addEventListener("click",function(){
    console.log(clicks);
    
    var card = this;
    if (ClickedKaart.length < 2){
     card.classList.add("image");
      card.classList.add("match"); // voegt een klasse toe op alle kaarten die gematched zijn
      ClickedKaart.push(card.innerHTML);
      MatchedKaart.push(card);
      console.log(card);

  console.log(ClickedKaart);
      //// vergelijkt de kaarten die gematched zijn 
      if (ClickedKaart.length === 2){
        if (ClickedKaart[0] === ClickedKaart[1]){

          console.log("Het is een Match");
            ClickedKaart=[];
            MatchedKaart=[];
        } else {
          console.log("Het is geen Match")
          setTimeout(turnOffAllCards, 1000);
          for (i=0; i<MatchedKaart.length; i++){
            MatchedKaart[i].classList.remove("match");
          }
          MatchedKaart=[];
        }
      } 
    } 
  }) 
} 

function turnOffAllCards(){
  var FrontCards = document.querySelectorAll("div.image:not(.match)");
  for(var i = 0; i < FrontCards.length; i++){
    FrontCards[i].classList.remove("image");
    ClickedKaart=[];
  }
}