
    const playlistContainers = document.querySelectorAll('.playlist-container')

    function hidePlaylist(){
        playlistContainers.forEach(playlistContainer => {
            const tutorialContainers = playlistContainer.querySelector('.playlist-tutorials-container')
            tutorialContainers.classList.add('hide')
        })
    }
    hidePlaylist()
    
    playlistContainers.forEach(playlistContainer => {
        playlistContainer.addEventListener('click', e => {
    
            togglePlaylist(e)
        })
        playlistContainer.addEventListener('keydown', e => {
            if(e.keyCode === 13){   
                togglePlaylist(e)
            }
        })
    
    })
    
    function togglePlaylist(e){
        const parent =  getPlaylistContainer(e.target)
        console.log("togglePlaylist:",parent)
        const header = parent.querySelector('header')
        const img = header.querySelector('img')
        const tutorialContainer = parent.querySelector('.playlist-tutorials-container')
        // console.log(tutorialContainer)
        if(tutorialContainer.classList.contains('show')){
            tutorialContainer.classList.remove('show')
        } else if(tutorialContainer.classList.contains('hide')){
            tutorialContainer.classList.remove('hide')
            img.classList.add('hide')
    
        } else {
            tutorialContainer.classList.add('hide')
            img.classList.remove('hide')
        }
    }
    
    function getPlaylistContainer(el){
        if(el.classList.contains('playlist-container')){
            return el
        }
        if(!el.classList.contains('playlist-container')){
            return getPlaylistContainer(el.parentElement)
        }  else {
            return el
        }
    
    }
