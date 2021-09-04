const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let colorActual = 0;

const btn = document.getElementById("btn")
const title = document.getElementById("color")
const bg = document.getElementsByTagName("body")[0]


btn.addEventListener("click", () => { setearSiguienteColor() })


const setearSiguienteColor = () => {
    title.textContent = colors[colorActual]
    bg.style.background = colors[colorActual]
    colorActual >= colors.length - 1 ? colorActual = 0 : colorActual += 1;
}

setearSiguienteColor()