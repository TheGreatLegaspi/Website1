const container = document.getElementById('container')
const text = document.getElementById('text')

function breatheAnimation() {
    text.innerHTML = 'Breathe In'
    container.classList.add(grow)
}
