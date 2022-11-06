const varLow = "abcdefghijklmnopqrstuvwxyz";
const varUp = varLow.toUpperCase();
const varNum = "0123456789";
const varChar = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

const char = document.getElementById("char");
const num = document.getElementById("num");
const low = document.getElementById("low");
const up = document.getElementById("up");

const charLab = document.getElementById("charlab");
const numLab = document.getElementById("numlab");
const lowLab = document.getElementById("lowlab");
const upLab = document.getElementById("uplab");

const thePass = document.getElementById("thepass");
const passLenght = document.getElementById("pass-lenght");

const copied = document.getElementById("span");

const unselect = document.getSelection();

charLab.addEventListener("click", () => {
  charLab.classList.toggle("label-down");
});
numLab.addEventListener("click", () => {
  numLab.classList.toggle("label-down");
});
lowLab.addEventListener("click", () => {
  lowLab.classList.toggle("label-down");
});
upLab.addEventListener("click", () => {
  upLab.classList.toggle("label-down");
});

document.getElementById("go").addEventListener("click", () => {
  console.log("hello");
  let selection = "";
  thePass.value = "";
  if (
    char.checked === false &&
    num.checked === false &&
    low.checked === false &&
    up.checked === false
  ) {
    alert("Vous devez sélectionner au moins une option de caractères !");
    return;
  }
  if (char.checked) {
    selection += varChar;
  }
  if (num.checked) {
    selection += varNum;
  }
  if (low.checked) {
    selection += varLow;
  }
  if (up.checked) {
    selection += varUp;
  }
  for (i = 0; i < passLenght.value; i++) {
    thePass.value += selection[Math.floor(Math.random() * selection.length)];
  }
  thePass.select();
  document.execCommand("copy");
  copied.classList.toggle("spanpan");
  unselect.removeAllRanges();
  setTimeout(() => {
    copied.classList.toggle("spanpan");
  }, 2000);
});
