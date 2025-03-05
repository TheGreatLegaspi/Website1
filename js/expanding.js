const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', ()=> {
        removeActiveClasses().add('active')
        panel.classList
    })
})

function removeActiveClasses (){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
