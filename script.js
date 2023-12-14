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

// - tracks score (wins, losses, draws of either player)

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

        // check gameTile has no children (empty)
        if (gameTile.firstChild) {
            return;
        }

        switch(this.choice) {
            case "x":
                var newTile = xTile.cloneNode();
                gameTile.append(newTile);
                // gameTile.appendChild(xTile);
                break;
            case "o":
                var newTile = oTile.cloneNode();
                gameTile.append(newTile);
                break;
            default:
                console.log("error");
                break;
        }

        // gameTile.innerText = this.choice;
        // console.log(gameTiles);
        // gameTiles.innerHTML = this.p1choice;
    }

    choose(piece) {
        this.choice = piece;
        chooseBtn.style.display = "none";
    }

    boardClear() {
        // code goes here
    }

}

const chooseBtn = document.querySelector(".choose-button");
const xBtn = document.querySelector(".x-button");
const oBtn = document.querySelector(".o-button");
const gameTiles = document.querySelectorAll(".game-tile");

const xTile = document.createElement("img");
xTile.src = "img/X.png";
const oTile = document.createElement("img");
oTile.src = "img/O.png";



const myGame = new TicTacToe("x");

xBtn.addEventListener('click', (e) => {
    myGame.choose("x");
});

oBtn.addEventListener('click', (e) => {
    myGame.choose("o");
});

gameTiles.forEach(gameTile => {
    gameTile.addEventListener('click', () => {
        myGame.placeMove(gameTile);
    })
})

