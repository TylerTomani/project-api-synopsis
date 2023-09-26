const parts = document.querySelectorAll('.dropPart')

parts.forEach(part => {
    
})

function hideParts(){
    parts.forEach(part => {
        const parent = part.parentElement
        const stepsContainer = part.querySelector('.steps-container')
        stepsContainer.classList.add('hide')
    })
}