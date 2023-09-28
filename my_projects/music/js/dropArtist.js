
const artistDropLinks = document.querySelectorAll('.artist-drop-link')

artistDropLinks.forEach(artistLink => {
    let id = artistLink.getAttribute('id')
    let parent = artistLink.parentElement
    let gparent = parent.parentElement
    let ggparent = gparent.parentElement
    console.log(ggparent)
    let artistDiscs = ggparent.querySelectorAll(`.${id}`)
    artistDiscs.forEach(artistDisc => {
        if(!artistDisc.classList.contains('hide')){
            artistDisc.classList.add('hide')
        }
    })
    artistLink.addEventListener('click', e => {
        let id = e.target.getAttribute('id')
        let parent = artistLink.parentElement
        let gparent = parent.parentElement
        let ggparent = gparent.parentElement
        console.log(ggparent)
        let artistDisc = ggparent.querySelector(`.${id}`)
            if(artistDisc.classList.contains('hide')){
                artistDisc.classList.remove('hide')
            } else {
                artistDisc.classList.add('hide')
            }
        })
})