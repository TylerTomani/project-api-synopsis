const topicContainers = document.querySelectorAll('.topic-container')
// section-topic
function hideTopics(){
    topicContainers.forEach(topicContainer => {
        const topic = topicContainer.querySelector('.section-topic')
        topic.classList.add('hide')
    })
}
hideTopics()

// sectionContainers.forEach(sectionContainer => {
//     sectionContainer.addEventListener('click', e => {
//         toggleSectionTopic(e)
//     })
//     sectionContainer.addEventListener('keydown', e => {
//         if(e.keyCode === 13){   
//             toggleSectionTopic(e)
//         }
//     })

// })

// function toggleSectionTopic(e){
//     const parent =  getSectionContainer(e.target)
//     // console.log(parent)
//     const header = parent.querySelector('header')
//     const img = header.querySelector('img')
//     const sectionTopic = parent.querySelector('.section-topic')
    
//     if(sectionTopic.classList.contains('show')){
//         sectionTopic.classList.remove('show')
//     } 
//     if(sectionTopic.classList.contains('hide')){
//         sectionTopic.classList.remove('hide')
//         img.classList.add('hide')

//     } else {
//         tutorialContainer.classList.add('hide')
//         img.classList.remove('hide')
//     }
}

function getSectionContainer(el){
    if(el.classList.contains('section-container')){
        return el
    }
    if(!el.classList.contains('section-container')){
        return getSectionContainer(el.parentElement)
    }  else {
        return el
    }

}