'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
   let yourNumber = Number(document.querySelector('.guess').value);
   if(!yourNumber){
    displayMessage="Please put your Answer it is can't be zero.";
   }else if(secretNumber === yourNumber){
        displayMessage("You are Awesome!");
        document.querySelector('.number').textContent= secretNumber;
        document.querySelector('input').style.visibility = "hidden";
        document.querySelector('.check').style.visibility = "hidden";
        document.querySelector('body').style.backgroundColor = "blue";
        document.querySelector('h1').textContent="You got it! My Number is ";
        document.querySelector('.number').style.width = "30rem";
        if(highscore < score){
            highscore = score;
            document.querySelector('.highscore').textContent= highscore;
        }
      
    }else if(yourNumber > 20){
        displayMessage("I told you my number is between 1 and 20.");
        
    }else if(yourNumber !== secretNumber){
        displayMessage(yourNumber < secretNumber ? "Too Low" : "Too high");
        document.querySelector('h1').textContent = "Keep Going";
        if(score > 0){
        score--; 

        document.querySelector('.score').textContent= score;
        if(score === 0){
            document.querySelector('input').style.visibility = "hidden";
            document.querySelector('.check').style.visibility = "hidden";
            document.querySelector('h1').textContent = "Game Over! My Number is";
            displayMessage("Game Over!");
            document.querySelector('.number').textContent= secretNumber;
            document.querySelector('.number').style.width = "30rem";
   }
    
    }
   }
    
});

document.querySelector('.again').addEventListener("click",function(){
    
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('h1').textContent = "Guess My Number!";
    document.querySelector('.number').textContent='?';
    document.querySelector('.number').style.width = "15rem";
    document.querySelector('body').style.backgroundColor = "#222";

 
    let yourNumber = Number(document.querySelector('.guess').value='');
   document.querySelector('input').style.visibility = "visible";
   document.querySelector('.check').style.visibility = "visible";
   displayMessage("Start guessing...");
   score = 20;
   document.querySelector('.score').textContent= score;


});
    
  