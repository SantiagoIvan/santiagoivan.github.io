const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn")
const text = document.querySelector(".color")
const bg = document.getElementsByTagName("body")[0]

btn.addEventListener("click", () => { setearSiguienteColor() })

function setearSiguienteColor() {
    let str = "#"
    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * hex.length)
        str += hex[index]
    }
    text.textContent = str;
    bg.style.background = str
}
setearSiguienteColor()