const start = document.querySelector("#start");
const end = document.querySelector("#end");
const deadModal = document.querySelector("#deadWrapper");
const winModal = document.querySelector("#winWrapper");
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
  window.location.reload();
};

//Array of "glass" squares
let tilesArr = [...bridge.childNodes];

tilesArr[10].classList.replace("grid", "grid2");
tilesArr[11].classList.replace("grid", "grid2");

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
  arr[1].innerText = Math.floor(Math.random() * 2);
  arr[1].innerText == 0 ? (arr[0].innerText = 1) : (arr[0].innerText = 0);
});

//Move character img to index of clicked tile
const moveCharacter = (e) => {
  let tileIndex = Array.from(tilesArr).indexOf(e.target);
  console.log(tileIndex);

  tilesArr[tileIndex].appendChild(character);

  //if on zero value tile player loses
  if (tilesArr[tileIndex].innerText == 0) {
    deadModal.style.visibility = "visible";
  }

  //open next row of tiles to movement
  if (tileIndex == 10 || tileIndex == 11) {
    tilesArr[8].classList.replace("grid", "grid2");
    tilesArr[9].classList.replace("grid", "grid2");
    console.log("first row");
    return;
  }

  if (tileIndex == 8 || tileIndex == 9) {
    tilesArr[7].classList.replace("grid", "grid2");
    tilesArr[6].classList.replace("grid", "grid2");
    console.log("second row");
    return;
  }

  if (tileIndex == 6 || tileIndex == 7) {
    tilesArr[5].classList.replace("grid", "grid2");
    tilesArr[4].classList.replace("grid", "grid2");
    console.log("third row");
    return;
  }

  if (tileIndex == 4 || tileIndex == 5) {
    tilesArr[3].classList.replace("grid", "grid2");
    tilesArr[2].classList.replace("grid", "grid2");
    console.log("fourth row");
    return;
  }

  if (tileIndex == 2 || tileIndex == 3) {
    tilesArr[1].classList.replace("grid", "grid2");
    tilesArr[0].classList.replace("grid", "grid2");
    console.log("fifth row");
    return;
  }
  
  if (tileIndex == 0 || tileIndex == 1) {
    //allow character to get to finish line
    end.addEventListener("click", () => {
      end.appendChild(character);
      winModal.style.visibility = "visible";
    });
    console.log("sixth row");
    return;
  }
};

//move character
tilesArr.forEach((tile) => {
  tile.addEventListener("click", moveCharacter);
});

