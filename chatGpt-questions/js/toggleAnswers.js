// Delete this when not working on projet
const clickAdjusts = document.querySelectorAll('.clickAdjust')
addEventListener('DOMContentLoaded', () => {
    clickAdjusts.forEach(adjust => {
        adjust.click()
    })  
})
// 

const questions = document.querySelectorAll('.question ')
const answers = document.querySelectorAll('.answer')
function hideAnswers(){
    answers.forEach(answer => {
        answer.classList.add('hide')
    })
}
hideAnswers()

questions.forEach(question => {
    let children = question.querySelectorAll('*')
    question.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            let parent = getQuestionContainer(e.target.parentElement)
            toggleAnswer(parent)
            addTabindex(parent)
        }         
    })
    question.addEventListener('click', e => {
        let parent = getQuestionContainer(e.target.parentElement)
        toggleAnswer(parent)
        addTabindex(parent)
    })

    children.forEach(child => {
        child.addEventListener('click', e => {
            let parent = getQuestionContainer(e.target.parentElement)
            // toggleAnswer(parent)
            // addTabindex(parent)
        })
        child.addEventListener('keydown', e => {
            if(e.keyCode === 13){
                let parent = getQuestionContainer(e.target.parentElement)
                console.log(parent)
                console.log(e.target)

            }
        })
    })
    
})

function getQuestionContainer(parent){
    if(parent.classList.contains('question-container')){
        return parent
    } else if(parent.parentElement){
        return getQuestionContainer(parent.parentElement)
    } else {
        return null
    }
}
function toggleAnswer(parent){
    let answer = parent.querySelector('.answer')
    if(answer.classList.contains('hide')){
        answer.classList.remove('hide')
    } else {
        answer.classList.add('hide')
    }
}

function addTabindex(parent){
    let codes = parent.querySelectorAll('.question > .question-txt >  .code-container > .copy-code')
    codes.forEach(code => {
        code.setAttribute('tabindex', 1)
    })
    let theQuestion = parent.querySelector('.question > .question-txt > .the-question')
    theQuestion.setAttribute('tabindex', 1)
}