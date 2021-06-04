const navburg = document.querySelector("#navburg")
const navOverlay = document.querySelector('#nav-overlay')
const close  = document.querySelector('#overlay-nav')
const s1 = document.querySelector('#s1')
const s2 = document.querySelector('#s2')


navburg.addEventListener('click',()=>{
    navOverlay.style.maxHeight='200vh'
    s1.style.display = 'none'
    s2.style.display = 'none'
})

close.addEventListener('click',()=>{
    navOverlay.style.maxHeight="0"
    s1.style.display = 'block'
    s2.style.display = 'block'
})

document.querySelectorAll('.nlink').forEach(item => {
    item.addEventListener('click',()=>{
        navOverlay.style.maxHeight="0"
        s1.style.display = 'block'
        s2.style.display = 'block'
    })
})

// $('#navburg').click(()=>{
//     $('#nav-overlay').attr('style','display:block')
// })

// $('#close').click(()=>{
//     $('nav-overlay').attr('color','red')
// })