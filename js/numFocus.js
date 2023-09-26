const tutorials = document.querySelectorAll('.tutorial')
addEventListener('keydown', e => {
    let key = e.key
    tutorials.forEach(tutorial => {
        const tutorialId = tutorial.getAttribute('id') 
        if(tutorialId){
            if(key === tutorialId[tutorialId.length - 1]){
                tutorial.focus()
            }
        }
    })
})

const playlists = document.querySelectorAll('.playlist-container')
addEventListener('keydown', e => {
    let key = e.key
    playlists.forEach(playlist => {
        const playlistId = playlist.getAttribute('id')
        if(key === playlistId[playlistId.length - 1]){
            playlist.focus()
        }
    })
})