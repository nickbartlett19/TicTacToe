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


// console.log(math.sqrt(4));

class TicTacToe {
    constructor() {
        this.choice;

        this.xBoard = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ];

        this.oBoard = [
            [0,0,0],
            [0,0,0],
            [0,0,0]
        ];

        this.magicSquareVals = {
            1: 8,
            2: 3,
            3: 4,
            4: 1,
            5: 5,
            6: 9,
            7: 6,
            8: 7,
            9: 2
        }

        this.boardIndices = {
            1: [0,0],
            2: [1,0],
            3: [2,0],
            4: [0,1],
            5: [1,1],
            6: [2,1],
            7: [0,2],
            8: [1,2],
            9: [2,2]
        }
        
        // console.log(typeof(this.magicSquareVals[1]))

        // for (let i = 1; i < 10; i++) {
        //     console.log(this.magicSquareVals[i]);
        // }
    }

    newGame() {
        // code goes here
    }

    checkWin() {
        // check if x wins
        let boardMatrix = math.matrix(this.xBoard);
        let rotationMatrix = math.matrix([[0,0,1],[0, 1, 0],[1, 0, 0]]);
        let rotatedBoardMatrix = math.multiply(boardMatrix,rotationMatrix);

        // console.log(rotationMatrix);
        // console.log(boardMatrix);
        console.log(rotatedBoardMatrix);
        let secondaryDiag = math.sum(math.diag(rotatedBoardMatrix));

        // check main diag
        if (math.sum(math.diag(boardMatrix)) === 15) {
            console.log("whats the dealoio?")
            return true;
        }
        // check other diag
        else if (secondaryDiag === 15) {
            console.log("whats the dealio?")
            return true;
        }

        // check col 1
        // check col 2
        // check col 3

        // check row 1
        // check row 2
        // check row 3

        else {
            return false;
        }
        
    }

    swapChoice() {
        if (this.choice === "x") {
            this.choice = "o"
        }
        else if (this.choice === "o") {
            this.choice = "x"
        }
        else {
            return;
        }
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
                // console.log(gameTile.id);
                this.updateMagicSquare(gameTile.id, "x")
                this.printXBoard();
                console.log("checkwin:", this.checkWin());
                break;
            case "o":
                var newTile = oTile.cloneNode();
                gameTile.append(newTile);
                // console.log(gameTile.id);
                this.updateMagicSquare(gameTile.id, "o")
                this.printOBoard();
                break;
            default:
                // console.log("error");
                // console.log(gameTile.id)
                return;
        }

        this.swapChoice();

    }

    choose(piece) {
        this.choice = piece;
        chooseBtn.style.display = "none";
    }

    boardClear() {
        // code goes here
    }

    updateMagicSquare(id, selector) {
        const i = this.boardIndices[id]; // index of xBoardArray

        if (selector === "x") {
            this.xBoard[i[0]][i[1]] = this.magicSquareVals[id];
        }
        else if (selector === "o") {
            this.oBoard[i[0]][i[1]] = this.magicSquareVals[id];
        }
        else {
            return;
        }

    }


    // combine later
    printXBoard() {
        console.log("----")
        console.log("x")
        for (let i = 0; i < 3; i++) {
            console.log(this.xBoard[i]);
        }
        console.log("----")
    }

    printOBoard() {
        console.log("----")
        console.log("o")
        for (let i = 0; i < 3; i++) {
            console.log(this.oBoard[i]);
        }
        console.log("----")
    }

}

// var xBoard = math.matrix([
//     [1,0,0],
//     [0,0,0],
//     [0,0,0]
// ]);

// console.log(typeof(xBoard)); 
// console.log(xBoard[0,0]);

// var xBoard = [
//     [1,2,3],
//     [0,0,0],
//     [0,0,0]
// ];

// console.log(typeof(xBoard)); 
// console.log(xBoard[0][0]);
// console.log(xBoard[1][0]);
// console.log(xBoard[2][0]);



const chooseBtn = document.querySelector(".choose-button");
const xBtn = document.querySelector(".x-button");
const oBtn = document.querySelector(".o-button");
const gameTiles = document.querySelectorAll(".game-tile");

const xTile = document.createElement("img");
xTile.src = "img/X.png";
const oTile = document.createElement("img");
oTile.src = "img/O.png";

const myGame = new TicTacToe();

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