let boxes = document.querySelectorAll(".box");  // select all boxes
let reset = document.querySelector("#reset");  // select reset button
let newGame = document.querySelector('#new-btn'); //select new game button
let msgContainer = document.querySelector('.msgContainer'); //select msg container
let msg = document.querySelector('#msg'); //select msg para
let turnO = true;  // true = O's turn, false = X's turn

const winPatterns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];  // all possible winning combinations

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerHTML = "O";
            box.style.color = "red";
            turnO = false;
        } else {
            box.innerHTML = "X";
            box.style.color = "blue";
            turnO = true;
        }
        box.disabled = true; //after the turn button disabled

        checkWinner();
    })
})

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const checkWinner = () => {
    for (let pattern of winPatterns) {

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                showWinner(pos1Val);
            }
        }
    }
}

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);