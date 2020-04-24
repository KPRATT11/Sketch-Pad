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
    grid.appendChild(divArray[i])
    divArrayOppacity[i] = 0.1;
}
}

setupGrid();
let mouseDownToggle = false
document.body.onclick = function(){
    mouseDownToggle = !mouseDownToggle;
}


for (let i =0; divArray.length; i++){
    divArray[i].addEventListener('mouseover', () => {
        if (mouseDownToggle == true) {
            divArray[i].style.backgroundColor = `rgba(0, 0, 0, ${divArrayOppacity[i]})`
            divArrayOppacity[i] += 0.1;
            console.log(divArray[i].style.opacity);  
        }

    })

}



    
