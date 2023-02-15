const outputBox = document.querySelector(".output-box");
const btn = document.querySelector(".btn");
const alphabetCheck = document.querySelector(".alphabet input[type=checkbox]");
const upperCaseCheck = document.querySelector(".uppercase input[type=checkbox]");
console.dir(upperCaseCheck.checked);

const numbers = 1234567890;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const alphabetArray = alphabet.split("");


btn.addEventListener("click", () => {
    if (alphabetCheck.checked === true) {
      const alphabetVar = alphabetGenerator(alphabetArray.slice(0,10));
    outputBox.innerHTML = alphabetVar;
  }else {
    const randomValue = randomFunction();
    outputBox.innerHTML = randomValue;
  }
});

const randomFunction = () => {
  return String(Math.floor(Math.random() * numbers));
};

const alphabetGenerator = (array) => {
  let currentIndex = array.length;
  let randomIndex;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array.join("");
};
