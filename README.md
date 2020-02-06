# Mancala...The Ultimate Marble Based Game

Mancala is a 2 person game which uses a rectangular board with 12 small pods on the long side and 2 large pods on the ends.  

### Mancala Wireframe
![Mancala Wireframe](https://i.imgur.com/5LvCBOr.jpg "Mancala Wireframe")


## Pseudocode
1. Define required constants
    1. Define who the players are -> player 1 and player 2.  Player 1 will have one side while Player 2 has the other side.

2. Define required variables used to track the state of the game
    1. Define a board array showing each of the spots on the board (12 small pods and 2 big pods)
        => will be two arrays inside an array which go from 0-6 representing all 7 of each players spots
    2. Use turn variable to decide whose turn it is
    3. Create winner variable to show if there is a winner, tie, or game is still in play

3. Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
    1. Store 14 pods on the board (12 small and 2 big pods)

4. Upon loading the app should:
    4.1 Initialize the state variables
    1. Initialize the board of 14 pods.  12 small pods should have a value of 4 while the 2 large pods should be null (0)
    2. Initialize whose turn it is. Should use 1 to represent player 1 and -1 to represent player 2
    3. Initialize winner to false (null).  Winner will hold value of 1 or -1.  Tie will be represented by 'T'.

    4.2 Render those values to the page
    1. Render the board:
        1. rectangular board which has 6 small pods on each long side and one large pod on each small end.
        2. 48 marbles divided evenly between players (24 marbles per player or side)
        3. The game board should START with 4 marbles placed in each of the 12 small pods (6 pods per side or player) 
        4. Each player will have their own 6 pods and large pod as their "side"

    2. Render a message:
        1. If no winner then game is still in play so display whose turn it is
        2. If winner then display count of marbles for player 1 to count of player 2.  Display winner as player with higher count.
            1. If count of player 1 and 2 is the same then there is a tie so display Tie Game.

    4.3) Wait for the user to click a pod

5. Handle a player clicking a pod
    1. Obtain index of pod that was clicked.  Click can only come from one of 6 pods on player's side.
        1. Extracting the index from an id assigned to the element in the HTML
    2. Add 1 (marble) to each consecutive pod (counter-clockwise) including Player 1's large end pod (CANNOT ADD TO PLAYER 2'S LARGE POD)
        1. IF last marble dropped in large pod, THEN Player 1 goes again
        2. IF last marble dropped in empty small pod (any), THEN turn goes to player 2
        3. IF last marble goes into small pod with > 0 marbles, THEN player 1 picks up all marbles in this pod and restarts


6. Handle a player clicking the replay button
    1.  Re-initialize the board and re-render the game

