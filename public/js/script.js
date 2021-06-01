const navburg = document.querySelector("#navburg")
const navOverlay = document.querySelector('#nav-overlay')
const close  = document.querySelector('#close')

navburg.addEventListener('click',()=>{
    navOverlay.style.display="block"
})

close.addEventListener('click',()=>{
    navOverlay.style.display="none"
})



// $('#navburg').click(()=>{
//     $('#nav-overlay').attr('style','display:block')
// })

// $('#close').click(()=>{
//     $('nav-overlay').attr('color','red')
// })