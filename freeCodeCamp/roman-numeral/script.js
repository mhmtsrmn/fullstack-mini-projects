const body = document.querySelector('body');
const input = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const outputDiv = document.getElementById('output');

const conversionObj = [
  { roman: 'M', arabic: 1000 },
  { roman: 'CM', arabic: 900 },
  { roman: 'D', arabic: 500 },
  { roman: 'CD', arabic: 400 },
  { roman: 'C', arabic: 100 },
  { roman: 'XC', arabic: 90 },
  { roman: 'L', arabic: 50 },
  { roman: 'XL', arabic: 40 },
  { roman: 'X', arabic: 10 },
  { roman: 'IX', arabic: 9 },
  { roman: 'V', arabic: 5 },
  { roman: 'IV', arabic: 4 },
  { roman: 'I', arabic: 1 },
]


let N = 0;
const converter = (objArr, num) => {
  const obj = objArr[N];
  N++;
  return {
    quotient: obj.arabic,
    divisor: Math.floor(num / obj.arabic),
    roman: obj.roman
  };
}

const arabicToRoman = (arabicNum) => {
  const { quotient, divisor, roman } = converter(conversionObj, arabicNum);
  console.log(roman, N);
  if (arabicNum < 4) {
    return 'I'.repeat(arabicNum);
  }
  return roman.repeat(divisor) + arabicToRoman(arabicNum - quotient * divisor);
};


convertBtn.addEventListener('click', () => {
  const valueInt = parseInt(input.value);
  if (!input.value) {
    outputDiv.textContent = "Please enter a valid number";
    outputDiv.style.display = 'block';
  } else if (valueInt < 1) {
    outputDiv.textContent = "Please enter a number greater than or equal to 1";
    outputDiv.style.display = 'block';
  } else if (valueInt >= 4000) {
    outputDiv.textContent = "Please enter a number less than or equal to 3999";
    outputDiv.style.display = 'block';
  } else {
    outputDiv.textContent = `${arabicToRoman(valueInt)}`;
    outputDiv.style.backgroundColor = '#999';
    outputDiv.style.color = 'black';
    outputDiv.style.border = '2px solid yellow';
    outputDiv.style.display = 'block';
  }
  N = 0;
});


const reset = (e) => {
  outputDiv.style.display = 'none';
  outputDiv.style.backgroundColor = '#ee9069';
  outputDiv.style.color = '#D2042D';
  outputDiv.style.border = '2px solid #D2042D';
  N = 0;
};

input.addEventListener('click', reset);
