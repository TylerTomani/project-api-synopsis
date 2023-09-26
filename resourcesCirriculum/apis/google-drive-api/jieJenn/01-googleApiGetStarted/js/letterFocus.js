
addEventListener('keydown', e => {
    let key = e.key
    // projects variable located in loadpage.js
    projects.forEach(project => {
        const projectId = project.getAttribute('id')
        if(key === projectId[0]){
            project.focus()
        }
    })
})