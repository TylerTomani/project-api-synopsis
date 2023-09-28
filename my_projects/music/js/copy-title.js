

const copyCodes = document.querySelectorAll('.copy-code')
let keyArr = []
copyCodes.forEach(code => {
    code.addEventListener('keydown', copyCode)
})
function copyCode(code){
    keyArr.unshift(code.keyCode)
    if(keyArr.length > 2){
        keyArr.pop()
    }
    if(keyArr[0] === 67 && keyArr[1] === 91){
        let copyText = code.target.innerText
        navigator.clipboard.writeText(copyText);
        animateCode(code)
    }
    console.log('track copied')
}

function animateCode(code){
    code.target.classList.add('animate')
    setTimeout(() => {
        // console.log(code)
        code.target.classList.remove('animate')
    },250)
    
    
}