// Mancala
// The ultimate marble based game.

// *****GAME BOARD (render game)

    // rectangular board which has 6 small pods on each long side and one large pod on each small end.

    // 48 marbles divided evenly between players (24 marbles per player or side)

    // The game board should START with 4 marbles placed in each of the 12 small pods (6 pods per side or player) 

    // Each player will have their own 6 pods and large pod as their "side"


// *****GAME PLAY

    // Player 1 can pick ANY of their own 6 pods to pick up all marbles

    // Player 1 cannot click on Player 2's 6 pods or either of the large end pods at any time in the game

    // Add 1 marble to each consecutive pod (counter-clockwise) including Player 1's large end pod (CANNOT ADD TO PLAYER 2'S LARGE POD)

        // IF last marble dropped in large pod, THEN Player 1 goes again

        // IF last marble dropped in empty small pod (any), THEN turn goes to player 2

        // IF last marble goes into small pod with > 0 marbles, THEN player 1 picks up all marbles in this pod and restarts


// *****When is Game Over?

    // If either player has 0 marbles in any of their 6 small pods

        // THEN game is over and if the other player has marbles in their small pods, these move into their large pod

        // winner is player with most marbles in their large pod


// *****Restart

    // click restart button to place board back to gameStart