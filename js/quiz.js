import birdCard from "../js/bird.js";

const startText = document.querySelector(".startText");
const opt = document.querySelectorAll(".nameBird");
const gog = document.querySelector(".selectedOption");
const img = document.querySelector(".imgBird");
const text = document.querySelector(".textBird");
const name = document.querySelector(".Named");
const mainBird = document.querySelector(".mainBird");
const optionsBird = document.querySelectorAll(".optionsBird");
const mainName = document.querySelector(".mainName");
const dwells = document.querySelector(".selectedDwells");
const aud = document.getElementById("aud");
const prav = document.querySelector(".prav");
const neprav = document.querySelector(".neprav");

var i = 0;

for (let i = 0; i < 6; i++) {
  opt[i].textContent = birdCard[0][i].name;
  if (i === 6) {
    i = 0;
  }
}

// const card = birdCard[i];

function random(min, max) {
  // var nu = Math.random() * (6 - 0) + 0;
  min = Math.ceil(0);
  max = Math.floor(6);
  var nu = Math.floor(Math.random() * (6 - 0)) + 0;
  return nu;
}

var randomNum = random();

console.log(randomNum);

document.addEventListener("click", function (el) {
  if (
    el.target.id === "0" ||
    el.target.id === "1" ||
    el.target.id === "2" ||
    el.target.id === "3" ||
    el.target.id === "4" ||
    el.target.id === "5"
  ) {
    gog.style.display = "block";
    startText.style.display = "none";
    img.src = birdCard[i][el.target.id].image;
    text.textContent = birdCard[i][el.target.id].description;
    name.textContent = birdCard[i][el.target.id].name;
    dwells.textContent = birdCard[i][el.target.id].species;
    aud.src = birdCard[i][el.target.id].audio;
  }
});

document.addEventListener("click", function (eel) {
  if (randomNum === Number(eel.target.id)) {
    mainBird.src = birdCard[i][randomNum].image;
    mainName.textContent = birdCard[i][randomNum].name;
    optionsBird[randomNum].style.color = "green";
    document.querySelector(".button").style.backgroundColor = "green";
    prav.play();
  }
  return console.log(Number(eel.target.id));
});

document.addEventListener("click", function (eel) {
  if (randomNum !== Number(eel.target.id)) {
    optionsBird[eel.target.id].style.color = "red";
    neprav.play();
  }
  return console.log(Number(eel.target.id));
});
