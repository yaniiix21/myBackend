let randomNumber = Math.floor(Math.random() * 20);
console.log(randomNumber)
const checkButton = document.getElementById('check');
const againButton = document.getElementById('again')
const userInput = document.getElementById('user-input');
const messageBox = document.getElementById('message')
const main = document.getElementById('main')
const scoreElement = document.getElementById('score')
const highScore = document.getElementById('highscore')
const title = document.getElementById('idtitle')
const head = document.getElementById('head')
const sign = document.getElementById('sign')


let scoreValue = 10;
score.textContent = scoreValue;


const tryAgainLow = ['BALIK!!! gamay ra', 'Malas man Balik, Patas-e Gamay', 'Hapit na taas pa', 'aguy gamay ra kaau', 'patas-e gamay mao nana', 'sige pa, pun-e lang']
// console.log(tryAgainLow[3])
const tryAgain2High = ['BALIK!! Taas ra', 'Ayay taas ra kaau!!', 'naaah layo ra kaau minusi pa', 'minusi gud, kuha nana', 'halah ka taas', 'kuha nana, ibanig gamay'] 

function checkNUmber() {
    console.log('Checking number...')
    if (userInput.value == '') {
        messageBox.textContent = 'Balika TSK!!'
        sign.textContent = '❌'
        return;
    }
    if (userInput.value > 20) {
        messageBox.textContent = 'Bogo 0 to 20 uyy!!!'
        sign.textContent = '❌'
        return;
    }
    if (userInput.value < 0 ) {
        messageBox.textContent = 'Bogo 0 to 20 uyy!!!'
        sign.textContent = '❌'
        return;
    }  
    

    
    if(randomNumber == userInput.value) {
        let highScoreCurrent = scoreValue
        messageBox.textContent = 'Nice ka tag-an gyud da!!'
        main.style.backgroundColor = '#68B984'
        checkButton.disabled = true
        sign.textContent = '✔️'
        if (scoreValue >= 6) {
            title.innerHTML = '<h1> Swerte </h1>'
            head.style.backgroundColor = '#00FFF6'
        }else if (scoreValue <= 5  ){
            title.innerHTML = '<h1> Malas </h1>'
            head.style.backgroundColor = '#FF1E1E'
        }
        if (highScoreCurrent >= highScore.textContent) {
            highScore.textContent = highScoreCurrent
        }
        return;
    }
    scoreValue--;
    scoreElement.textContent = scoreValue

    if (scoreValue == 0) {
        messageBox.textContent = 'Malas nawong nimu uyy hahahahaha'
        main.style.backgroundColor = '#b34747'
        checkButton.disabled = true
        sign.textContent = '❌'
        return
    }

        // messageBox.textContent = 'Malas man, Balik'
        if (randomNumber > userInput.value) {
            messageBox.textContent = tryAgainLow[Math.floor(Math.random() * 5)]
            main.style.backgroundColor = '#CE7777'
            sign.textContent = '❌'
            return;
        }
        if ( randomNumber < userInput.value) {
            messageBox.textContent = tryAgain2High[Math.floor(Math.random() * 5)]
            main.style.backgroundColor = '#D23369'
            sign.textContent = '❌'
            return;
        }

    

}

checkButton.addEventListener('click', checkNUmber)

function resetGame(params) {
    randomNumber = Math.floor(Math.random() * 20);
    console.log(randomNumber)
    main.style.backgroundColor = '#222';
    messageBox.textContent = 'Start Guessing'
    scoreValue = 10;
    score.textContent = scoreValue;
    userInput.value = '';
    checkButton.disabled = false
    title.innerHTML = '<h1>Ari bi, Swerte ba ka?! 👻</h1>'
    head.style.backgroundColor = '#222'
    sign.textContent = '?'
}
againButton.addEventListener('click', resetGame)