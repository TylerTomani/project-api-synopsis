const dropTopics = document.querySelectorAll('.drop-topic')
const subDropTopics = document.querySelectorAll('.subdrop-topic')
const subTopicContainers = document.querySelectorAll('.subtopics-container')
const subQuestionsContainers = document.querySelectorAll('.subquestions-container')
const questionContainers = document.querySelectorAll('.question-container')
const answers = document.querySelectorAll('.answer')
const questions = document.querySelectorAll('.question')


function hideSubTopics(){
    subTopicContainers.forEach(subTopic => {
        subTopic.classList.add('hide')
    })
}
hideSubTopics()

function hideSubQuestionsContainers(){
    subQuestionsContainers.forEach(subTopic => {
        subTopic.classList.add('hide')
    })
}
hideSubQuestionsContainers()

function hideQuestionsContainers(){
    questionContainers.forEach(question => {
        question.classList.add('hide')
    })
}
hideQuestionsContainers()
function hideQuestions(){
    questionContainers.forEach(question => {
        question.classList.add('hide')
    })
}
hideQuestions()
function hideAnswers(){
    answers.forEach(answer => {
        answer.classList.add('hide')
    })
}
hideAnswers()

dropTopics.forEach(topic => {
    topic.addEventListener('click', e => {
        // e.preventDefault()
        toggleTopic(e)
    })
})
subDropTopics.forEach(subDrop => {
    subDrop.addEventListener('click', e => {
        toggleQuestions(e)
    })
})

function toggleTopic(e){
    const parent = getTopicContainer(e.target.parentElement)
    // console.log(e.target)
    let subContainers = parent.querySelectorAll('.subtopics-container')
    subContainers.forEach(subTopic => {
        hideSubTopics()
        if(subTopic.classList.contains("hide")){
            subTopic.classList.remove('hide')
        } else subTopic.classList.else('hide')
    })
}

function getTopicContainer(parent){
    if(parent.classList.contains('topic-container')){
        return parent
    } else if(parent.parentElement){
        return getTopicContainer(parent.parentElement)
    } else {
        return null
    }
}


function toggleQuestions(e){
    const gparent = e.target.parentElement.parentElement
    const subquestionsContainer = gparent.querySelector('.subquestions-containers ')
    const questionContainers = subquestionsContainer.querySelectorAll('.question-container')

    questionContainers.forEach(questionContainer => {
        if(questionContainer.classList.contains('hide')){
            questionContainer.classList.remove('hide')
        } else questionContainer.classList.add('hide')
        // toggleAnswers(questionContainer)
    })

}

questions.forEach(question => {
    
    question.addEventListener('click', e => {
        let parent =getQuestionContainer(e.target.parentElement)
        let answer = parent.querySelector('.answer')
        console.log(answer)
        if(answer.classList.contains('hide')){
            answer.classList.remove('hide')
        } else {
            answer.classList.add('hide')
        }
    })
    question.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            
            
            let parent =getQuestionContainer(e.target.parentElement)
            let answer = parent.querySelector('.answer')
            console.log(answer)
            if(answer.classList.contains('hide')){
                answer.classList.remove('hide')
            } else {
                answer.classList.add('hide')
            }
        }
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