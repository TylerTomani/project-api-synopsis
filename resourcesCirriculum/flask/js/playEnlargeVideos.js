const vidClicks = document.querySelectorAll('.enlarge-playVid-click')
const imgClicks = document.querySelectorAll('.enlarge-img-click')

const images = document.querySelectorAll('img')
const videos = document.querySelectorAll('video')

function deanimateImages(){
    images.forEach(img => {
        if(img.classList.contains('animate')){
            img.classList.remove('animate')
        } else if(img.classList.contains('deanimate'))
        {
            img.classList.remove('deanimate')
        } else {
            img.classList.remove('animate')
        }
    })
    videos.forEach(vid => {
        if(vid.classList.contains('animate')){
            vid.classList.remove('animate')
        } else if(vid.classList.contains('deanimate')){
            vid.classList.remove('deanimate')
        } else {
            vid.classList.remove('animate')
        }
    })
}



vidClicks.forEach(vidClick => {
    vidClick.addEventListener('click', e => {
            const parent = e.target.parentElement
            const stepContainer = getStepContainer(parent)  
            imgVideoSizeTogglePlay(parent)
        
    })
    vidClick.addEventListener('keydown', e => {
         if(e.keyCode === 13){
            const parent = e.target.parentElement
            const stepContainer = getStepContainer(parent)  
            imgVideoSizeTogglePlay(parent)
        }
        
    })
    vidClick.addEventListener('focus', e => {
        deanimateImages()
    })
})
imgClicks.forEach(imgClick => {
    imgClick.addEventListener('click', e => {
            const parent = e.target.parentElement
            const stepContainer = getStepContainer(parent)  
            imgVideoSizeTogglePlay(parent)
        
    })
    imgClick.addEventListener('keydown', e => {
        if(e.keyCode === 13){
            const parent = e.target.parentElement
            const stepContainer = getStepContainer(parent)  
            imgVideoSizeTogglePlay(parent)
        }
        
    })
    imgClick.addEventListener('focus', e => {
        deanimateImages()
    })
})

function getStepContainer(parent){
    if(parent.classList.contains('step')){
        return parent
    } else if(parent.parentElement){
        parent = getStepContainer(parent)
        return parent
    } else {
        return null
    }
}

function imgVideoSizeTogglePlay(parent){
    let img = parent.querySelector('.video-container > video') ? parent.querySelector('.video-container > video') : parent.querySelector('.img-container > img')
    
    
    if(img instanceof HTMLVideoElement){
        if(img){
            if (img.classList.contains('animate')) {
                parent.style.position = 'static';
                img.classList.remove('animate');
                img.classList.add('deanimate'); 
                img.currentTime = 0
                img.pause()
                
            } else {
                parent.style.position = 'relative';
                img.classList.remove('deanimate');
                img.classList.add('animate');
                img.currentTime = 0
                img.play()
                
            }
        }
    } else if (img instanceof HTMLImageElement) {
        if (img.classList.contains('animate')) {
            parent.style.position = 'static';
            img.classList.remove('animate');
            img.classList.add('deanimate'); 
            
        } else {
            parent.style.position = 'relative';
            img.classList.remove('deanimate');
            img.classList.add('animate');

            
        }
    }
}