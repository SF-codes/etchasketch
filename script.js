const gridContainer = document.querySelector(".grid-container");
const userInput = document.getElementById("quantity");
const reset = document.querySelector(".reset");
const squares = document.querySelector("div");
const limited = document.querySelector(".limit");

const errMessage = (msg) =>
  (document.querySelector(".message").textContent = msg);

createNewGrid = () => {
  for (let i = 0; i < 256; i++) {
    const newGridDiv = document.createElement("div");
    newGridDiv.classList.add("squares");
    gridContainer.appendChild(newGridDiv);
  }
};

updateGrid = () => {
  if (limited.value == null || limited.value > 130 || limited.value < 4) {
    errMessage(
      `You number ${limited.value} is over 130 or under 4! Please try again!`
    );
    limited.value = "";
    return;
  } else {
    errMessage("Input a number between 4 and 130");
    gridContainer.innerHTML = "";
    gridContainer.style.setProperty(
      "grid-template-columns",
      `repeat(${userInput.value}, 2fr)`
    );
    gridContainer.style.setProperty(
      "grid-template-rows",
      `repeat(${userInput.value}, 2fr)`
    );

    for (let i = 0; i < userInput.value * userInput.value; i++) {
      const updatedDiv = document.createElement("updatedDiv");
      updatedDiv.classList.add("squares");
      gridContainer.appendChild(updatedDiv);
    }
  }
};

squares.addEventListener("mouseover", function (e) {
  e.target.classList.replace("squares", "color");
});

userInput.addEventListener("change", updateGrid);

reset.addEventListener("click", function () {
  gridContainer.innerHTML = "";
  userInput.value = "";
  errMessage("Input a number between 4 and 130");
  gridContainer.style.setProperty("grid-template-columns", "repeat(16, 2fr)");
  gridContainer.style.setProperty("grid-template-rows", "repeat(16, 2fr)");
  createNewGrid();
});

createNewGrid();
