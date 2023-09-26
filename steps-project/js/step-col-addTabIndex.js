const txtContainers = document.querySelectorAll('.question-text')
// const as = document.querySelectorAll('.text-container > p a')
const copycodes = document.querySelectorAll('.code-container > .copy-code')
const containers = document.querySelectorAll('.answer-container')

function removeAllTabIndexs(){
    containers.forEach(container => {
        const as = container.querySelector('.answer-txt > a')
        as.forEach(a => {
            a.removeAttribute('tabindex')
        })
        copycodes.forEach(copycode => {
            container.removeAttribute('tabindex')
        })
    })
}

containers.forEach(container => {
    container.addEventListener('click', e => {
        addAnswerTabIndex(e)
    })
    container.addEventListener('focus', e => {
        // e.target.setAttribute('tabindex','1')
        removeAnswerTabIndex(e)
    })
    container.addEventListener('focusout', e => {
        // e.target.removeAttribute('tabindex')
    })
})

containers.forEach(container => {
    container.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            addAnswerTabIndex(e)
        }
        
    })
    container.addEventListener('focus', e => {
        // removeAsTabIndex()
        // deanimateImages()
        
    })
})
copycodes.forEach(container => {
    container.addEventListener('click', e => {
        addAnswerTabIndex(e)
    })
    container.addEventListener('focus', e => {
        // e.target.setAttribute('tabindex','1')
        removeAnswerTabIndex(e)
    })
    container.addEventListener('focusout', e => {
        // e.target.removeAttribute('tabindex')
    })
})




function addAnswerTabIndex(e){
    // console.log(e)
    // console.log('add')
    const pAs = e.target.querySelectorAll('.answer-txt > p a')
    const uls = e.target.querySelectorAll('.answer-txt > ul > li')
    const copycodes = e.target.querySelectorAll('.answer-txt > .code-container > .copy-code')
    pAs.forEach(pa => {
        pa.setAttribute('tabindex','1')
    })
    uls.forEach(ul => {
        ul.setAttribute('tabindex','1')
    })
    copycodes.forEach(copycode => {
        copycode.setAttribute('tabindex','1')
    })

}
function removeAnswerTabIndex(e){
    const pAs = e.target.querySelectorAll('.answer-txt > p a')
    const uls = e.target.querySelectorAll('.answer-txt > ul > li')
    const copycodes = e.target.querySelectorAll('.answer-txt > .code-container > .copy-code ')
    pAs.forEach(pa => {
        pa.removeAttribute('tabindex')
    })
    uls.forEach(ul => {
        ul.removeAttribute('tabindex')
    })
    copycodes.forEach(copycode => {
        copycode.removeAttribute('tabindex')
    })
}



txtContainers.forEach(txtContainer => {
    txtContainer.addEventListener('focus', e => {
        console.log(txtContainer)
        removeAllTabIndexs()
    })
})



