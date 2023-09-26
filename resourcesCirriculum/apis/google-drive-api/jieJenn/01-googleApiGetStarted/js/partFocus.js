let partFocused = false
const parts = document.querySelectorAll('.part')

addEventListener('keydown', e => {
    let key = e.key
    // dropParts variable is in dropPart.js
    dropParts.forEach(dropPart => {
        const dropPartId = dropPart.getAttribute('id') 
        if(dropPartId && !partFocused){
            if(key === dropPartId[dropPartId.length - 1]){
                dropPart.focus()
            }
        }
    })
})
