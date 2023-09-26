const questionContainers = document.querySelectorAll('.question-container')

const questionTxts = document.querySelectorAll('.question-txt')
const answerContainers = document.querySelectorAll('.answer-container')

function hideAnswerContainer(){
    answerContainers.forEach(answerContainer => {
        answerContainer.classList.add('hide')
    })
}

hideAnswerContainer()

questionTxts.forEach(question => {
    question.addEventListener('click', e => {
        e.preventDefault()
        const parent = getStepColContainer(e.target.parentElement)
        const answerContainer = parent.querySelector('.answer-container')
        // hideAnswerContainer()
        toggleAnswer(answerContainer)
        // answerContainer.focus()
        // console.log(answerContainer)
    })
    question.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            // console.log(e.target)
            // hideAnswerContainer()
            console.log('keydown')
            e.preventDefault()
            const parent = getStepColContainer(e.target.parentElement)
            const answerContainer = parent.querySelector('.answer-container')
            toggleAnswer(answerContainer)
            // answerContainer.focus()
        }
        
    })
})


function toggleAnswer(answer){
    if(answer.classList.contains('show')){
        answer.classList.remove('show')
        // answer.classList.add('hide')
    } else if(answer.classList.contains('hide')){
        answer.classList.remove('hide')
    } else {
        answer.classList.add('hide')

    }
}

function getStepColContainer(parent){
    if(parent.classList.contains('step-col')){
        return parent
    } else if (parent.parentElement){
        return getStepColContainer(parent.parentElement)
    } else {
        return null
    }
}