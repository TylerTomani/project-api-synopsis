const dropTopicLinks = document.querySelectorAll('.drop-topic')
const show = document.getElementById('show')
addEventListener("DOMContentLoaded", () => {
    if(show){
        let fcs = show.querySelectorAll('.fc')
        fcs.forEach(fc => {
            fc.classList.add('show')
        })

    }
})
let shiftEnterArray = []
let currentImg

dropTopicLinks.forEach(dropTopic => {
    dropTopic.addEventListener('click', e => {
        hideTopics()
        toggleTopic(e)
        // console.log(e.target)
    })
    dropTopic.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            e.preventDefault()
            toggleTopic(e)
        }
        shiftEnterArray.unshift(e.keyCode)
        if(shiftEnterArray.length >= 3){
            shiftEnterArray.pop()
        }
        // console.log(shiftEnterArray)
        if(shiftEnterArray[0] === 13 && shiftEnterArray[1]  === 16){
            hideTopics()
            if(currentImg.classList.contains('hide')){
                currentImg.classList.remove('hide')
            }
        }
    })
})

function hideTopics(){
    dropTopicLinks.forEach(dropTopic => {
        const parent  = dropTopic.parentElement
        const greatparent = dropTopic.parentElement.parentElement.parentElement.parentElement
        console.log(greatparent)
        
        const fcs = greatparent.querySelectorAll('.step-container >.fc')
        fcs.forEach(fc => {
            if(!fc.classList.contains('hide')){
                fc.classList.add('hide')
            }
        })
    })
}


function toggleTopic(e){
    const parent = e.target.parentElement.parentElement.parentElement.parentElement
    const img = parent.querySelector('header img')
    currentImg = img
    console.log(parent)
    const fcs = parent.querySelectorAll('.step-container >.fc')
    fcs.forEach(fc => {
        if(fc.classList.contains('hide')){
            fc.classList.remove('hide')
            img.classList.add('hide')
        } else if (!fc.classList.contains('hide')) {
            hideTopics()
            fc.classList.add('hide')
            img.classList.remove('hide')
        }
    })
}

hideTopics()