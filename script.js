const chooseBtn = document.querySelector(".choose-button");
const xBtn = document.querySelector(".x-button");
const oBtn = document.querySelector(".o-button");


var p1Choice;

xBtn.addEventListener('click', (e) => {
    p1Choice = "x";
    chooseBtn.style.display = "none";
    console.log(p1Choice);
});

oBtn.addEventListener('click', (e) => {
    p1Choice = "o";
    chooseBtn.style.display = "none";
    console.log(p1Choice);
});



