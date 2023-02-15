const outputBox = document.querySelector(".output-box");
const btn = document.querySelector(".btn");
const alphabetCheck = document.querySelector(".alphabet input[type=checkbox]");
const numberCheck = document.querySelector(".numbers input[type=checkbox]");
const specialCharCheck = document.querySelector(".special-char input[type=checkbox]");
const upperCaseCheck = document.querySelector(".uppercase input[type=checkbox]");
const lowerCaseCheck = document.querySelector(".lowerCase input[type=checkbox]");
const passwordLength = document.querySelector('.length input[type=number]')
const copyToClipBoard = document.querySelector('.copy-icon')

const numbers = 1234567890;
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const allChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|:;<,>.?/";
const specialChar = "~`! @#$%^&*()_-+={[}]|\:;'<,>.?/"

btn.addEventListener("click", () => {
    if (alphabetCheck.checked === true) {
        const allCharLength = passwordLength.value
        outputBox.innerHTML = generateAllChar(alphabet, allCharLength);

    } else if (numberCheck.checked === true) {
        const passLength = passwordLength.value
        outputBox.innerHTML = numberPassword(passLength);
    }
    else if (specialCharCheck.checked === true) {
        const specialCharLength = passwordLength.value;
        outputBox.innerHTML = generateSpecialCharactersOnly(specialChar, specialCharLength);
    } else {
        outputBox.innerHTML = generateAllChar(allChar, passwordLength.value);
        if (passwordLength.value > 15) {
            passwordLength.value = 10;
            return;
        }
    }
});

const numberPassword = () => Math.floor(Math.random() * numbers);

const generateAllChar = (array, length) => {

    let allCharResult = "";
    const charactersLength = array.length;

    for (let i = 0; i < length; i++) {
        allCharResult += array.charAt(Math.floor(Math.random() * charactersLength));
    }
    if (upperCaseCheck.checked == true) {
        return allCharResult.toUpperCase();
    } else if (upperCaseCheck.checked == false) {
        return allCharResult.toLowerCase();
    } else if (lowerCaseCheck.checked == true) {
        return allCharResult.toLowerCase();
    } else {
        return allCharResult.toLowerCase();
    }
    return allCharResult;
}

const generateSpecialCharactersOnly = (array, length) => {
    let specialCharResult = ""
    const specialCharLength = array.length;

    for (let i = 0; i < length; i++) {
        specialCharResult += array.charAt(Math.floor(Math.random() * specialCharLength))
    }

    return specialCharResult;
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