let cells = document.querySelectorAll('.row > div');

console.log(cells);

for(let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', cellClicked);
}

clickcount = 0
//console.log(clickcount);

function cellClicked (e) {
    if(clickcount === 0) {
        e.target.textContent = 'X';
    } else if (clickcount === 8) {
        e.target.textContent = 'X';
        document.getElementById("results").innerHTML="Draw!!!"
    } else if (clickcount % 2 !== 0 && clickcount < 9) {
        e.target.textContent = 'O';
    } else if (clickcount % 2 === 0 && clickcount < 9) {
        e.target.textContent = 'X';
    } else {
        document.location.reload()
    }
    clickcount = clickcount + 1
    if(cells[0].textContent === 'X' && cells[1].textContent === 'X' && cells[2].textContent === 'X') {
        // console.log("Yes!!!!")
        // console.log("X's Win 1")
        document.getElementById("results").innerHTML="X's Win!!!"
        clickcount = 10
    } else if(cells[3].textContent === 'X' && cells[4].textContent === 'X' && cells[5].textContent === 'X') {
        // console.log("Yes!!!!")
        // console.log("X's Win 2")
        document.getElementById("results").innerHTML="X's Win!!!"
        clickcount = 10
    } else if(cells[6].textContent === 'X' && cells[7].textContent === 'X' && cells[8].textContent === 'X') {
        // console.log("Yes!!!!")
        // console.log("X's Win 3")
        document.getElementById("results").innerHTML="X's Win!!!"
        clickcount = 10
    } else if(cells[0].textContent === 'X' && cells[4].textContent === 'X' && cells[8].textContent === 'X') {
        // console.log("Yes!!!!")
        // console.log("X's Win 4")
        document.getElementById("results").innerHTML="X's Win!!!"
        clickcount = 10
    } else if(cells[6].textContent === 'X' && cells[4].textContent === 'X' && cells[2].textContent === 'X') {
        // console.log("Yes!!!!")
        // console.log("X's Win 5")
        document.getElementById("results").innerHTML="X's Win!!!"
        clickcount = 10
    } else if(cells[0].textContent === 'X' && cells[3].textContent === 'X' && cells[6].textContent === 'X') {
        // console.log("Yes!!!!")
        // console.log("X's Win 6")
        document.getElementById("results").innerHTML="X's Win!!!"
        clickcount = 10
    } else if(cells[1].textContent === 'X' && cells[4].textContent === 'X' && cells[7].textContent === 'X') {
        // console.log("Yes!!!!")
        // console.log("X's Win 7")
        document.getElementById("results").innerHTML="X's Win!!!"
        clickcount = 10
    } else if(cells[2].textContent === 'X' && cells[5].textContent === 'X' && cells[8].textContent === 'X') {
        // console.log("Yes!!!!")
        // console.log("X's Win 8")
        document.getElementById("results").innerHTML="X's Win!!!"
        clickcount = 10
    }
    if(cells[0].textContent === 'O' && cells[1].textContent === 'O' && cells[2].textContent === 'O') {
        // console.log("Yes!!!!")
        // console.log("O's Win 1")
        document.getElementById("results").innerHTML="O's Win!!!"
        clickcount = 10
    } else if(cells[3].textContent === 'O' && cells[4].textContent === 'O' && cells[5].textContent === 'O') {
        // console.log("Yes!!!!")
        // console.log("O's Win 2")
        document.getElementById("results").innerHTML="O's Win!!!"
        clickcount = 10
    } else if(cells[6].textContent === 'O' && cells[7].textContent === 'O' && cells[8].textContent === 'O') {
        // console.log("Yes!!!!")
        // console.log("O's Win 3")
        document.getElementById("results").innerHTML="O's Win!!!"
        clickcount = 10
    } else if(cells[0].textContent === 'O' && cells[4].textContent === 'O' && cells[8].textContent === 'O') {
        // console.log("Yes!!!!")
        // console.log("O's Win 4")
        document.getElementById("results").innerHTML="O's Win!!!"
        clickcount = 10
    } else if(cells[6].textContent === 'O' && cells[4].textContent === 'O' && cells[2].textContent === 'O') {
        // console.log("Yes!!!!")
        // console.log("O's Win 5")
        document.getElementById("results").innerHTML="O's Win!!!"
        clickcount = 10
    } else if(cells[0].textContent === 'O' && cells[3].textContent === 'O' && cells[6].textContent === 'O') {
        // console.log("Yes!!!!")
        // console.log("O's Win 6")
        document.getElementById("results").innerHTML="O's Win!!!"
        clickcount = 10
    } else if(cells[1].textContent === 'O' && cells[4].textContent === 'O' && cells[7].textContent === 'O') {
        // console.log("Yes!!!!")
        // console.log("O's Win 7")
        document.getElementById("results").innerHTML="O's Win!!!"
        clickcount = 10
    } else if(cells[2].textContent === 'O' && cells[5].textContent === 'O' && cells[8].textContent === 'O') {
        // console.log("Yes!!!!")
        // console.log("O's Win 8")
        document.getElementById("results").innerHTML="O's Win!!!"
        clickcount = 10
    } 
}

