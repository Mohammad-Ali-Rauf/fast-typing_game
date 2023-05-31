// Get DOM Elements
const word = document.getElementById('word');
const userWord = document.getElementById('user-word');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('form');
const difficultyDropdown = document.getElementById('difficulty');
const gameoverContainer = document.getElementById('gameover');

const words = [
    'a','about','above','across','after','again','against','air','all','almost','along','also','always','an','and','animals','another','answer','any','are','around','as','asked','at','away','back','be','because','been','began','being','below','best','better','between','big','body','both','boy','but','by','called','came','can','car','change','children','city','come','could','country','cut','day','did','didn’t','different','do','does','don’t','done','door','down','during','each','earth','end','enough','even','ever','every','example','face','family','far','father','feet','few','find','first','fish','five','food','for','form','found','four','from','get','give','go','going','good','got','great','group','had','half','hand','hard','has','have','he','head','hear','heard','help','her','here','high','him','himself','his','home','house','how','however','I','I’m','if','important','in','into','is','it','it’s','its','just','keep','kind','knew','know','land','large','last','later','learn','left','let','life','light','like','line','little','live','long','look','made','make','man','many','may','me','men','might','money','more','morning','most','mother','move','much','must','my','name','near','need','never','new','next','night','no','not','now','number','of','off','often','old','on','once','one','only','or','other','our','out','over','own','page','paper','part','people','picture','place','plants','play','point','put','read','red','right','room','said','same','saw','say','school','sea','second','see','seen','sentence','set','several','she','should','show','side','since','small','so','some','something','soon','sound','still','story','study','such','sun','sure','take','tell','than','that','the','their','them','then','there','these','they','thing','think','this','those','thought','three','through','time','to','today','together','told','too','took','top','toward','TRUE','try','turn','turned','two','under','until','up','upon','us','use','usually','very','want','was','water','way','we','well','went','were','what','when','where','which','while','white','who','whole','why','will','with','without','words','work','world','would','write','year','you','young','your'
];

// Placeholder for selected word
let randomWord;

// Initialize score
let score = 0

// Initialize difficulty
let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'easy';
difficultyDropdown.value = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'easy';

// Initialize time
let time;
if ( difficulty === 'hard' ) {
    time = 3;
} else if ( difficulty === 'medium' ) {
    time = 6
} else {
    time = 10;
}

timeElement.innerHTML = time;

// Auto focus  on the input field on page load
userWord.focus();

// Execute Time update function after each second
const timeInterval = setInterval(decrementTime, 1000);

// Function to generate a random word from the random words api
function generateWord() {
    const generatedWord = words[Math.floor(Math.random() * words.length)]
    return generatedWord;
}

// Function to render the new word
function renderWord() {
    // Generate a new random word
    randomWord = generateWord();
    // Update the DOM word element's inner HTML to render the new word
    word.innerHTML = randomWord;
}

// Function to increment the score by 1
function incrementScore() {
    // Increment by 1
    score++;
    // Render new score in DOM
    scoreElement.innerHTML = score;
}

// Function to decrement timer by 1
function decrementTime() {
    // Decrement by 1
    time--;
    timeElement.innerHTML = time;

    // Check if time is out
    if ( time === 0 ) {
        // Stop the time interval
        clearInterval(timeInterval);
        // Display game over container
        gameover();
    }
}

// Function to display the gameover container
function gameover() {
    // Add cvontent in the game over container
    gameoverContainer.innerHTML = `
        <h1>Time's up!</h1>
        <p>Your score is: ${score}</p>
        <button onclick="location.reload()">Play Again</button>
    `
    // Display the game over container
    gameoverContainer.style.display = 'flex';
}

// Event Listeners
// 1. Listen for the input in the userWord input element
userWord.addEventListener('input', e => {
    const userInput = e.target.value;
    // Check to see if the userInput matches the randomWord
    if (userInput === randomWord) {
        // If the the user typed the correct word, generate a new word
        renderWord();
        // Increment score by 1
        incrementScore();
        // Clear the input field
        e.target.value = '';
        // Add more time to clock
        time += 2;
        decrementTime();
    } else {

    }
})

// 2. Listen for click on the sttingsBtn
settingsBtn.addEventListener('click', () => {
    settings.classList.toggle('hide');
})

// 3. Listen for change in the settingsForm
settingsForm.addEventListener('change', e => {
    // Change difficu;ty setting based on user input
    difficulty = e.target.value;
    // Persist difficulty setting in local storage
    localStorage.setItem('difficulty', difficulty);
})

// Run the renderWord function on page load
renderWord();