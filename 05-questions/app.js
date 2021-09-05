const log = console.log
const selectAll = document.querySelectorAll.bind(document)
//la idea sería agregarle la clase de css 'show text' a la pregunta correspondiente, y cerrar las demas
//en este caso tengo que usar classList para acceder a todas las clases que posee cierto elemento HTML
//con la función toggle, le agrego/saco una clase en especifico si es que existe
//como quiero sacar el texto y ademas cambiar el iconito, el show-text se lo aplico a toda la pregunta
//que es el contenedor principal que contiene a todos los elementos

//using selectors inside the element
const allQuestions = selectAll('.question')
allQuestions.forEach( question => {
    const btn = question.querySelector(".question-btn")
    btn.addEventListener("click", () => {
        closeOtherQuestions()
        question.classList.toggle('show-text')
    })
})

// traversing the dom
// const allBtns = selectAll('.question-btn')
// allBtns.forEach( btn => {
//     btn.addEventListener("click", (e) => {
//         closeOtherQuestions()
//         const question = e.currentTarget.parentElement.parentElement
//         question.classList.toggle('show-text')
//     })
// })

function closeOtherQuestions(){
    allQuestions.forEach( question => question.classList.remove('show-text'))
}