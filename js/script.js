/*----- ***************** constants **************** -----*/
const KEY = {
    '1': 'player 1',
    '-1': 'player 2',
};  
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

function checkLastMarbleInMancala(position, val) {
    while(val !== 0) {
        val--
        position++
    }
    console.log(position === 6 || position === 13)
    return position === 6 || position === 13;
}


function podClick(evt) {
    // shows corresponding data index that was clicked
    let podId = evt.target.id;
    let persistTurn = checkLastMarbleInMancala(podId, board[podId])
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
            if (curIndex === 6) {
                curIndex = 7;
                curPodCount--;
            }
        }
        if (curPodCount === 0 && board[curIndex] === 1) {
            board[13]+=board[curIndex - 12];
            board[12 - curIndex] = 0;
        }
            if (curPodCount === 0 && board[curIndex] === 1) {
            board[6]+=board[12 - curIndex];
            board[12 - curIndex] = 0;
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
    // figure out if last marble landed in empty pod and other player has marbles on corresponding side
    // if yes, can move marble in last pod landed and add opponents corresponding pod's marbles
    if (!persistTurn) {
        turn*=-1;
    }
    winner = checkWinner();
    // switch turn unless last marble in curPodCount ends in a mancala
    render();
}

function render() {
    for (let marble in board) {
        let el = document.getElementById(marble);
        el.innerHTML = '';  // clear previous content
        for (let i = 0; i < board[marble]; i++) {
            el.innerHTML += `<img src="${MARBLE_SRC}" alt="marble">`;
        };
    };
    if (!winner) {
        messageEl.textContent = `It is ${KEY[turn]}'s turn!`;
    } else if (board[6] === board[13]) {
        messageEl.textContent = 'Looks like we have a tie! Play again and settle the score...';
    } else if (board[6] > board[13]){
        messageEl.textContent = `With ${board[6]} to ${board[13]}, player 1 is the winner!`;
    } else if (board[6] < board[13]) {
        messageEl.textContent = `With ${board[13]} to ${board[6]}, player 2 is the winner!`;
    }
    turnBlock();
};

function init() {
    board = [4, 4, 4, 4, 4, 4, 0, 4, 4, 4, 4, 4, 4, 0];
    turn = 1;
    winner = false;
    render();
};

function checkWinner() {
    if (board[0] === 0 && board[1] === 0 && board[2] === 0 && board[3] === 0 && board[4] === 0 && board[5] === 0) {
    }
    if (board[7] === 0 && board[8] === 0 && board[9] === 0 && board[10] === 0 && board[11] === 0 && board[12] === 0) {
    }
};

function turnBlock() {
    // prevent turn 1 (player 1) from clicking on turn -1's (player 2) side and viceversa
    if (turn === 1) {
        playerTwoTurn.forEach(function(p2) {
            p2.style.pointerEvents = 'none';
        });
        playerOneTurn.forEach(function(p1) {
            p1.style.pointerEvents = '';
        });
        board.forEach(function(b1) {
            for (i = 0; i < board.length; i++) {
                if (board[i] === 0) {
                    document.querySelector(`.a${i}`).style.pointerEvents = 'none';
                }
            }
        })
    } else if (turn === -1) {
        playerOneTurn.forEach(function(p1) {
            p1.style.pointerEvents = 'none';
        });
        playerTwoTurn.forEach(function(p2) {
            p2.style.pointerEvents = '';
        });
        board.forEach(function(b2) {
            for (i = 0; i < board.length; i++) {
                if (board[i] === 0) {
                    document.querySelector(`.b${i}`).style.pointerEvents = 'none';
                    }
            }
        })
    }
}