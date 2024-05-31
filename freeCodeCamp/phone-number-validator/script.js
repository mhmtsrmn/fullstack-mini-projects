const regex = /^[1]?[\s-]*(?:\(\d{3}\)|\d{3})[\s-]*(\d{3})[\s-]*(\d{4})$/;

const result = str => regex.test(str)
    ? `Valid US number: ${str}`
    : `Invalid US number: ${str}`;

const inputEl = document.getElementById('user-input');
const resultEl = document.getElementById('results-div');
const clearBtn = document.getElementById('clear-btn');
const checkBtn = document.getElementById('check-btn');

checkBtn.addEventListener('click', () => {
    if (!inputEl.value) {
        alert('Please provide a phone number');
        return;
    }
    resultEl.innerHTML += `<p>${result(inputEl.value)}</p>`;
});

clearBtn.addEventListener('click', () => {
    resultEl.innerHTML = null;
});


