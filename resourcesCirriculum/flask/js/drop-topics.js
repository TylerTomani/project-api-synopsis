const dropTopics  = document.querySelectorAll('.drop-topic')
const stepsContainers = document.querySelectorAll('.steps-container')

function hideStepsContainers(){
    stepsContainers.forEach(stepsContainer => {
         if(!stepsContainer.classList.contains('hide')){
            stepsContainer.classList.add('hide')
        }
    })
}

hideStepsContainers()

function toggleTopicImg(topic){
    const img = topic.querySelector('header > .img-container > img')
    if(img){

        if(!img.classList.contains('hide')){
            img.classList.add('hide')
        } else {
            img.classList.remove('hide')
        }
    }

}
function toggleStepContainer(stepsContainer){
    if(stepsContainer.classList.contains('show')){
        stepsContainer.classList.remove('show')
        stepsContainer.add('hide')
    }if(stepsContainer.classList.contains('hide')){
        // hideStepsContainers()
        stepsContainer.classList.remove('hide')
    }  
    else {
        stepsContainer.classList.add('hide')
        
    }
  
}
dropTopics.forEach(dropTopic => {
    dropTopic.addEventListener('keydown', e => {
         if(e.keyCode === 13){
            e.preventDefault()
            const parent = e.target.parentElement
            const topicContainer = getTopicContainer(parent)
            const stepsContainer = topicContainer.querySelector('.steps-container')
            toggleTopicImg(topicContainer)
            toggleStepContainer(stepsContainer)
        }
    })
    dropTopic.addEventListener('click', e => {
        e.preventDefault()
        const parent = e.target.parentElement
        const topicContainer = getTopicContainer(parent)
        const stepsContainer = topicContainer.querySelector('.steps-container')
        toggleTopicImg(topicContainer)
        toggleStepContainer(stepsContainer)
    })
})
// Chat Gpt Response
function getTopicContainer(parent) {
    if (parent.classList.contains('topic-container')) {
        return parent;
    } else if (parent.parentElement) {
        return getTopicContainer(parent.parentElement);
    } else {
        return null; // Return null if no .topic-container ancestor is found
    }
}