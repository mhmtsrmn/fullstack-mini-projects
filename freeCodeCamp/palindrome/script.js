const textInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const result = document.createElement('p');
resultDiv.appendChild(result);


const alphaNumArr = (str) => str.match(/[a-z0-9]/gi);


const isPalindrome = (str) => {
    const strArr = alphaNumArr(str);
    const len = strArr.length;
    if (len % 2 === 0) {
        return strArr.slice(0, len / 2).join('') === strArr.slice(len / 2,).reverse().join('');
    }
    return strArr.slice(0, (len - 1) / 2).join('') === strArr.slice((len + 1) / 2,).reverse().join('');
}


checkButton.addEventListener('click', () => {
    const text = textInput.value.toUpperCase();
    if (!text) {
        alert('Please input a value');
        return;
    }

    const isPal = isPalindrome(text);
    if (text.length === 1 || isPal) {
        result.textContent = `${text} is a palindrome`;
    } else {
        result.textContent = `${text} is not a palindrome`;
    };
})
