//First example : Sum Numbers

const calcuateSumButtonElement = document.querySelector('#calculator button');

function calculateSum() {
    const userNumberElement = document.getElementById('user-number');
    const enterdNumber = userNumberElement.value;

    let sumUptToNumber = 0;

    for (let i = 0; i <= enterdNumber; i++) {
        sumUptToNumber = sumUptToNumber + i;
    }

    const outputResultElement = document.getElementById('calculated-sum');

    outputResultElement.textContent = sumUptToNumber;
    outputResultElement.style.display = 'block';
}

calcuateSumButtonElement.addEventListener('click', calculateSum);

// Highlight Links

const HighlightLinksButtonElement = document.querySelector('#highlight-links button');

function HighlightLinks() {
    const anchorElements = document.querySelectorAll('#highlight-links a');

    for (const anchorElemnet of anchorElements) {
        anchorElemnet.classList.add('highlight');
    }
}

HighlightLinksButtonElement.addEventListener('click', HighlightLinks);


// Display user data
const dummyUserData = {
    firstName: '현우',
    lastName: '장',
    age: 32
};
const displayUserDataButtonElement = document.querySelector('#user-data button');

function displayUserData() {
    const outputDataElement = document.getElementById('output-user-data');

    outputDataElement.innerHTML = '';

    for (const key in dummyUserData) {
        const newUserDataListItemElement = document.createElement('li');
        const outputText = key.toUpperCase() + ': ' + dummyUserData[key];
        newUserDataListItemElement.textContent = outputText;
        outputDataElement.append(newUserDataListItemElement);
    }

}
displayUserDataButtonElement.addEventListener('click', displayUserData);

//Statistics / Roll the Dice

const rollDiceButtonElement = document.querySelector('#statistics button');

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;    // math.floor() : 5.64 =>5
};

function deriveNumberOfDiceRolls() {
    const targetNumberInputElement = document.getElementById('user-target-number');
    const diceRollsListElement = document.getElementById('dice-rolls');
    const enterdNumber = targetNumberInputElement.value;
    diceRollsListElement.innerHTML = '';

    let hasRolledTargetNumber = false;
    let numberOfRolls = 0;

    while (!hasRolledTargetNumber) {
        const rolledNumber = rollDice();
        // if (rolledNumber == enterdNumber) {
        //     hasRolledTargetNumber = true;
        // }
        numberOfRolls++;
        const newRollListItemElement = document.createElement('li');
        const outputText = 'Roll' + numberOfRolls + ': ' + rolledNumber;
        newRollListItemElement.textContent = outputText;
        diceRollsListElement.append(newRollListItemElement);
        hasRolledTargetNumber = rolledNumber == enterdNumber;
    }

    const outputTotalRollsElement = document.getElementById('output-total-rolls');
    const outputTargetNumberElement = document.getElementById('output-target-number');

    outputTargetNumberElement.textContent = enterdNumber;
    outputTotalRollsElement.textContent = numberOfRolls;
};

rollDiceButtonElement.addEventListener('click', deriveNumberOfDiceRolls);