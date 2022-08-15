const frontPage = document.querySelector(".frontPage")
const answers = document.querySelectorAll("answer")
const spanScore = document.querySelector("#score")
const nextButton = document.querySelector(".nextButton")
const questionPara = document.querySelector(".question")
const startButton = document.querySelector(".startButton")
const container = document.querySelector(".container")
const answerBox = document.querySelector(".answers")


//variable to store all questions and answers
const questions = [

    {question: 'A person with well-developed abdominal muscles is said to have a what?',
        answers: [{text: '12-pack', isAnswer:false}, {text: 'Family-pack', isAnswer:false}, {text: 'Six-pack', isAnswer:true}, {text: 'One-pack', isAnswer:false}]
    },


    {question: 'Which two words traditionally appear onscreen at the termination of a feature film?',
        answers: [{text: 'The End', isAnswer:true}, {text: 'The Conclusion', isAnswer:false}, {text: 'The Finish', isAnswer:false}, {text: 'The Pizza Rolls Are Done', isAnswer:false}]
    },


    {question: 'A magnet would most likely attract which of the following?',
        answers: [{text: 'Plastic', isAnswer:false}, {text: 'Metal', isAnswer:true}, {text: 'Wood', isAnswer:false}, {text: 'The wrong man', isAnswer:false}]
    },

    {question: 'Which of these names is not in the title of a Shakespeare play?',
        answers: [{text: 'Romeo', isAnswer:false}, {text: 'Hamlet', isAnswer:false}, {text: 'Darren', isAnswer:true}, {text: 'Macbeth', isAnswer:false}]
    },

    {question: 'What is the capital of Nigeria?',
        answers: [{text: 'Lagos', isAnswer:false}, {text: 'Porthacourt', isAnswer:false}, {text: 'Oyo', isAnswer:false}, {text: 'Abuja', isAnswer:true}]
    },

    {question: 'What is the capital of the United States?',
        answers: [{text: 'California', isAnswer:false}, {text: 'Washington DC', isAnswer:true}, {text: 'Florida', isAnswer:false}, {text: 'Texas', isAnswer:false}]
    },

    {question: 'What name is traditionally given to the party held for a woman who is expecting a baby?',
        answers: [{text: 'Baby shower', isAnswer:true}, {text: 'Baby drizzle', isAnswer:false}, {text: 'Baby deluge', isAnswer:false}, {text: 'Baby downpour', isAnswer:false}]
    },


    {question: 'What name is traditionally given to the party held for a woman who is expecting a baby?',
        answers: [{text: 'Baby shower', isAnswer:true}, {text: 'Baby drizzle', isAnswer:false}, {text: 'Baby deluge', isAnswer:false}, {text: 'Baby downpour', isAnswer:false}]
    },

    {question: 'According to the old saying, "love of" what "is the root of all evil?',
        answers: [{text: 'Food', isAnswer:false}, {text: 'Clothing', isAnswer:false}, {text: 'Reality television', isAnswer:false}, {text: 'Money', isAnswer:true}]
    },

    {question: 'A person who is not a banker and lends money at an extremely high interest rate is known as what?',
        answers: [{text: 'Loan shark', isAnswer:true}, {text: 'Green snake', isAnswer:false}, {text: 'Brother-in-law', isAnswer:false}, {text: 'Paper tiger', isAnswer:false}]
    }

]


let questionDisplay = 0
let score = 0



//Start button functionality
startButton.addEventListener('click', ()=> {
    frontPage.style.display = 'none'
    container.style.display = 'grid'
    oneQuestion(questionDisplay)
})




//inserting the created questions in the html and also 
const oneQuestion = (index) => {
    const question = questions[questionDisplay]
    questionPara.textContent = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.classList.add("nextButton")
        button.append(answer.text)
        answerBox.appendChild(button)
        button.dataset.isCorrect =answer.isAnswer
        button.addEventListener('click', checkAnswer)
    })


};






//score counter
const checkAnswer = (e) => {
    const allAnswers = document.querySelectorAll('.nextButton')
    const answerBoolean = e.target.dataset.isCorrect
    if (answerBoolean == 'true'){
        e.target.classList.add('valid')
        score ++
        spanScore.textContent = score
    }else{
        e.target.classList.add('invalid')

    }
    allAnswers.forEach(el => {
        el.disabled = true
    })
}


