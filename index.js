const start = document.querySelector('#start')
const end = document.querySelector('#end')
const bridge = document.querySelector('#bridge')

//Create-Bridge
const createBridge = (gridsNum) => {
    for (i = 1; i < gridsNum; i++) {
        let gridDiv = document.createElement("div")
        gridDiv.id = i;
        gridDiv.classList.add("grid")
        bridge.append(gridDiv)
    };
};

createBridge(13)

//Add Character 
const character = document.createElement("img")
character.setAttribute("src", 'img/green.png')
character.classList.add("character")

start.appendChild(character)


//play again btn click
function goAgain() { 
    document.getElementById("deadModal").style.display = 'none'
}

//Array of "glass" squares
let tilesArr = [...bridge.childNodes]

console.log(tilesArr)

const checkIndex = (e) => { 
    console.log(Array.from(tilesArr).indexOf(e.target))
}

tilesArr.forEach((tile) => {
    tile.addEventListener('click', checkIndex);
  })
  

// tilesArr[8].appendChild(character)

// let idsToNum = tilesArr.map((item) => parseInt(item.id))

console.log(idsToNum)
// console.log(parseInt(tilesArr[0].id))

