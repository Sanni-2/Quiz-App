const frontPage = document.querySelector(".frontPage")
const answers = document.querySelectorAll("answer")
const spanScore = document.querySelector("#score")
const nextButton = document.querySelector(".nextButton")
const questionP = document.querySelector(".questions")
const startButton = document.querySelector(".startButton")
const container = document.querySelector(".container")
const answerBox = document.querySelector(".answers")







//Start button functionality
startButton.addEventListener('click', ()=> {
    frontPage.style.display = 'none'
    container.style.display = 'grid'
})