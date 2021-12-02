const bridge = document.querySelector('#bridge')
const start = document.querySelector('#start')
const end = document.querySelector('#end')

const character = document.createElement("img")
character.setAttribute("src", 'img/green.png')
character.classList.add("character")

start.appendChild(character)

function createBoard(gridsNum) {
    for (i = 1; i < gridsNum; i++) {
        let gridDiv = document.createElement("div")
        gridDiv.id = i;
        gridDiv.classList.add("grid")
        bridge.append(gridDiv)
    };
};
createBoard(13)


let tilesArr = [...bridge.childNodes]
// tilesArr[0].appendChild(character)

// let idsToNum = tilesArr.map((item) => parseInt(item.id))

console.log(idsToNum)
// console.log(parseInt(tilesArr[0].id))

