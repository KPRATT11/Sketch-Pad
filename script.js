const grid = document.querySelector('#grid');
console.log(grid);

let gridSize = 46;
let divArray = [];
let divArrayOppacity = [];

//set up grid
function setupGrid() {
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
for (let i =0; i < (gridSize * gridSize); i++){
    divArray[i] = document.createElement('div')
    divArray[i].classList.add('grid-cell')
    divArray[i].style.padding = `${10 / gridSize}em`
    divArray[i].style.backgroundColor = `rgba(0, 0, 0, 0)`  
    divArray.draggable = false; 
    grid.appendChild(divArray[i])
    divArrayOppacity[i] = 0.1;
}
}

setupGrid();

function resetGrid() {
    for (let i =0; i < divArray.length; i++){
        divArray[i].style.backgroundColor = `rgba(0, 0, 0, 0)`;
        divArrayOppacity[i] = 0.1;
    }
}

//set drawing to activated when the mouse is down
let mouseDownToggle = false
document.body.onmousedown = function(){
    mouseDownToggle = true;
}


//deactivate drawing when the mouse is down
document.body.onmouseup = function(){
    mouseDownToggle = false;
}



//change pixels
for (let i =0; i < divArray.length; i++){
    divArray[i].addEventListener('mouseover', () => {
        if (mouseDownToggle == true) {
            divArray[i].style.backgroundColor = `rgba(0, 0, 0, ${divArrayOppacity[i]})`
            divArrayOppacity[i] += 0.1;
            console.log(divArray[i].style.opacity);  
        }

    })

}


//reset grid by calling setup grid
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click', () => {
    resetGrid();
    console.log('yes');
})
    
