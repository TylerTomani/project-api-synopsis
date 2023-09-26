const subjectContainers = document.querySelectorAll('.subject-container')
const dropSubjects = document.querySelectorAll('.dropSubject')
function hideSubjects(){
    subjectContainers.forEach(subjectContainer => {
        const subjectTutorialsContainer = subjectContainer.querySelector('.subject-tutorials-container')
        subjectTutorialsContainer.classList.add('hide')
    })
}
hideSubjects()

dropSubjects.forEach(dropSubject => {
    dropSubject.addEventListener('click', e => {
        console.log('dropSubject:','click')
        e.preventDefault()
        toggleSubject(e)
    })
    dropSubject.addEventListener('keydown', e => {
        if(e.keyCode === 13){   
            console.log('dropSubject:','keydown')
            e.preventDefault()
            toggleSubject(e)
        }
    })

})

function toggleSubject(e){
    const parent =  getSubjectContainer(e.target)
    const tutorialContainer = parent.querySelector('.subject-tutorials-container')
    
    if(tutorialContainer.classList.contains('show')){
        tutorialContainer.classList.remove('show')
    } else if(tutorialContainer.classList.contains('hide')){
        tutorialContainer.classList.remove('hide')
    } else {
        tutorialContainer.classList.add('hide')
    }
}

function getSubjectContainer(el){
    if(el.classList.contains('subject-container')){
        return el
    }
    if(!el.classList.contains('subject-container')){
        return getSubjectContainer(el.parentElement)
    }  else {
        return el
    }

}