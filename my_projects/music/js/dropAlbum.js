
const albumDropLink = document.querySelectorAll('.albumDropLink')
const tracksColumns = document.querySelectorAll('.album-track-row > .album-tracks-col')

function hideTracksColumns(){
    tracksColumns.forEach(tracksColumn => {
    if(!tracksColumn.classList.contains('hide')){
        tracksColumn.classList.add('hide')
    }
    // console.log(tracksColumn)
    })  
}
hideTracksColumns()

albumDropLink.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault()
        e.stopPropagation()
        let parent = e.target.parentElement
        let gparent = parent.parentElement
        let ggparent = gparent.parentElement
        let tracks = ggparent.querySelector('.album-track-row > .album-tracks-col')
        if(tracks.classList.contains('hide')){
            hideTracksColumns()
            tracks.classList.remove('hide')
        } else {
            tracks.classList.add('hide')
        }

    })    
})
copyCodes.forEach(h4 => {
    h4.addEventListener('focusout', e => {
        console.log(h4)
        // hideTracksColumns()
    })
})