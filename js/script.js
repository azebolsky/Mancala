/*----- ***************** constants **************** -----*/
const KEY = {
    '1': 'player 1',
    '-1': 'player 2',
    null: ''
};  
const marbleArray = ['M1', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'M2'];
const MARBLE_SRC = 'https://i.imgur.com/bwgAbPE.png'; 

/*----- **************** app's state (variables) **************** -----*/
let turn;
let winner;
let board;

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
const boardEls = document.querySelector('.pod');
const mancalaEls = document.getElementById('mancala');
const marbleImg = document.createElement('img');


/*----- ***************  event listeners ***************** -----*/
document.getElementById('all-players').addEventListener('click', podClick);
document.getElementById('restart-btn').addEventListener('click', init);

/*----- functions -----*/
init();

// if pod is clicked on, we want to incremement the next pod by 1

// board = [0, 4, 4, 4, 4, 4, 4, 
//             4, 4, 4, 4, 4, 4, 0];

function podClick(evt) {
    // shows corresponding data index that was clicked
    let podId = evt.target.id;
    console.log(podId);
    if(!podId) return;
    let nextPodId = podId;
    for (let i = 0; i < board[podId]; i++) {
        board[nextPodId]++;
        if(nextPodId > -1) {
            nextPodId-- 
        } else {
            let nextPodId2 = nextPodId + 12
        }
        //  if (podId === 0) {
        //     nextPodId = 7; 
        //     board[nextPodId]++;
        //     nextPodId--;
        // } else if (podId === 13) {
        //     nextPodId = 1;
        //     board[nextPodId]++;
        //     nextPodId--;
        // } else {
        //     console.log('line 73')
        //     board[nextPodId]++;
        //     nextPodId--;
        // } 
    }
    board[podId] = 0;
    // let currPosition = board[podId];
    // let pickedUpMarbles = [...currPosition];
    // board[podId] = [];
    // console.log(pickedUpMarbles)
    winner = checkWinner();
    render();
};

function render() {
    for (let marble in board) {
        console.log(`${marble} and ${board[marble]}`);
        let el = document.getElementById(marble);
        el.innerHTML = '';  // clear previous content
        for (let i = 0; i < board[marble]; i++) {
            el.innerHTML += `<img src="${MARBLE_SRC}" alt="marble">`;
        };
    };
    // if (!winner) {
    //     messageEl.textContent = `It is ${KEY[turn]} turn!`;
    // } else if (winner && (board['M1'] === board['M2'])) {
    //     messageEl.textContent = `Looks like we have a tie! Play again and settle the score...`;
    // } else {
    //     messageEl.textContent = `${KEY[turn]} is the winner!`;
    // }
};

function checkWinner() {
    if (board[1] === 0 && board[2] === 0 && board[3] === 0 && board[4] === 0 && board[5] === 0 && board[6] === 0) {
    }
    if (board[7] === 0 && board[8] === 0 && board[9] === 0 && board[10] === 0 && board[11] === 0 && board[12] === 0) {
    }
};

function init() {
    board = [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0];
    // handlePlaceMarbles();
    // decide whose turn it is
    turn = 1;
    // declare winner as null (false)
    winner = false;
    // visualize what the game board looks like
    render();
};

// function handlePlaceMarbles() {
//     gamePieces.forEach(function(gamePiece) {
//         board[gamePiece.position].push(gamePiece);
//     });
// }
