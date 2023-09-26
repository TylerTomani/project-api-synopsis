const subdropTopics  = document.querySelectorAll('.subtopic-drop')
const subQuestionsContainer = document.querySelectorAll('.subquestions-containers')

function hideSubQuestionsContainers(){
    subQuestionsContainer.forEach(subQuestionContainer => {
         if(!subQuestionContainer.classList.contains('hide')){
            subQuestionContainer.classList.add('hide')
        }
    })
}

hideSubQuestionsContainers()

function toggleQuestionsContainers(questionContainer){
    if(questionContainer){
        if(questionContainer.classList.contains('show')){
            questionContainer.classList.remove('show')
            questionContainer.classList.add('hide')
        }if(questionContainer.classList.contains('hide')){
            // hideStepsContainers()
            questionContainer.classList.remove('hide')
        }  
        else {
            questionContainer.classList.add('hide')
            
        }
    }
  
}
subdropTopics.forEach(subdropTopic => {
    subdropTopic.addEventListener('keydown', e => {        
         if(e.keyCode === 13){
            hideSubQuestionsContainers()
            e.preventDefault()
            const parent = e.target.parentElement
            const topicContainer = getSubTopicContainer(parent)
            const questionsContainer = topicContainer.querySelector('.subquestions-containers')
            if(questionsContainer){
                toggleQuestionsContainers(questionsContainer)
            }
        }
    })
    subdropTopic.addEventListener('click', e => {
        const parent = e.target.parentElement
        const topicContainer = getSubTopicContainer(parent)
        console.log(topicContainer)
        const questionContainer = topicContainer.querySelector('.subquestions-containers')
        if(questionContainer){
            toggleQuestionsContainers(questionContainer)
        }

    })
})
// Chat Gpt Response - Recursive Get Parent
function getSubTopicContainer(parent) {
    if (parent.classList.contains('subtopics-container')) {
        return parent;
    } else if (parent.parentElement) {
        return getSubTopicContainer(parent.parentElement);
    } else {
        return null; // Return null if no .topic-container ancestor is found
    }
}