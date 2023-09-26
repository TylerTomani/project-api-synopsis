const txtContainers = document.querySelectorAll('.text-container')
const as = document.querySelectorAll('.text-container > p a')

function removeAsTabIndex(){
    as.forEach(a => {
        a.removeAttribute('tabindex')
    })
}

txtContainers.forEach(txtContainer => {
    txtContainer.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            let as = e.target.querySelectorAll('p a')    
            as.forEach(a => {
                a.setAttribute('tabindex',1)
            })
        }    
    })
    txtContainer.addEventListener('focus', e => {
        removeAsTabIndex()
        
    })
})
