/*----- ***************** constants **************** -----*/
const KEY = {
    '1': 'player 1',
    '-1': 'player 2',
    null: ''
};  

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
const boardEls = document.getElementById('m1');
const mancalaEls = document.getElementById('mancala');
const marbleImg = document.createElement('img');

const marbleArray = ['M1', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'M2'];


/*----- ***************  event listeners ***************** -----*/
document.getElementById('board').addEventListener('click', podClick);
document.getElementById('restart-btn').addEventListener('click', init);

/*----- functions -----*/
init();

// if pod is clicked on, we want to incremement the next pod by 1

function podClick(evt) {
    // shows corresponding data index that was clicked
    let position = evt.target.dataset.position;
    console.log(`${position} is the position`);
    // below changes whatever was clicked to 0 as all marbles went into the next pods
    // let currPosition = board[position];
    //     for (i=location; i>0; i--) {
    //         console.log(`${position} is the current spot on the board`);
    //     position++;
    //     board[position]++;
    //     currPosition--;
    //     };
    // board.position = currPosition;
    // turn *= -1;
}

function render() {
    for (let marble in board) {
        console.log(board[marble]);
        marbleImg.src = 'https://i.imgur.com/bwgAbPE.png';
        for (let i=0; i<marbleArray.length; i++) {
            document.getElementById(`${marbleArray[i]}`).appendChild(marbleImg);
        }
    };
};

function checkWinner() {
    for (let prop in board) {
        if (a1 === 0 && a2 === 0 && a3 === 0 && a4 === 0 && a5 === 0 && a6 === 0) {
        }
        if (b1 === 0 && b2 === 0 && b3 === 0 && b4 === 0 && b5 === 0 && b6 === 0) {
        }
    }
};

function init() {
    // reset the game board
    // board = {
    //     0: 0, 1: 4, 2: 4, 3: 4, 4: 4, 5: 4, 6: 4,
    //     7: 4, 8: 4, 9: 4, 10: 4, 11: 4, 12: 4, 13: 0
    // };
    board = {
        "M1": [],
        "A1": [],
        "A2": [],
        "A3": [],
        "A4": [],
        "A5": [],
        "A6": [],
        "B1": [],
        "B2": [],
        "B3": [],
        "B4": [],
        "B5": [],
        "B6": [],
        "M2": []
    };
    handlePlaceMarbles();
    // decide whose turn it is
    turn = 1;
    // declare winner as null (false)
    winner = false;
    // visualize what the game board looks like
    render();
};

function handlePlaceMarbles() {
    gamePieces.forEach(function(gamePiece) {
        board[gamePiece.position].push(gamePiece);
    });
}
