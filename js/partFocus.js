let partFocused = false
const parts = document.querySelectorAll('.part')

addEventListener('keydown', e => {
    let key = e.key
    // dropParts variable is in dropPart.js
    parts.forEach(part => {
        const partId = part.getAttribute('id') 
        if(partId && !partFocused){
            console.log(part)
            if(key === partId[partId.length - 1]){
                console.log(part)
                part.focus()
            }
        }
    })
})
