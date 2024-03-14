let again = document.querySelector('.again')
let number = document.querySelector('.number')
let guess = document.querySelector('.guess')
let check = document.querySelector('.check')
let message = document.querySelector('.message')
let scoreEl = document.querySelector('.score')
let highscoreEl = document.querySelector('.highscore')

guess.focus()

let score = 20
let highscore = 0
let gameOver = true

let randomNumber = Math.floor(Math.random() * 20 + 1)
console.log(randomNumber);


check.addEventListener('click', () => {
    guess.focus()
    if (score > 0) {
        let inputValue = +guess.value
        if (guess.value && gameOver) {
            

          } if (inputValue > randomNumber) {
            message.textContent = 'To High'
            score--
            scoreEl.textContent = score
            if(score <= 0){
                gameOver = false
                message.textContent = 'Game Over';
                document.querySelector('body').style.background = 'red';
            }
          } else if (inputValue < randomNumber) {
            message.textContent = 'To Low'
            score--
            scoreEl.textContent = score
            if(score <= 0){
                gameOver = false
                message.textContent = 'Game Over';
               document.querySelector('body').style.background = 'red';
            }
          } else if (inputValue == randomNumber) {
            message.textContent = 'You are Winner!!!'
            document.querySelector('body').style.background = '#60b347'
            number.textContent = randomNumber
            gameOver = false
            if (score > highscore) {
                highscore = score
                highscoreEl.textContent = highscore
            }
            guess.value = ''
        }
    }
})

again.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 20 + 1)
    score = 20
    gameOver = true
    document.querySelector('body').style.background = 'rgb(27, 27, 27)'
    number.textContent = "?"
    message.textContent = 'Start guessing...'
    scoreEl.textContent = '20'
})