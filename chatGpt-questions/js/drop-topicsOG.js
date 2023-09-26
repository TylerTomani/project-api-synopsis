const dropTopics  = document.querySelectorAll('.drop-topic')
const questionsContainer = document.querySelectorAll('.questions-containers')

function hideQuestionsContainers(){
    questionsContainer.forEach(questionContainer => {
        console.log(questionContainer)
         if(!questionContainer.classList.contains('hide')){
            questionContainer.classList.add('hide')
        }
    })
}

hideQuestionsContainers()

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
dropTopics.forEach(dropTopic => {
    dropTopic.addEventListener('keydown', e => {        
         if(e.keyCode === 13){
            hideQuestionsContainers
            e.preventDefault()
            const parent = e.target.parentElement
            const topicContainer = getTopicContainer(parent)
            let questionsContainer = topicContainer.querySelector('.subtopics-container')
            toggleQuestionsContainers(questionsContainer)
        }
    })
    dropTopic.addEventListener('click', e => {
        const parent = e.target.parentElement
        const topicContainer = getTopicContainer(parent)
        let questionsContainer = topicContainer.querySelector('.subtopics-container')
        toggleQuestionsContainers(questionsContainer)
    })
})
// Chat Gpt Response - Recursive Get Parent
function getTopicContainer(parent) {
    if (parent.classList.contains('topic-container')) {
        return parent;
    } else if (parent.parentElement) {
        return getTopicContainer(parent.parentElement);
    } else {
        return null; // Return null if no .topic-container ancestor is found
    }
}