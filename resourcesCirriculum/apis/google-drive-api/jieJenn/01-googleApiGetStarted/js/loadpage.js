const projects = document.querySelectorAll('.project')
const tutorials = document.querySelectorAll('.tutorial')
projects.forEach(project => {
    project.addEventListener('click', e => {
        loadpage(e)
    })
    project.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            loadpage(e)
        }
    })
})

// variable tutorials is located in numFocus.js
if(tutorials){

    tutorials.forEach(tutorial => {
        tutorial.addEventListener('click', e => {
            loadpage(e)
        })
        tutorial.addEventListener('keydown', e => {
            if(e.keyCode === 13){
                // console.log('keydown')
                loadpage(e)
            }
        })
    })
}
function loadpage(e){
    let tutorial = getTutorialContainer(e.target)
    // console.log(tutorial)
    const pageLink = tutorial.querySelector("a")
    console.log(pageLink)
    open(pageLink.href,'_self')
}

function getTutorialContainer(tutorial){
    if(tutorial.classList.contains('tutorial')){
        return tutorial
    } else if (tutorial.classList.contains('project')){
        return tutorial
    }
    return tutorial.parentElement
}

