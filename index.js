const start = document.querySelector("#start");
const end = document.querySelector("#end");
const bridge = document.querySelector("#bridge");

//Create-Bridge
const createBridge = (gridsNum) => {
  for (i = 1; i < gridsNum; i++) {
    let gridDiv = document.createElement("div");
    gridDiv.id = i;
    gridDiv.classList.add("grid");
    bridge.append(gridDiv);
  }
};

createBridge(13);

//Add Character
const character = document.createElement("img");
character.setAttribute("src", "img/green.png");
character.classList.add("character");

start.appendChild(character);

//play again btn click
const goAgain = () => {
  document.getElementById("deadModal").style.display = "none";
}

//Array of "glass" squares
let tilesArr = [...bridge.childNodes];

// console.log(tilesArr[11].value = Math.floor(Math.random() * 2));

//Move character img to index of clicked tile
const moveCharacter = (e) => {
  console.log(Array.from(tilesArr).indexOf(e.target));
  const tileIndex = Array.from(tilesArr).indexOf(e.target);
  tilesArr[tileIndex].appendChild(character);
  // if(tileIndex % 2) { 
  //   tilesArr[tileIndex - 1] DISABLE
  // }
 
};

//move character
tilesArr.forEach((tile) => {
  tile.addEventListener("click", moveCharacter);
});

//allow character to get to finish line
end.addEventListener("click", () => end.appendChild(character));

//run Math.random on even or odd indexes in array


