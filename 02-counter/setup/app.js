const increaseBtn = document.getElementById("increase-btn")
const decreaseBtn = document.getElementById("decrease-btn")
const resetBtn = document.getElementById("reset-btn")
const value = document.getElementById("value")

let counter = 0

increaseBtn.addEventListener("click", () => {setCounter(counter+1)})
decreaseBtn.addEventListener("click", () => {setCounter(counter-1)})
resetBtn.addEventListener("click", () => {setCounter(0)})

function setCounter(num){
    counter = num
    value.textContent = counter
    if(counter > 0) value.style.color = "green"
    else if(counter<0) value.style.color = "red"
    else if(counter===0) value.style.color = "var(--clr-grey-1)"
}