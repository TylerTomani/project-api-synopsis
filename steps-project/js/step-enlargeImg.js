// stepTxt in stepFocus.js
// const stepTxts = document.querySelectorAll('.step-txt')
stepTxts.forEach(stepTxt => {
    stepTxt.addEventListener('click', e => {
        enlargeImg(e)
    })
    stepTxt.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            enlargeImg(e)
        }        
    })
})

function enlargeImg(e){
    const parent = e.target.parentElement
    const img = parent.querySelector('.step-img > img')
    if(img){
        if(!img.classList.contains('enlargeImg') && img.classList.contains('delargeImg')){
            img.classList.add('enlargeImg')
            img.classList.remove('delargeImg')
        } else if (!img.classList.contains('enlargeImg')){
            img.classList.add('enlargeImg')
        } else {
            img.classList.remove('enlargeImg')
        }
    }

}
function delargeImg(e){

    const parent = getStepContainer(e.target.parentElement)
    const img = parent.querySelector('.step-img > img') 
    if(img){
        img.classList.remove('enlargeImg')   
    }
    const vid = parent.querySelector('.step-vid > video') ? parent.querySelector('.step-vid > video') : null
    if(vid){
        vid.classList.remove('enlargeImg')   
    }
}

function getStepContainer(parent){
    if(parent.classList.contains('step') || parent.classList.contains('step-col')){
        return parent 
    } else if (parent.parentElement){
        return getStepContainer(parent.parentElement)
    } else {
        return null
    }
}