const outputBox = document.querySelector(".output-box");
const btn = document.querySelector(".btn");
const alphabetCheck = document.querySelector(".alphabet input[type=checkbox]");
const numberCheck = document.querySelector(".numbers input[type=checkbox]");
const upperCaseCheck = document.querySelector(".uppercase input[type=checkbox]");
const lowerCaseCheck = document.querySelector(".lowerCase input[type=checkbox]");
const passwordLength = document.querySelector('.length input[type=number]')
const copyToClipBoard = document.querySelector('.copy-icon')

const numbers = 1234567890;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|:;<,>.?/";

btn.addEventListener("click", () => {
    if (alphabetCheck.checked === true) {
        outputBox.innerHTML = generateString(alphabet, 10);

    } else if (numberCheck.checked === true) {
        const passwordValue = passwordLength.value
        outputBox.innerHTML = numberPassword(passwordValue);
    }
    else {
        outputBox.innerHTML = generateString(allChar, passwordLength.value);
        if (passwordLength.value > 15) {
            passwordLength.value = 10;
            return;
        }
    }
  });

const numberPassword = () => Math.floor(Math.random() * numbers);

const generateString = (array, length) => {
    let result = " ";
    const charactersLength = array.length;
    for (let i = 0; i < length; i++) {
        result += array.charAt(Math.floor(Math.random() * charactersLength));
    }
    if (upperCaseCheck.checked == true) {
        return result.toUpperCase();
    } else if (upperCaseCheck.checked == false) {
        return result.toLowerCase();
    } else if (lowerCaseCheck.checked == true) {
        return result.toLowerCase();
    } else {
        return result.toLowerCase();
    }
    return result;
}

const copyContent = async () => {
    const willCopy = outputBox.textContent;
    try {
        await navigator.clipboard.writeText(willCopy);
        console.log(`you copied ${willCopy}`);
    } catch (err) {
        console.error('Failed to copy: ', err);
    }
}

copyToClipBoard.addEventListener('click', () => {
    copyContent();
    console.log('text copied');
})