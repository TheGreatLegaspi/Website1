const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

const LPaddle = document.createElement('div')
document.body.appendChild(LPaddle)
let LPaddleWidth = 10
let LPaddleHeight = 100
let LPaddleSpeed = 10
let LPaddleYPosition = windowHeight / 2 - LPaddleHeight / 2
let LPaddleXPosition = 70

const ball = document.createElement('div')
document.body.appendChild(ball)
const ballRadius = 20
let ballXPosition = windowWidth/2 - ballRadius
let ballYPosition = windowHeight/2 - ballRadius
let ballSpeed = 10
let ballXDirection = 1
let ballYDirection = 1

let score = 0 // Displate the score and increase score by one every time the ball hits the paddle
let level = 1 //Display the level and increase the level by one every time increases by 10.

const scoreDisplay = document.createElement('div')
const levelDisplay = document.createElement('div')

document.body.appendChild(scoreDisplay)
document.body.appendChild(levelDisplay)

scoreDisplay.style.position = 'absolute'
scoreDisplay.style.top = '20px'
scoreDisplay.style.textAlign = 'center'
scoreDisplay.style.fontSize = '24px'

levelDisplay.style.position = 'absolute'
levelDisplay.style.top = '20px'
levelDisplay.style.left = '680px'
levelDisplay.style.fontSize = '24px'

updateDisplays();
function updateDisplays() {
    scoreDisplay.textContent = `Score: ${score}`
    levelDisplay.textContent = `Level: ${level}`
}


function createBall () {
    ball.style.height = `${2 * ballRadius}px`
    ball.style.width = `${2 * ballRadius}px`
    ball.style.borderRadius = "50%"
    ball.style.backgroundColor = "green"
    ball.style.position = "absolute"
    ball.style.top = `${ballYPosition}px`
    ball.style.left = `${ballXPosition}px`
}

function createLPaddle () {
    LPaddle.style.height = `${LPaddleHeight}px`
    LPaddle.style.width = `${LPaddleWidth}px`
    LPaddle.style.backgroundColor = 'black'
    LPaddle.style.position = 'absolute'
    LPaddle.style.left = `${LPaddleXPosition}px`
    LPaddle.style.top = `${LPaddleYPosition}px`
}

createBall()
createLPaddle()

function moveBall() {
    ballXPosition = ballXPosition + ballSpeed * ballXDirection
    ballYPosition = ballYPosition + ballSpeed * ballYDirection
    ball.style.left = `${ballXPosition}px`
    ball.style.top = `${ballYPosition}px`
    if (ballYPosition < 0 || ballYPosition > windowHeight - 2 * ballRadius){
        ballYDirection = ballYDirection * -1
    }
    if (ballXPosition < 0 || ballXPosition > windowWidth - 2 * ballRadius){
        ballXDirection = ballXDirection * -1
    }

    let ballTop = ballYPosition
    let ballBottom = ballYPosition + 2 * ballRadius
    let ballLeft = ballXPosition
    let LPaddleTop = LPaddleYPosition
    let LPaddleBottom = LPaddleYPosition + LPaddleHeight
    let LPaddleRight = LPaddleXPosition + LPaddleWidth

    if (
        (ballBottom >= LPaddleTop) &&
        (ballTop <= LPaddleBottom) &&
        (ballLeft <= LPaddleRight) &&
        (ballXDirection == -1)
    ) {
        ballXDirection = ballXDirection * -1
        score = score + 1
        if (score % 10 == 0) {
            level = level + 1
            ballSpeed += 1
        }
        updateDisplays()

}
}

let wKey = false
let sKey = false
document.addEventListener('keydown', (event) => {
    if (event.key == 'w') {
        wKey = true
    }
    if (event.key == 's') {
        sKey = true
    }
})

document.addEventListener('keyup', (event) => {
    if (event.key == 'w') {
        wKey = false
    }
    if (event.key == 's') {
        sKey = false
    }
})

function moveLPaddle () {
    if (wKey == true && LPaddleYPosition > 0) {
        LPaddleYPosition = LPaddleYPosition - LPaddleSpeed
    }
    if (sKey == true && LPaddleYPosition < windowHeight - LPaddleHeight) {
        LPaddleYPosition = LPaddleYPosition + LPaddleSpeed
    }
    LPaddle.style.top = `${LPaddleYPosition}px`
}

function animate () {
    moveBall()
    moveLPaddle()
    requestAnimationFrame(animate)
    lose()
}
animate()

const end = document.createElement('div')
document.body.appendChild(end)

endGame()

function endGame() {
    end.style.width = '100%'
    end.style.height = '100%'
    end.style.top = '0'
    end.style.left = '0'
    end.style.fontSize = '24px'
    end.innerHTML = 'Game over'
    end.style.textAlign = 'center'
    end.style.zIndex = '-1'
    end.style.opacity = '0'
}

function lose () {
    if(ballXPosition <= 0 ) {
        end.style.zIndex = '2'
        end.style.opacity = '1'
    }
}
