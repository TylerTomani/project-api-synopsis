const stepTxts = document.querySelectorAll('.step > .step-txt')
const stepColTxts = document.querySelectorAll('.step-col > .step-txt')
const stepTxtsPAs = document.querySelectorAll('.step-txt > p > a')

const copycodesTabs = document.querySelectorAll('.code-container > .copy-code')

stepTxts.forEach(stepTxt => {
    stepTxt.addEventListener('click', e => {
        addTabIndex(e)
        removeElargeAllImgs()
        enlargeImg(e)
    })
    stepTxt.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            console.log('keydown',)
            removeElargeAllImgs()
            addTabIndex(e)
            enlargeImg(e)
        }
    })
    stepTxt.addEventListener('focus', e => {
        removeTabToImages()
        removeAsTabIndex(e)
        delargeImg(e)
        delargeVid(e)
      
    })
    stepTxt.addEventListener('focusout', e => {
        
        delargeImg(e)
        delargeVid(e)
      
    })
    
})
stepColTxts.forEach(stepColTxt => {
    stepColTxt.addEventListener('click', e => {
        addTabToImages(e)

        // let children = e.target.querySelectorAll('*')
        // children.forEach(child => {
        //     child.addEventListener('click', () => {
        //         tabImgEnlarge(e)

        //     })
        // })
        removeElargeAllImgs()

    })
    stepColTxt.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            addTabIndex(e)
            addTabToImages(e)
            removeElargeAllImgs()
        }
    })
    stepColTxt.addEventListener('focus', e => {
        removeAsTabIndex(e)
        removeTabToImages(e)
      
    })
  
    
})

function getStepColContainer(parent){
    if(parent.classList.contains('step-col')){
        return parent 
    } else if (parent.parentElement){
        return getStepContainer(parent.parentElement)
    } else {
        return null
    }
}

function addTabToImages(e){
    const parent = getStepColContainer(e.target.parentElement)
    if(parent){
        const imgContainerStpImgs = parent.querySelectorAll('.img-2-container > .step-img > img')
        if(imgContainerStpImgs){
            imgContainerStpImgs.forEach(img => {
                img.setAttribute('tabindex','1')
               
            })
        }
    }
}
function removeTabToImages(e){
    const parent = getStepColContainer(e.target.parentElement)
    console.log(parent)
    if(parent){
        const imgContainerStpImgs = parent.querySelectorAll('.img-2-container > .step-img > img')
        if(imgContainerStpImgs){
            imgContainerStpImgs.forEach(img => {
                img.removeAttribute('tabindex')
               
            })
        }
    }
}
stepTxtsPAs.forEach(stepTxtsPA =>{
    stepTxtsPA.addEventListener('focus', e => {
        // delargeImg() and delargeVid() functions are in enlargeImg.js
        delargeImg(e)   
        delargeVid(e)   
    })
})



// Enlarge Images


const allImgs = document.querySelectorAll('.step-img > img')

allImgs.forEach(img => {
    img.addEventListener('click', e => {
        // console.log(e.target)
        e.preventDefault()
        // removeElargeAllImgs()
        toggleImgClickEnlarge(e)
    })
    img.addEventListener('keydown', e => {
        // console.log(e.target)
        if(e.keyCode === 13){   
            e.preventDefault()
            // removeElargeAllImgs()
            toggleImgClickEnlarge(e)
        }
    })
    img.addEventListener('focusout', e => {
        removeElargeAllImgs()
        })
})

function toggleImgClickEnlarge(e){
    const img = e.target
    if(img.classList.contains('img-l') && !img.classList.contains('left-enlargeImg')){
        removeElargeAllImgs()
        img.classList.add('left-enlargeImg')
    } else {
        img.classList.remove('left-enlargeImg')
        // img.classList.remove('right-enlargeImg')
    }
    if(img.classList.contains('img-r') && !img.classList.contains('right-enlargeImg')){
        removeElargeAllImgs()
        img.classList.add('right-enlargeImg')
    } else {
        img.classList.remove('right-enlargeImg')
    }
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
            img.classList.remove('delargeImg')
        }
    }

}

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
function removeElargeAllImgs(){
    allImgs.forEach(img => {
        if(img.classList.contains('left-enlargeImg') || 
            img.classList.contains('right-enlargeImg') ||
            img.classList.contains('enlargeImg') 
            ){
            // console.log(img)
            img.classList.remove('left-enlargeImg')
            img.classList.remove('right-enlargeImg')
            img.classList.remove('enlargeImg')
        }
    })
}
//  Tricky bit, get img-2-2-container bigger in sequence 

// const imgs2By2Container = document.querySelectorAll('.img-2-container > .step-img')

function addTabIndex(e){
    const parent = e.target.parentElement
    const as = parent.querySelectorAll('a')
    const copyCodes = parent.querySelectorAll('.copy-code')
    if(as){
        as.forEach(a => {
            a.setAttribute('tabindex',"1")
        })
    }
    if(copyCodes){
        copyCodes.forEach(copyCode => {
            copyCode.setAttribute('tabindex','1')
        })
    }
}
function removeAsTabIndex(e){
    stepTxtsPAs.forEach(stepTxtsPA => {
        stepTxtsPA.removeAttribute('tabindex')
    })
}

