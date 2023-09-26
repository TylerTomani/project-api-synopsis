const dropParts = document.querySelectorAll('.dropPart')


function hidedropParts(){
    dropParts.forEach(dropPart => {
        const parent = dropPart.parentElement
        const stepsContainer = parent.querySelector('.steps-container')
        if(stepsContainer){

            stepsContainer.classList.add('hide')
        }
    })
}
hidedropParts()

dropParts.forEach(dropPart=> {
    dropPart.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            e.preventDefault()
            console.log('part')
            togglePart(e)
        } 
    })
    dropPart.addEventListener('click', e => {
        console.log('part')
        e.preventDefault()
        togglePart(e)
    })
    dropPart.addEventListener('focusin', e => {
        // delargeAllVideo()
    })
})

function togglePart(e) {
    let parent = getPartContainer(e.target.parentElement)
    let stepsContainer = parent.querySelector('.steps-container')
    // console.log(stepsContainer)
    let answers = stepsContainer.querySelectorAll('.step-col > .answer-container')
    answers.forEach(answer => {
        if(!answer.classList.contains('hide')){
            answer.classList.add('hide')
        }
    })
    if(stepsContainer.classList.contains('show')){
        stepsContainer.classList.remove('show')
        stepsContainer.classList.remove('hide')
    }
    if(stepsContainer.classList.contains('hide')){
        stepsContainer.classList.remove('hide')
    } else {
        stepsContainer.classList.add('hide')
    }
}


function getPartContainer(parent){
    if(parent.classList.contains('part')){
        return parent
    } else if (parent.parentElement){
        return getPartContainer(parent.parentElement)
    } else {
        return null
    }
}
