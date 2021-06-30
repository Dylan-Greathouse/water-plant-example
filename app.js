// import functions and grab DOM elements
const plantImg = document.getElementById('plant-img');
const plantFeedback = document.getElementById('plant-feedback');
const waterBtn = document.getElementById('water-btn');
// initialize state
let waterLevel = 0;
// set event listeners 

waterBtn.addEventListener('click', ()=>{
    waterLevel ++;

    if (waterLevel < 3) {
        plantImg.src = './assets/hqdefault.jpg';
        plantFeedback.textContent = `The plant is thirsty! ${waterLevel}`;
    } else if (waterLevel <= 10) {
        plantImg.src = './assets/hydrangea-care.jpg';
        plantFeedback.innerText = `The plant is healthy ${waterLevel}`;
    } else {
        plantImg.src = './assets/brown_mophead.jpg';
        plantFeedback.innerText = `The plant is over watered`;   
    }
});
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  //Math.floor(Math.random()*30)
    //total guesses 3
    //const userGuesses

    //event listener button
    //input number
    //button to check if user number is same as target number
    //update feedback
