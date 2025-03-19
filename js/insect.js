const screens = document.querySelectorAll('.screen')
const start_btn = document.getElementbyId('start-btn')
const choose_insect0_btns = document.querySelectorAll('choose-insect-btn')
const game_container = document.getElementById ('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const mes= document.getElementById('message')

start_btn.addEventListener('click', => {
    screen[0].classList.add('up')
})


choose_insect_btns.forEach(btn => {
    btn.addEventListener ('click', () =>{
    screen[1].classList.add ('up') const
})
})
