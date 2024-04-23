class TicTacToe {
    constructor() {
        // current move
        this.choice;

        // also store original choices for win counters
        this.p1choice;
        this.p2choice;

        this.p1wins = 0;
        this.p2wins = 0;

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
        };
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
        };
    }

    // main control function
    playTurn(gameTile) {
        if (this.checkWin("x") === true) {
            alert("x wins!")
            if (this.p1choice === "x") {
                this.p1wins++;
                p1WinCounter.innerText = this.p1wins;
                // console.log(this.p1wins);
            }
            else {
                this.p2wins++;
                p2WinCounter.innerText = this.p2wins;
                // console.log(this.p2wins);
            }

            this.clearBoard();
        }
        else if (this.checkWin("o") === true) {
            alert("o wins!")
            if (this.p1choice === "o") {
                this.p1wins++;
                p1WinCounter.innerText = this.p1wins;
                console.log(this.p1wins);
            }
            else {
                this.p2wins++;
                p2WinCounter.innerText = this.p2wins;
                console.log(this.p2wins);
            }

            this.clearBoard();
        }
    }

    checkWin(input) {
        let boardMatrix;

        // determine x or o won
        if (input === "x") {
            boardMatrix = math.matrix(this.xBoard);
        }
        else if (input === "o") {
            boardMatrix = math.matrix(this.oBoard);
        }
        else {
            console.log("checkWin() error: bad input");
            return;
        }

        // rotates the matrix pi/4 (180) to get the other diagonal
        let rotationMatrix = math.matrix([[0,0,1],[0, 1, 0],[1, 0, 0]]);
        let rotatedBoardMatrix = math.multiply(boardMatrix,rotationMatrix);
        let secondaryDiag = math.sum(math.diag(rotatedBoardMatrix));

        // check main diag
        if (math.sum(math.diag(boardMatrix)) === 15) {
            return true;
        }
        // check other diag
        else if (secondaryDiag === 15) {
            return true;
        }
        // check col 1
        else if (math.sum(math.column(boardMatrix,0)) === 15) {
            return true;
        } 
        // check col 2
        else if (math.sum(math.column(boardMatrix,1)) === 15) {
            return true;
        } 
        // check col 3
        else if (math.sum(math.column(boardMatrix,2)) === 15) {
            return true;
        }
        // check row 1
        else if (math.sum(math.row(boardMatrix,0)) === 15) {
            return true;
        }
        // check row 2
        else if (math.sum(math.row(boardMatrix,1)) === 15) {
            return true;
        }
        // check row 3
        else if (math.sum(math.row(boardMatrix,2)) === 15) {
            return true;
        }
        else {
            return false;
        }
    }

    placeMove(gameTile) {

        // check gameTile has no children (empty)
        if (gameTile.firstChild) {
            return;
        }
        
        // clone the xTile element and append it to the gameTile, then update magic square
        switch(this.choice) {
            case "x":
                let newXTile = xTile.cloneNode();
                gameTile.append(newXTile);
                this.updateMagicSquare(gameTile.id, "x")
                break;
            case "o":
                let newOTile = oTile.cloneNode();
                gameTile.append(newOTile);
                this.updateMagicSquare(gameTile.id, "o");
                break;
            default:
                return;
        }

        this.choice = this.swapChoice(this.choice)
        this.updateCurrentChoice();
    }

    swapChoice(choice) {
        if (choice === "x") {
            return "o";
        }
        else if (choice === "o") {
            return "x";
        }
        else {
            return;
        }
    }

    updateCurrentChoice() {
        if (currentChoiceTile.firstChild) {
            currentChoiceTile.removeChild(currentChoiceTile.firstChild);
        }

        switch(this.choice) {
            case("x"):
                let newXTile = xTile.cloneNode();
                currentChoiceTile.append(newXTile);
                break;
            case("o"):
                let newOTile = oTile.cloneNode();
                currentChoiceTile.append(newOTile);
                break;
            default:
                return;
        }
    }

    choose(piece) {
        this.choice = piece;
        this.p1choice = this.choice;
        this.p2choice = this.swapChoice(this.choice)

        this.updateCurrentChoice();

        // chooseBtn.style.display = "none";
    }

    clearBoard() {
        // iterate through gameTiles, remove children if they exist
        for (let i = 0; i < gameTiles.length; i++) {
            if (gameTiles[i].firstChild) {
                gameTiles[i].removeChild(gameTiles[i].firstChild);
            }
        }

        if (currentChoiceTile.firstChild) {
            currentChoiceTile.removeChild(currentChoiceTile.firstChild);
        }

        // reset boards
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
    }



    updateMagicSquare(id, selector) {
        const i = this.boardIndices[id]; // translates id to indices of x or oBoard

        if (selector === "x") {
            this.xBoard[i[0]][i[1]] = this.magicSquareVals[id];
        }
        else if (selector === "o") {
            this.oBoard[i[0]][i[1]] = this.magicSquareVals[id];
        }
        else {
            console.log("updateMagicSquare() error");
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

const chooseBtn = document.querySelector(".choose-button");
const xBtn = document.querySelector(".x-button");
const oBtn = document.querySelector(".o-button");
const newGameBtn = document.querySelector(".new-game-button")
const clearCountersBtn = document.querySelector(".clear-win-counters");
const gameTiles = document.querySelectorAll(".game-tile");
const currentChoiceTile = document.querySelector(".game-tile-head");

const p1WinCounter = document.getElementById('p1-win-counter');
const p2WinCounter = document.getElementById('p2-win-counter');

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

newGameBtn.addEventListener('click', (e) => {
    myGame.clearBoard();
});

clearCountersBtn.addEventListener('click', (e) => {
    myGame.p1wins = 0;
    myGame.p2wins = 0;
    p1WinCounter.innerText = myGame.p1wins;
    p2WinCounter.innerText = myGame.p2wins;

})

gameTiles.forEach(gameTile => {
    gameTile.addEventListener('click', () => {
        myGame.placeMove(gameTile);
        myGame.playTurn(gameTile);
    })
});