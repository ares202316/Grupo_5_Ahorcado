const wordE1 = document.getElementById('word');
const wrongLettersE1 = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-button2');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');
const figureParts = document.querySelectorAll(".figure-part");

const selectionPopup = document.getElementById('selection-popup');
const selectionButtons = document.querySelectorAll('.selection-button');
const randomCategoryBtn = document.getElementById('random-category');
const indexButton = document.getElementById('index-button');
const timerElement = document.getElementById('timer');

let selectedWord = '';
const correctLetters = [];
const wrongLetters = [];
let playable = true;
let timerInterval;
let timeRemaining = 60; // Tiempo en segundos

// Words by category
const categories = {
    animal: ['tiger', 'elephant', 'giraffe', 'zebra'],
    deporte: ['soccer', 'basketball', 'tennis', 'cricket'],
    pais: ['france', 'spain', 'italy', 'brazil'],
    profesion: ['doctor', 'engineer', 'artist', 'chef']
};

// Randomly selects a word from a given category
function getRandomWord(category) {
    const words = categories[category];
    return words[Math.floor(Math.random() * words.length)];
}

// Display hidden word
function displayWord() {
    wordE1.innerHTML = `
        ${selectedWord
            .split('')
            .map(letter => `
                <span class="letter">
                    ${correctLetters.includes(letter) ? letter : ''}
                </span>
            `)
            .join('')}
    `;

    const innerWord = wordE1.innerText.replace(/\n/g, '');

    if (innerWord === selectedWord) {
        finalMessage.innerText = 'Felicidades! GANASTE!';
        popup.style.display = 'flex';
        playable = false; // Stop the game
        clearInterval(timerInterval); // Detener el temporizador
    }
}

// Update the wrong letters element
function updateWrongLettersE1() {
    wrongLettersE1.innerHTML = `
        ${wrongLetters.length > 0 ? '<p>Equivocado</p>' : ''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`).join('')}
    `;

    figureParts.forEach((part, index) => {
        const errors = wrongLetters.length;
        if (index < errors) {
            part.style.display = 'block';
        } else {
            part.style.display = 'none';
        }
    });

    if (wrongLetters.length === figureParts.length) {
        finalMessage.innerHTML = `
            Desafortunadamente perdiste.<br>
            La palabra era: <strong>${selectedWord}</strong>
        `;
        popup.style.display = 'flex';
        playable = false; // Stop the game
        clearInterval(timerInterval); // Detener el temporizador
    }
}

// Show notification
function showNotification() {
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}

// Start the timer
function startTimer() {
    timerInterval = setInterval(() => {
        const minutes = Math.floor(timeRemaining / 60);
        const seconds = timeRemaining % 60;
        timerElement.innerText = `Tiempo restante: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        
        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            finalMessage.innerText = 'Desafortunadamente perdiste. El tiempo se ha agotado.';
            popup.style.display = 'flex';
            playable = false;
        }
        
        timeRemaining--;
    }, 1000);
}

// Letter press event
window.addEventListener('keydown', e => {
    if (playable && e.keyCode >= 65 && e.keyCode <= 90) {
        const letter = e.key.toLowerCase();

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                showNotification();
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLettersE1();
            } else {
                showNotification();
            }
        }
    }
});

// Show the selection popup on page load
window.addEventListener('load', () => {
    selectionPopup.style.display = 'flex';
});

// Handle theme selection
selectionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
        selectedWord = getRandomWord(category);
        selectionPopup.style.display = 'none';
        displayWord();
        startTimer(); // Iniciar temporizador
    });
});

// Handle random category
randomCategoryBtn.addEventListener('click', () => {
    const categoriesArray = Object.keys(categories);
    const randomCategory = categoriesArray[Math.floor(Math.random() * categoriesArray.length)];
    selectedWord = getRandomWord(randomCategory);
    selectionPopup.style.display = 'none';
    displayWord();
    startTimer(); // Iniciar temporizador
});

// Handle play again button
playAgainBtn.addEventListener('click', () => {
    // Reset game state
    correctLetters.length = 0;
    wrongLetters.length = 0;
    playable = true;

    // Hide popup and reset figure
    popup.style.display = 'none';
    figureParts.forEach(part => part.style.display = 'none');

    // Reset timer
    clearInterval(timerInterval);
    timeRemaining = 60;
    timerElement.innerText = 'Tiempo restante: 01:00';

    // Show selection popup again
    selectionPopup.style.display = 'flex';
});

// Handle index button
indexButton.addEventListener('click', () => {
    window.location.href = '/index.html'; // Cambia la URL según la ruta de tu índice
});



// Initial display





/*Avatar*/



// Initial display





/*Avatar*/

