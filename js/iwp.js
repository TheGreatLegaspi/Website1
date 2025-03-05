document.getElementById("changeColorBtn").addEventListener("click", ChangeColor);
let currentColorIndex = 0;

function ChangeColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
    document.body.style.backgroundColor = colors[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % 6;
}




