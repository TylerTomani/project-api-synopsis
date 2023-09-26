const dropTopicsFocus= document.querySelectorAll('.drop-topic')
let selectedId


addEventListener('keydown', e => {
    dropTopicsFocus.forEach(dropTopic => {
        if(dropTopic.hasAttribute('id') && dropTopic.id[0] === e.key){
            dropTopic.focus()
        }
    })
})