const copycodes = document.querySelectorAll('.copy-code')
const codeContainers = document.querySelectorAll('.code-containers')

let cntrlCarray = []
copycodes.forEach(copycode => {

    copycode.addEventListener('keydown' , e => {        
        cntrlCarray.unshift(e.keyCode)
        if(cntrlCarray.length > 3){
            cntrlCarray.pop()
        }
        if(cntrlCarray[0] === 67 && cntrlCarray[1] === 17){
            animate(e)
        }
        console.log(cntrlCarray)
    })
    copycode.addEventListener('click', e => {
        e.preventDefault()
        animate(e)
    })

})

function animate(e){
    e.target.style.boxShadow = '2px 2px 2px 2px black'
    // e.target.style.border = "4px solid whitesmoke"
    setInterval(() => {
        e.target.style.boxShadow = 'none'
        e.target.style.border = "none"
        e.target.style.transition = 'all 350ms'
    },50)
    let txt = e.target.innerText
    copyToClip(txt)
}

function copyToClip(txt){

    async function copyTextToClipboard(text) {
        try {
          await navigator.clipboard.writeText(text);
        //   console.log("Text copied to clipboard:", text);
        } catch (err) {
          console.error("Unable to copy text to clipboard:", err);
        }
      }
      
      const textToCopy = txt;
      copyTextToClipboard(textToCopy);
}

