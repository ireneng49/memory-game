const gameContainer = document.getElementById("game");

const COLORS = [
    "red",
    "blue",
    "green",
    "orange",
    "purple",
    "red",
    "blue",
    "green",
    "orange",
    "purple"
];

let tileA = null;
let tileB = null;
let tileCompleted = 0;


function createDivForColors(colorArray) {
    for (let color of colorArray) {
        const newDiv = document.createElement("div");
        newDiv.classList.add(color);
        newDiv.classList.add("cover");
        newDiv.setAttribute("name", color);
        newDiv.addEventListener("click", handleTileClick);
        gameContainer.append(newDiv);
    }
}

function handleTileClick(event) {
    const target = event.target;

    if (!target.classList.contains("cover")) {
        return;
    }

    target.classList.remove("cover");
    
    
    if (tileA === null) {
        tileA = target; 
    } else {
        tileB = target;
    }

    if (tileA  && tileB ) {
        if (tileA.getAttribute("name") === tileB.getAttribute("name")) {
            tileCompleted += 2;
            tileA = null;
            tileB = null;
            setTimeout(function() {
                if (tileCompleted === COLORS.length) {
                    alert("Game Over");
                }
            }, 500);
            
        } else {
            setTimeout(function() {
                tileA.classList.add("cover");
                tileB.classList.add("cover");
                tileA = null;
                tileB = null;
            }, 500);
        }
    
    }

}

function handleButtonClick(){
    tileA = null;
    tileB = null;
    tileCompleted = 0;
    gameContainer.innerHTML = "";
    createDivForColors(shuffle(COLORS));
}

function shuffle(array) {
    let counter =array.length;

    while(counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }
    return array;
}

createDivForColors(shuffle(COLORS));
const reset = document.getElementById("reset")
reset.addEventListener("click", handleButtonClick);
