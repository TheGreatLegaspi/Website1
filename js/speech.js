const main = document.querySelector('main')
const voicesSelect = document.getElementById('voices')
const textarea = document.getElementById('text')
const readBtn = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.getElementById('close')


const data = [
    {
        image:'https://images.unsplash.com/photo-1593766729977-e1f01ee30e49?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: "I'm Thirsty"
    },
    {
        image: 'https://images.unsplash.com/photo-1571309815192-4837ea73e4fb?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: "I'm Hungry"
    },
    {
        image: 'https://images.unsplash.com/photo-1618517047922-d18a5a36c109?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        text: "I'm Tired"
    },
    {
        image: 'https://images.unsplash.com/photo-1527236438218-d82077ae1f85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGh1cnR8ZW58MHx8MHx8fDA%3D',
        text: "I'm Hurt"
    },
    {
        image: 'https://images.unsplash.com/photo-1665686377065-08ba896d16fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SGFwcHl8ZW58MHx8MHx8fDA%3D',
        text: "I'm Happy"
    },
    {
        image: 'https://images.unsplash.com/photo-1503525537183-c84679c9147f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QW5ncnl8ZW58MHx8MHx8fDA%3D',
        text: "I'm Angry"
    },
    {
        image: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2FkfGVufDB8fDB8fHww',
        text: "I'm Sad"
    },
    {
        image: 'https://images.unsplash.com/photo-1483193722442-5422d99849bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2NhcmVkfGVufDB8fDB8fHww',
        text: "I'm Scared"
    },
    {
        image: 'https://images.unsplash.com/photo-1566558993628-670603b790ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8SSUyMHdhbnQlMjB0byUyMGdvJTIwb3V0c2lkZXxlbnwwfHwwfHx8MA%3D%3D',
        text:"I Want To Go Outside"
    },
    {
        image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SG9tZXxlbnwwfHwwfHx8MA%3D%3D',
        text: "I Want To Go Home"
    },
    {
        image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2Nob29sfGVufDB8fDB8fHww',
        text: "I want To Go To School"
    },
    {
        image: 'https://images.unsplash.com/photo-1593100126453-19b562a800c1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8R3JhbmRtYXxlbnwwfHwwfHx8MA%3D%3D',
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
