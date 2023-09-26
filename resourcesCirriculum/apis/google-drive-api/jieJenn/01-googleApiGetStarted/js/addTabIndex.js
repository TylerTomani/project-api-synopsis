// const txtContainers = document.querySelectorAll('.text-container')
// const as = document.querySelectorAll('.text-container > p a')
const copycodesTabs = document.querySelectorAll('.code-container > .copy-code')

function removeAsTabIndex(){
 
    copycodesTabs.forEach(copycode => {
        copycode.removeAttribute('tabindex')
    })
}

txtContainers.forEach(txtContainer => {
    txtContainer.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            let as = e.target.querySelectorAll('p a')    
            let copycodes = e.target.querySelectorAll('.code-container > .copy-code')
            as.forEach(a => {
                a.setAttribute('tabindex',1)
            })
            copycodes.forEach(copycode => {
                copycode.setAttribute('tabindex',1)
            })
        }
        
    })
    txtContainer.addEventListener('focus', e => {
        removeAsTabIndex()
        deanimateImages()
        
    })
})
