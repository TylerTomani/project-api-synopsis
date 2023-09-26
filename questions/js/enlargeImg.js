
// script2.js




const imgs2By2Container = document.querySelectorAll('.img-2-2-container > .step-img')

const allImgs = document.querySelectorAll('.step-img > img')
allImgs.forEach(img => {
    img.addEventListener('click', e => {
        // console.log(e.target)
        e.preventDefault()
        removeElargeAllImgs()
        imgClickedEnlarged(e)
    })
})

function removeElargeAllImgs(){
    allImgs.forEach(img => {
        if(img.classList.contains('left-enlargeImg') || 
            img.parentElement.classList.contains('right-enlargeImg') ||
            img.parentElement.classList.contains('enlargeImg') 
            ){
            img.parentElement.classList.remove('left-enlargeImg')
            img.parentElement.classList.remove('right-enlargeImg')
            img.parentElement.classList.remove('enlargeImg')
        }
    })
}

function imgClickedEnlarged(e){
    const img = e.target
    if(img.classList.contains('img-l') && !img.classList.contains('left-enlargeImg')){
        img.classList.add('left-enlargeImg')
    } else {
        img.classList.remove('left-enlargeImg')
    }
  
    if(img.classList.contains('img-r') && !img.classList.contains('right-enlargeImg')){
        // img.classList.add('right-enlargeImg')
        img.classList.add('right-enlargeImg')
    } else {
        img.classList.remove('right-enlargeImg')
    }
    console.log(img)
}

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

// stepTxt in stepFocus.js
stepTxts.forEach(stepTxt => {
    stepTxt.addEventListener('click', e => {
        console.log('ste--txt clicked')
        removeElargeAllImgs()
        enlargeImg(e)
    })
    stepTxt.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            console.log('keydown')
            imgClickedEnlarged(e)
            removeElargeAllImgs()
            enlargeImg(e)
        }        
    })
})


function delargeImg(e){

    const parent = getStepContainer(e.target.parentElement)
    if(parent){

        const img = parent.querySelector('.step-img > img')
        if(img){
            img.classList.remove('enlargeImg')   
        }
        const vid = parent.querySelector('.step-vid > video')
        if(vid){
            vid.classList.remove('enlargeImg')   
        }
    }
}

function getStepContainer(parent){
    if(parent.classList.contains('step')){
        return parent 
    } else if (parent.parentElement){
        return getStepContainer(parent.parentElement)
    } else {
        return null
    }
}