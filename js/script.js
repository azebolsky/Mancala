/*----- ***************** constants **************** -----*/
const KEY = {
    '1': 'player 1',
    '-1': 'player 2',
    null: ''
};
const marbleImage = 'https://i.imgur.com/bwgAbPE.png';

/*----- **************** app's state (variables) **************** -----*/
let board = {
    0: 0, 1: 4, 2: 4, 3: 4, 4: 4, 5: 4, 6: 4,
    7: 4, 8: 4, 9: 4, 10: 4, 11: 4, 12: 4, 13: 0
};
let turn;
let winner;

// create marbles.  Creates 24 A marblers and 24 B marbles.
class Marble {
    constructor(position) {
        // *this is the object - Marble {}
         this.position = position;
    }
}
const gamePieces = [];
let counter = 24;
let position = 6;
while(counter !== 0) {
    // creates a new object
    let marbleA = new Marble(`A${position}`);
    let marbleB = new Marble(`B${position}`);
    gamePieces.push(marbleA, marbleB)
    position--;
    if(position === 0) position = 6;
    counter--;
}


/*----- ************* cached element references *************** -----*/
const messageEl = document.getElementById('message');
const boardEls = document.getElementById('pod');
const mancalaEls = document.getElementById('mancala');


/*----- ***************  event listeners ***************** -----*/
document.getElementById('board').addEventListener('click', podClick);
document.getElementById('restart-btn').addEventListener('click', init);

/*----- functions -----*/
init();

// if pod is clicked on, we want to incremement the next pod by 1

function podClick(evt) {
    // shows corresponding data index that was clicked
    let index = evt.target.dataset.index;
    console.log(`${index} and ${board[index]}`);
    // below changes whatever was clicked to 0 as all marbles went into the next pods
    let currIndex = board[index];
    for (i=board[index]; i>0; i--) {
        console.log(`${index} is the current spot on the board`);
        index++;
        board[index]++;
        currIndex--;
    }
    board[index] = currIndex;
    turn *= -1;
}

function renderMarbles() {

}

function render() {
    for (let marb in board) {
        console.log(board[marb]);
        while (board[marb] !== 0) {
            boardEls.innerHTML(`<img src="${marbleImage}" alt="marble">`);
            board[marb]--;
        }
    }
};

function checkWinner() {
    for (let prop in board) {
        if (a1 === 0 && a2 === 0 && a3 === 0 && a4 === 0 && a5 === 0 && a6 === 0) {
        }
        if (b1 === 0 && b2 === 0 && b3 === 0 && b4 === 0 && b5 === 0 && b6 === 0) {
        }
    }
};
board[3]
function init() {
    // reset the game board
    board = {
        0: 0, 1: 4, 2: 4, 3: 4, 4: 4, 5: 4, 6: 4,
        7: 4, 8: 4, 9: 4, 10: 4, 11: 4, 12: 4, 13: 0
    };
    // decide whose turn it is
    turn = 1;
    // declare winner as null (false)
    winner = false;
    // visualize what the game board looks like
};