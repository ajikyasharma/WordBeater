let currentWord= document.getElementById("current-word")
let inputWord= document.getElementById("word-input")
let timeInput= document.getElementById("time")
let scoreInput= document.getElementById("score")
let message= document.getElementById("message")

let timeLeft= 5
let scoreDisplay=0;

const word= ['JavaScript','Python','Java','Developer','Researcher','Bareilly','Bharat','Watch','NoteBook','WaterBottle']

function makeWord(word)
{
  let index= Math.floor(Math.random()*word.length)
  currentWord.innerHTML=word[index]
  //console.log(word[index])
}
function timeHandler(){

    if(timeLeft ==0)
    {
        message.innerHTML="GAME OVER!!!"
    }
    if(timeLeft >= 0)
    timeInput.innerHTML= timeLeft
    timeLeft--
}

setInterval(timeHandler, 1000)

function inputHandler(input)
{
   if(input == currentWord.innerHTML)
   {
    console.log("Kya Dikkat hai")
    message.innerHTML="CORRECT!!"
    makeWord(word)
    timeLeft=5;
    inputWord.value=""
    scoreDisplay++;
    scoreInput.innerHTML=scoreDisplay
   }
}

inputWord.addEventListener("input",(e)=>inputHandler(e.target.value))

window.addEventListener("DOMContentLoaded",function(){
    makeWord(word)
})