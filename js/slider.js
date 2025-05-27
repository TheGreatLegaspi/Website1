const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('down-button')
const rightSide = document.querySelector('.right-side')
const leftSide = document.querySelector('.left-side')
const slidesLength = rightSide.querySelectorAll('div').length


upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))
