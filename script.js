// _____ _     _____         _____          
// |_   _(_) __|_   _|_ _  __|_   _|__   ___ 
//   | | | |/ __|| |/ _` |/ __|| |/ _ \ / _ \
//   | | | | (__ | | (_| | (__ | | (_) |  __/
//   |_| |_|\___||_|\__,_|\___||_|\___/ \___|

// TicTacToe Game Rules:

// - Player designated to go first (p1) selects their desired piece (X, or O)
// - They select a square to place their piece
// - Player 2 (p2) selects a square to place their piece
// - This continues until a player has connected three of their pieces diagonally, vertically
//   or horizontally, or, until all squares are full, which results in a draw

// Additional features of this program:

// - 

// How this program is structured: 

// - TicTacToe object is defined 


class TicTacToe {
    constructor() {
        this.choice;
    }

    newGame() {
        // code goes here
    }

    winCheck() {
        // code goes here
    }

    placeMove(gameTile) {
        gameTile.innerText = this.choice;
        // console.log(gameTiles);
        // gameTiles.innerHTML = this.p1choice;
    }

    choose(piece) {
        this.choice = piece;
        chooseBtn.style.display = "none";
    }

}

const chooseBtn = document.querySelector(".choose-button");
const xBtn = document.querySelector(".x-button");
const oBtn = document.querySelector(".o-button");
const gameTiles = document.querySelectorAll(".game-tile");

const myGame = new TicTacToe("x");

xBtn.addEventListener('click', (e) => {
    myGame.choose("x");
});

oBtn.addEventListener('click', (e) => {
    myGame.choose("o");
});

gameTiles.forEach(button => {
    button.addEventListener('click', () => {
        myGame.placeMove(button);
    })
})