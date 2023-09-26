const dropParts = document.querySelectorAll('.dropPart')


function hidedropParts(){
    dropParts.forEach(dropPart => {
        const parent = dropPart.parentElement
        const stepsContainer = parent.querySelector('.steps-container')
        stepsContainer.classList.add('hide')
    })
}
hidedropParts()

dropParts.forEach(dropPart=> {
    dropPart.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            e.preventDefault()
            togglePart(e)
        } 
    })
    dropPart.addEventListener('click', e => {
        e.preventDefault()
        togglePart(e)
    })
})

function togglePart(e) {
    let parent = getPartContainer(e.target.parentElement)
    let stepsContainer = parent.querySelector('.steps-container')
    console.log(stepsContainer)
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
