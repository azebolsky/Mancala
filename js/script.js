/*----- ***************** constants **************** -----*/
const KEY = {
    '1': 'player 1',
    '-1': 'player 2',
};  
const marbleArray = ['M1', 'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'M2'];
const MARBLE_SRC = 'https://i.imgur.com/bwgAbPE.png'; 

/*----- **************** app's state (variables) **************** -----*/
let turn;
let winner;
let board;

/*----- ************* cached element references *************** -----*/
const messageEl = document.getElementById('message');
const boardEls = document.querySelector('.pod');
const mancalaEls = document.getElementById('mancala');
const marbleImg = document.createElement('img');
const playerOneTurn = document.querySelectorAll('.p1');
const playerTwoTurn = document.querySelectorAll('.p2');


/*----- ***************  event listeners ***************** -----*/
document.getElementById('all-players').addEventListener('click', podClick);
document.getElementById('restart-btn').addEventListener('click', init);

/*----- functions -----*/
init();
// if pod is clicked on, we want to incremement the next pod by 1

function podClick(evt) {
    // shows corresponding data index that was clicked
    let podId = evt.target.id;
    if(!podId) return;
    let curIndex = podId;
    let curPodCount = board[podId];
    for (let i = 0; i < board[podId]; i++) {
        if (turn === 1) {
            if (curIndex === 13) {
                curIndex = 0;
                curPodCount--;
            } 
        }
        if (turn === -1) {
            if ((board[podId] + podId) === 13) {
                turn*=1;
            } else {
                turn*=-1;
            }
            if (curIndex === 6) {
                curIndex = 7;
                curPodCount--;
            }
        }
        // below will decrement the amount of marbles (curPodCount) each loop while increasing the board position (curIndex)
        if (curIndex === 13) {
            board[curIndex]++;
            curIndex = 0;
            curPodCount--;
        } else {
              board[curIndex]++;
              curPodCount--;
              curIndex++;
        }
    }
    board[podId] = 0;
    if (turn === 1) {
        console.log('hello');
        if ((board[podId] + podId) === 6) {
            console.log('line 70');
            turn*=1;
        } else {
            console.log('line 73');
            turn = 1 * -1;
        }
    }
    if (turn === -1) {
        if ((board[podId] + podId) === 13) {
            turn*=1;
        } else {
            turn*=-1;
        }
    }
    winner = checkWinner();
    // switch turn unless last marble in curPodCount ends in a mancala
    render();
}

function turnBlock() {
    // prevent turn 1 (player 1) from clicking on turn -1's (player 2) side and viceversa
    if (turn = 1) {
        playerTwoTurn.forEach(function(p2) {
            p2.style.pointerEvents = 'none';
        });
    } else if (turn = -1) {
        playerOneTurn.forEach(function(p1) {
            p1.style.pointerEvents = 'none';
        });
    }
}

function render() {
    for (let marble in board) {
        let el = document.getElementById(marble);
        el.innerHTML = '';  // clear previous content
        for (let i = 0; i < board[marble]; i++) {
            el.innerHTML += `<img src="${MARBLE_SRC}" alt="marble">`;
        };
    };
    turnBlock();
    if (!winner) {
        messageEl.textContent = `It is ${KEY[turn]}'s turn!`;
    } else if (board[6] === board[13]) {
        messageEl.textContent = `Looks like we have a tie! Play again and settle the score...`;
    } else if (board[6] > board[13]){
        messageEl.textContent = `With ${board[6]} to ${board[13]}, player 1 is the winner!`;
    } else if (board[6] < board[13]) {
        messageEl.textContent = `With ${board[13]} to ${board[6]}, player 1 is the winner!`;
    }
};


function checkWinner() {
    if (board[0] === 0 && board[1] === 0 && board[2] === 0 && board[3] === 0 && board[4] === 0 && board[5] === 0) {
    }
    if (board[7] === 0 && board[8] === 0 && board[9] === 0 && board[10] === 0 && board[11] === 0 && board[12] === 0) {
    }
};

function init() {
    board = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
    // decide whose turn it is
    turn = 1;
    // declare winner as null (false)
    winner = false;
    // visualize what the game board looks like
    render();
};