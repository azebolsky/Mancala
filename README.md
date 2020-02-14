# Mancala
Mancala is a 2 person game which uses a rectangular board with 12 small pods on each long side and 2 large pods or "Mancalas" on the ends.  There are 48 total marbles which are evenly divided at the start of the game to 24 each player or 4 in each of the small pods.  Player 1 gets one side with 6 small pods and one Mancala on the end while player 2 gets the opposite small pods and Mancala.  The goal is to get as many marbles in your Mancala as possible and whoever has the most marbles in their Mancala at the end, wins.

## Game Play
Either player can start playing by picking up the 4 marbles in any small pod and then distributing 1 marble in each consecutive pod, going counter-clockwise.  Players may drop marbles in their own Mancala but not in their opponents.  If the last marble of a player's turn lands in their Mancala, they may go again and choose from any of their small pods containing more marbles.  If one player's last marble in their turn lands in an empty pod on their side and their opponent has marbles in their corresponding pod, they may take those marbles along with their last marble and place them in their Mancala.

The game will end when one player does not have any more marbles in their small pods.  At this point, both players will count how many marbles are in their Mancala and whoever has the most marbles, wins!


### Mancala Wireframe
![Mancala Wireframe](https://i.imgur.com/5LvCBOr.jpg "Mancala Wireframe")

### Start of the game

![Mancala Start](https://i.imgur.com/WaNi45y.png "Mancala Start")

### End of game showing a winner

![Tie Game](https://i.imgur.com/hMgFwj2.png "Winner Game")

### Technologies Used

Javascript, HTML, and CSS.

### Getting Started



### Next Steps (Icebox Items)

* Add an alternate board.  Possibly one which looks like a yin yang.
* Allow user to choose which player they want to be or have a randomized selection of which player goes first.
* Add optional sounds for each pod click.


## Pseudocode

```1. Define required constants
    1. Define who the players are -> player 1 and player 2.  Player 1 will have one side while Player 2 has the other side.
        a. Player 1 represented by 1, Player 2 represented by -1, and empty represented by null. Mancala represented by m1 and m2.

2. Define required variables used to track the state of the game
    2.1 Define a board showing each of the spots on the board (12 small pods and 2 mancalas)
        2.1.1 Create object literal for each position on the board
            2.1.1.1 Player 1: A1, A2, A3, A4, A5, A6, A7 and Player 2: B1, B2, B3, B4, B5, B6, B7
    2. Use turn variable to decide whose turn it is (use player 1, -1, null)
    3. Create winner variable to show if there is a winner, tie, or game is still in play

3. Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
    1. Store 14 pods on the board (12 small and 2 Mancalas)

4. Upon loading the app should:
    4.1 Initialize the state variables
    1. Initialize the board of 14 pods.  12 small pods should have a value of 4 while the 2 Mancalas should be null (0)
    2. Initialize whose turn it is. Should use 1 to represent player 1 and -1 to represent player 2
    3. Initialize winner to false (null).  Winner will hold value of 1 or -1.  Tie will be represented by 'T'.

    4.2 Render those values to the page
    1. Render the board:
        1. rectangular board which has 6 small pods on each long side and one large mancala on each small end.
        2. 48 marbles divided evenly between players (24 marbles per player or side)
        3. The game board should START with 4 marbles placed in each of the 12 small pods (6 pods per side or player) 
        4. Each player will have their own 6 pods and large mancala as their side (like a yin and yang)

    2. Render a message:
        1. If no winner then game is still in play so display whose turn it is
        2. If winner then display count of marbles in mancala for player 1 to count of player 2.  Display winner as player with higher count.
            1. If count of player 1 and 2 is the same then there is a tie so display Tie Game.

    4.3) Wait for the user to click a pod

5. Handle a player clicking a pod
    1. Obtain index of pod that was clicked.  Click can only come from one of 6 pods on player's side.
        1. Extracting the index from an id assigned to the element in the HTML
    2. Add 1 (marble) to each consecutive pod (counter-clockwise) including Player 1's large end pod (CANNOT ADD TO PLAYER 2'S LARGE POD)
        1. IF last marble dropped in Mancala, THEN Player 1 goes again
        2. IF last marble dropped in empty small pod on player 1 side AND player 2 has marbles in their corresponding small pod THEN those marbles and the player 1's last marble go into player 1's mancala and turn switches to player 2
        3. IF player 1's last marble goes into small pod with > 0 marbles AND the player 2 does not have marbles in the corresponding pod THEN turn switches to player 2


6. Handle a player clicking the replay button
    1.  Re-initialize the board and re-render the game ```
