
const stepTxts = document.querySelectorAll('.step-txt')
const stepTxtsPAs = document.querySelectorAll('.step-txt > p > a')

const copycodesTabs = document.querySelectorAll('.code-container > .copy-code')


stepTxts.forEach(stepTxt => {
    stepTxt.addEventListener('click', e => {
        removeAllTabIndexs()
        addTabIndex(e)
    })
    stepTxt.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            addTabIndex(e)
        }
    })
    stepTxt.addEventListener('focus', e => {
        // console.log('focus')
        removeAsTabIndex(e)
        delargeImg(e)
        // delargeVid(e)
      
    })
    stepTxt.addEventListener('focusout', e => {
        // console.log('focusout')
        // removeAsTabIndex(e)
        delargeImg(e)
        // delargeVid(e)
      
    })
    
})


stepTxtsPAs.forEach(stepTxtsPA =>{
    stepTxtsPA.addEventListener('focus', e => {
        // delargeImg() and delargeVid() functions are in enlargeImg.js
        delargeImg(e)   
        delargeVid(e)   
    })
})

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


// Negate numpPart.js script so num keys focus on part steps instead

// addEventListener('keydown', e => {
//     let key = e.key
//     stepTxts.forEach(stepTxt => {
//         const parent = stepTxt.parentElement
//         const h3 = stepTxt.querySelector('h3')
//     })
// })