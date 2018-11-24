let suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs' ]
let values = ['Ace','King', 'Queen','Joker','Ten','Nine','Eight','Seven','Six','Five','Four','Three','Two']

let deck = [];
let playerDeck = [];
let suitorDeck = [];
let playersScore;
let suitorsScore;
let playerWon=0;
let gameOn=1;
let arena = document.getElementById("gameArena");
let startButton = document.getElementById("newGameBtn");
let hitButton = document.getElementById("hitBtn");
let stayButton = document.getElementById("stayBtn");

function createDeck(){
    let deck = [];
    for(let i=0;i< suits.length;i++) {
        for(let j=0;j<values.length;j++) {
            let card = {
                suit: suits[i],
                value: values[j]
            }
            deck.push(card);
        }
    }
    return deck;
}

function shuffleDeck() {
    for(let i=0; i< deck.length;i++) {
        let shuffleindex = Math.trunc(Math.random()*52);
        let temp= deck[shuffleindex];
        deck[shuffleindex]=deck[i];
        deck[i]=temp;
    }
}

function getNextCard() {
    return deck.shift();
}

function getScoreFromCard(card) {
    switch(card.value) {
        case 'Ace':
        return 11;
        case 'Two':
        return 2;
        case 'Three':
        return 3;
        case 'Four':
        return 4;
        case 'Five':
        return 5;
        case 'Six':
        return 6;
        case 'Seven':
        return 7;
        case 'Eight':
        return 8;
        case 'Nine':
        return 9;
        default:
        return 10;

    }
}

function printCard(card) {
    return card.value + ' of ' + card.suit;
}

function updateScores() {
    playersScore=0;
    suitorsScore=0;
    for(let i =0; i<playerDeck.length;i++) {
        playersScore += getScoreFromCard(playerDeck[i]);
    }
    for(let i =0; i<suitorDeck.length;i++) {
        suitorsScore += getScoreFromCard(suitorDeck[i]);
    }
}


function updateArena() {
    let arenaText = "Suitors Score \n" ;
    for(let i=0; i<suitorDeck.length;i++) {
        arenaText += printCard(suitorDeck[i]) + "\n";
    }
    arenaText += "Total: " + suitorsScore + "\n" + "Players Score \n";
    for(let i=0; i<playerDeck.length;i++) {
        arenaText += printCard(playerDeck[i]) + "\n";
    }
    arenaText += "Total: " + playersScore + "\n";

    checkGameStatus();
    if(!gameOn) {
        if(playerWon) {
            arenaText += "You Won";
        }
        else {
            arenaText += "Suitor Won";
        }
        hitButton.style.display="none";
        stayButton.style.display="none";
        startButton.style.display="inline";
    }
    arena.innerText=arenaText;
}


hitButton.style.display="none";
stayButton.style.display="none";

startButton.addEventListener("click", function(){
    gameOn=1;
    arena.innerText="Starting...";
    startButton.style.display="none";
    hitButton.style.display="inline";
    stayButton.style.display="inline";
    playerDeck=[];
    suitorDeck=[];
    playersScore=0;
    suitorsScore=0;
    deck=createDeck();
    shuffleDeck();
    playerDeck.push(getNextCard(), getNextCard());
    suitorDeck.push(getNextCard(), getNextCard());
    updateScores();
    updateArena();
});

function checkGameStatus(){
    if(suitorsScore >21 || (playersScore <21 && playerDeck.length >=5)) {
        gameOn=0;
        playerWon=1;
    }
    else if (playersScore > 21 || (suitorsScore <21 && suitorDeck.length>=5)) {
        gameOn=0;
        playerWon=0;
    }
}

hitButton.addEventListener("click", function() {
    playerDeck.push(getNextCard());
    updateScores();
    updateArena();
});

stayButton.addEventListener("click", function() {
    suitorDeck.push(getNextCard());
    updateScores();
    updateArena();
})