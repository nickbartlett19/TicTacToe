class TicTacToe {
    constructor(choice = "default") {
        this.p1choice = choice;
    }

    newGame() {

    }

    winCheck() {

    }

    placeMove(gameTile) {
        gameTile.innerText = this.p1choice;
        // console.log(gameTiles);
        // gameTiles.innerHTML = this.p1choice;
    }

    choose(piece = "default") {
        this.p1Choice = piece;
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



// console.log(myGame.p1choice);