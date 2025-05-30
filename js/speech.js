const main = document.querySelector('main')
const voicesSelect = document.getElementById('voices')
const textarea = document.getElementById('text')
const readBtn = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.getElementById('close')


const data = [
    {
        image:'../drink.jpg',
        text: "I'm Thirsty"
    },
    {
        image: '../food.jpg',
        text: "I'm Hungry"
    },
    {
        image: '../tired.jpg',
        text: "I'm Tired"
    },
    {
        image: '../hurt.jpg',
        text: "I'm Hurt"
    },
    {
        image: '../happy.jpg',
        text: "I'm Happy"
    },
    {
        image: '../angry.jpg',
        text: "I'm Angry"
    },
    {
        image: '../sad.jpg',
        text: "I'm Sad"
    },
    {
        image: '../scared.jpg',
        text: "I'm Scared"
    },
    {
        image: '../outside.jpg',
        text:"I Want To Go Outside"
    },
    {
        image: '../home.jpg',
        text: "I Want To Go Home"
    },
    {
        image: '../school.jpg',
        text: "I want To Go To School"
    },
    {
        image: '../grandma.jpg',
        text: "I Want To Go To Grandmas"
    }
]


data.forEach(createBox)


function createBox(item) {
    const box = document.createElement('div')
    box.classList.add('box')
    box.innerHTML = `
        <img src="${item.image}" alt="${item.text}" />
        <p class="info"> ${item.text} </p>
    `




    box.addEventListener('click', () => {
        setTextMessage(item.text)
        speakText()


        // Add active effect
        box.classList.add('active')
        setTimeout(() => box.classList.remove('active'), 800)
    })


    main.appendChild(box)
}


//Initialize Speech Synthesis
const message = new SpeechSynthesisUtterance()


//Set Text
function setTextMessage(text) {
    message.text = text
}


//Speak Text
function speakText() {
    speechSynthesis.speak(message)
}




// Toggle Text box
toggleBtn.addEventListener('click', () => {
    document.getElementById('text-box').classList.toggle('show')
})


//Close Box
closeBtn.addEventListener('click', () => {
    document.getElementById('text-box').classList.remove('show')
})


let voices = []


function getVoices() {
    voices = speechSynthesis.getVoices()


    voices.forEach(voice => {
        const option = document.createElement('option')


        option.value = voice.name
        option.innerText = `${voice.name} ${voice.lang}`


        voicesSelect.appendChild(option)
    })
}


//voices changed
speechSynthesis.addEventListener('voiceschanged', getVoices)




// Change Voice
voicesSelect.addEventListener('change', setVoice)


// Set Voice
function setVoice(e) {
    message.voice = voices.find(voice => voice.name === e.target.value)
}


getVoices()


// Read text button
readBtn.addEventListener('click', () => {
    setTextMessage(textarea.value)
    speakText()
})
