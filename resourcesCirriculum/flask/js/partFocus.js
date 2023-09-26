const parts = document.querySelectorAll('.part')

function removeAsTabIndex(){
    parts.forEach(part => {
        part.removeAttribute('tabindex')
    })
}

addEventListener('keydown', e => {
    let key = e.key
    parts.forEach(part => {
        if(part.innerText[part.innerText.length -1] === key){
            part.focus()
        }
    })

})