const main = document.querySelector('main')
const voicesSelect = document.getElementById('voices')
const textarea = document.getElementById('text')
const readBtn = document.getElementById('read')
const toggleBtn = document.getElementById('toggle')
const closeBtn = document.getElementById('close')

const data = [
    {
        image: 'drink.jpg',
        text: "I'm thirsty"
    },
    {
        image: 'food.jpg',
        text: "I'm hungry"
    },
    {
        image: 'tired.jpg',
        text: "I'm tired"
    },
    {
        image: 'hurt.jpg',
        text: "I'm hurt"
    },
    {
        image: 'happy.jpg',
        text: "I'm happy"
    },
    {
        image: 'angry.jpg',
        text: "I'm angry"
    },
    {
        image:'sad.jpg',
        text: "I'm sad"
    },
    {
        image: 'scared.jpg',
        text: "I'm scared"
    },
    {
        image: 'outside.jpg',
        text: "I want to go outside"
    },
    {
        image: 'home.jpg',
        text: "I want to go home"
    },
    {
        image: 'school.jpg',
        text: "I want to go to school"
    },
    {
        image: 'grandma.jpg',
        text: "I want to go to grandmas"
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
    main.appendChild(box)
}
