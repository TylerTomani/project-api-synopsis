let partFocused = false
const parts = document.querySelectorAll('.part')

addEventListener('keydown', e => {
    let key = e.key
    // dropParts variable is in dropPart.js
    parts.forEach(part => {
        const partId = part.getAttribute('id') 
        if(partId && !partFocused){
            if(key === partId[0]){
                part.focus()
            }
        }
    })
})
