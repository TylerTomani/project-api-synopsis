const topicContainers = document.querySelectorAll('.topic-container')
// section-topic
function hideTopics(){
    topicContainers.forEach(topicContainer => {
        const topic = topicContainer.querySelector('.topic')
        topic.classList.add('hide')
    })
}
hideTopics()

topicContainers.forEach(topicContainer => {
    topicContainer.addEventListener('click', e => {
        toggleTopic(e)
    })
    topicContainer.addEventListener('keydown', e => {
        if(e.keyCode === 13){   
            toggleTopic(e)
        }
    })

})

function toggleTopic(e){
    const parent =  getTopicContainer(e.target)
    // console.log(parent)
    const header = parent.querySelector('header')
    const img = header.querySelector('img')
    const topic = parent.querySelector('.topic')
    
    if(topic.classList.contains('show')){
        topic.classList.remove('show')
        topic.classList.add('hide')
    } else if(topic.classList.contains('hide')){
        topic.classList.remove('hide')
        // img.classList.add('hide')

    } else {
        topic.classList.add('hide')
        // img.classList.remove('hide')
    }
}

function getTopicContainer(el){
    if(el.classList.contains('topic-container')){
        return el
    }
    if(!el.classList.contains('topic-container')){
        return getTopicContainer(el.parentElement)
    }  else {
        return el
    }

}