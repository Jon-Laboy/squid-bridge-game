const start = document.querySelector("#start");
const end = document.querySelector("#end");
const deadModal = document.querySelector("#deadWrapper")
const bridge = document.querySelector("#bridge");


//Create-Bridge
const createBridge = (gridsNum) => {
  let gridDiv;
  for (i = 1; i < gridsNum; i++) {
    gridDiv = document.createElement("div");
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
  deadModal.style.display = "none";
  window.location.reload()
};

//Array of "glass" squares
let tilesArr = [...bridge.childNodes];

//Chunk array into groups of 2
const sliceIntoChunks = (arr, chunkSize) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
};

const groupedArr = sliceIntoChunks(tilesArr, 2);

//set random value for odd indexed tiles
//set opposite value for even indexed tiles
  groupedArr.forEach((arr) => { 
    arr[1].innerText = Math.floor(Math.random() * 2)
    arr[1].innerText == 0 ? arr[0].innerText = 1 : arr[0].innerText = 0
  })

// console.log(groupedArr)


//Move character img to index of clicked tile
const moveCharacter = (e) => {
  console.log(Array.from(tilesArr).indexOf(e.target));
  const tileIndex = Array.from(tilesArr).indexOf(e.target);
  //if on zero value tile player loses 
  if(tilesArr[tileIndex].innerText == 0) {
    deadModal.style.visibility = 'visible' 
    console.log('lose')
  }
  tilesArr[tileIndex].appendChild(character);

  //if odd index tile (on right side of bridge)
  if (tileIndex % 2) {
    tilesArr[tileIndex - 1].style.pointerEvents = "none";
    tilesArr[tileIndex + 1].style.pointerEvents = "none";
    tilesArr[tileIndex + 2].style.pointerEvents = "none";
  }
  //if even index tile (on left side of bridge)
  if (tileIndex % 2 == 0) {
    tilesArr[tileIndex + 1].style.pointerEvents = "none";
    tilesArr[tileIndex + 2].style.pointerEvents = "none";
    tilesArr[tileIndex + 3].style.pointerEvents = "none";
  }
};

//move character
tilesArr.forEach((tile) => {
  tile.addEventListener("click", moveCharacter);
});

//allow character to get to finish line
end.addEventListener("click", () => { 
  end.appendChild(character)
  console.log('you won!') 
});


