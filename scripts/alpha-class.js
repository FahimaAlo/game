// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     // console.log(homeSection.classList);

//     const playgroundSection = document.getElementById('play-ground');

//     playgroundSection.classList.remove('hidden');
//     // console.log(playgroundSection.classList)

// }
function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key; 
    console.log('player pressed', playerPressed);

    // stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    // key player is expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();

    // check right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('you got a point!');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);

        
        // update score:
        // get the current score

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);
     
        // // increase the score by 1

        // const newScore = currentScore + 1;

        // // show the updated score
        // currentScoreElement.innerText = newScore;
        // start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('viya ba apu ...right key press koro');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

        // .........................................
        // 1.get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        

        // // 2.reduce the life count
        // const newLife = currentLife - 1;

        // // 3.display the updated life count
        // currentLifeElement.innerText = newLife;

    }
   
}

document.addEventListener('keypress', handleKeyboardKeyUpEvent);

function continueGame(){
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet', alphabet);
    

    // set randomly generated alphabet to the screen(display it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);

}

function play() {

    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

// reset score and life
setTextElementValueById('current-life', 5);
setTextElementValueById('current-score', 0);


    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
    // update final score
    // 1.get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score', lastScore);
    // clear the last selected alphabet highlight
    const currentAlphabet = getElementTextById('current-alphabet');
    // console.log(currentAlphabet);
    removeBackgroundColorById(currentAlphabet);
}