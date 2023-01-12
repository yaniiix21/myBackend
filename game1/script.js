let randomNumber = Math.floor(Math.random() * 20);
console.log(randomNumber)
const checkButton = document.getElementById('check');
const checkMobile = document.getElementById('checkMobile');
const againButton = document.getElementById('again')
const againBtnMobile = document.getElementById('againMobile')
const userInput = document.getElementById('user-input');
const userInputMobile = document.getElementById('user-inputMobile');
const messageBox = document.getElementById('message')
const messageBoxMobile = document.getElementById('messageMobile')
const main = document.getElementById('main')
const mainMobile = document.getElementById('mainMobile')
const scoreElement = document.getElementById('score')
const scoreElementMobile = document.getElementById('scoreMobile')
const highScore = document.getElementById('highscore')
const highScoreMobile = document.getElementById('highscoreMobile')
const title = document.getElementById('idtitle')
const titleMobile = document.getElementById('idtitleMobile')
const head = document.getElementById('head')
const headMobile = document.getElementById('headMobile')
const sign = document.getElementById('sign')
const signMobile = document.getElementById('signMobile')

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
        signMobile.textContent = '❌'
        return;
    }
    if (userInput.value > 20) {
        messageBox.textContent = 'Bogo 0 to 20 uyy!!!'
        sign.textContent = '❌'
        signMobile.textContent = '❌'
        return;
    }
    if (userInput.value < 0 ) {
        messageBox.textContent = 'Bogo 0 to 20 uyy!!!'
        sign.textContent = '❌'
        signMobile.textContent = '❌'
        return;
    }  
    

    
    if(randomNumber == userInput.value) {
        let highScoreCurrent = scoreValue
        messageBox.textContent = 'Nice ka tag-an gyud da!!'
        main.style.backgroundColor = '#68B984'
        checkButton.disabled = true
        sign.textContent = '✔️'
        signMobile.textContent = '✔️'
        if (scoreValue >= 6) {
            title.innerHTML = '<h1> Swerte </h1>'
            head.style.backgroundColor = '#00FFF6'
            headMobile.style.backgroundColor = '#00FFF6'
        }else if (scoreValue <= 5  ){
            title.innerHTML = '<h1> Malas </h1>'
            head.style.backgroundColor = '#FF1E1E'
            headMobile.style.backgroundColor = '#FF1E1E'
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
        checkMobile.disabled = true
        sign.textContent = '❌'
        signMobile.textContent = '❌'
        return
    }

        // messageBox.textContent = 'Malas man, Balik'
        if (randomNumber > userInput.value) {
            messageBox.textContent = tryAgainLow[Math.floor(Math.random() * 5)]
            main.style.backgroundColor = '#CE7777'
            sign.textContent = '❌'
            signMobile.textContent = '❌'
            return;
        }
        if ( randomNumber < userInput.value) {
            messageBox.textContent = tryAgain2High[Math.floor(Math.random() * 5)]
            main.style.backgroundColor = '#D23369'
            sign.textContent = '❌'
            signMobile.textContent = '❌'
            return;
        }

    

}

checkButton.addEventListener('click', checkNUmber)

function resetGame(params) {
    randomNumber = Math.floor(Math.random() * 20);
    console.log(randomNumber)
    main.style.backgroundColor = '#222';
    messageBox.textContent = 'Pag hunahuna na...'
    scoreValue = 10;
    score.textContent = scoreValue;
    userInput.value = '';
    checkButton.disabled = false
    title.innerHTML = '<h1>Ari bi, Swerte ba ka?! 👻 </h1>'
    head.style.backgroundColor = '#222'
    headMobile.style.backgroundColor = '#222'
    sign.textContent = '?'
    signMobile.textContent = '?'
}


againButton.addEventListener('click', resetGame)



// for mobile

let scoreValueMobile = 10;
scoreMobile.textContent = scoreValueMobile;

function checkNUmberMobile() {
    console.log('Checking number...')
    if (userInputMobile.value == '') {
        messageBoxMobile.textContent = 'Balika TSK!!'
        signMobile.textContent = '❌'
        return;
    }
    if (userInputMobile.value > 20) {
        messageBoxMobile.textContent = 'Bogo 0 to 20 uyy!!!'
        signMobile.textContent = '❌'
        return;
    }
    if (userInputMobile.value < 0 ) {
        messageBoxMobile.textContent = 'Bogo 0 to 20 uyy!!!'
        signMobile.textContent = '❌'
        return;
    }  
    
    if(randomNumber == userInputMobile.value) {
        let highScoreCurrentMobile = scoreValueMobile
        messageBoxMobile.textContent = 'Nice ka tag-an gyud da!!'
        mainMobile.style.backgroundColor = '#68B984'
        signMobile.textContent = '✔️'
        if (scoreValueMobile >= 6) {
            titleMobile.innerHTML = '<h1> Swerte </h1>'
            headMobile.style.backgroundColor = '#00FFF6'
        }else if (scoreValueMobile <= 5  ){
            titleMobile.innerHTML = '<h1> Malas </h1>'
            headMobile.style.backgroundColor = '#FF1E1E'
        }

        if ( highScoreCurrentMobile >= highScoreMobile.textContent) {
            highScoreMobile.textContent = highScoreCurrentMobile
        }
        return;
    }
    scoreValueMobile--;
    scoreElementMobile.textContent = scoreValueMobile

    if (scoreValueMobile == 0) {
        messageBoxMobile.textContent = 'Malas nawong nimu uyy hahahahaha'
        mainMobile.style.backgroundColor = '#b34747'
        checkMobile.disabled = true
        signMobile.textContent = '❌'
        return
    }

        // messageBoxMobile.textContent = 'Malas man, Balik'
        if (randomNumber > userInputMobile.value) {
            messageBoxMobile.textContent = tryAgainLow[Math.floor(Math.random() * 5)]
            mainMobile.style.backgroundColor = '#CE7777'
            signMobile.textContent = '❌'
            return;
        }
        if ( randomNumber < userInputMobile.value) {
            messageBoxMobile.textContent = tryAgain2High[Math.floor(Math.random() * 5)]
            mainMobile.style.backgroundColor = '#D23369'
            signMobile.textContent = '❌'
            return;
        }

    

}


checkMobile.addEventListener('click', checkNUmberMobile)

function resetGameMobile(params) {
    randomNumber = Math.floor(Math.random() * 20);
    console.log(randomNumber)
    mainMobile.style.backgroundColor = '#222';
    messageBoxMobile.textContent = 'Pag hunahuna na...'
    scoreValueMobile = 10;
    scoreMobile.textContent = scoreValueMobile;
    userInputMobile.value = '';
    checkMobile.disabled = false
    titleMobile.innerHTML = '<h1 class="title fs-4" id="idtitleMobile">Ari bi, Swerte ba ka?! 👻 </h1>'
    head.style.backgroundColor = '#222'
    headMobile.style.backgroundColor = '#222'
    sign.textContent = '?'
    signMobile.textContent = '?'
}


againBtnMobile.addEventListener('click', resetGameMobile)