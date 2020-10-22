
let theme = localStorage.getItem('theme')

if(theme == null){
    setTheme('light')
}else{
    setTheme(theme)
}

    let themeDots = document.getElementsByClassName('theme-dot')


for (let i=0; themeDots.length > i; i++){
    themeDots[i].addEventListener('click', function(){
        let mode = this.dataset.mode
        console.log('Option clicked:', mode)
        setTheme(mode)
    })
}

function setTheme(mode){
    if(mode === 'light'){
        $("#theme-style").attr("href","static/css/light.css")    }

    else if(mode === 'blue'){
        $("#theme-style").attr("href","static/css/blue.css")
    }

    else if(mode === 'green'){
        $("#theme-style").attr("href","static/css/green.css")    }

    else if(mode === 'purple'){
        $("#theme-style").attr("href","static/css/purple.css")    }

    localStorage.setItem('theme', mode)
}

let btn = document.getElementById('btn');
btn.disabled = true;
function check(){
    let name = document.getElementById("name");
    let sub = document.getElementById('sub');
    let email = document.getElementById('Email');
    let msg = document.getElementById('msg');
    let btn = document.getElementById('btn');
    console.log(name.value)
    btn.disabled = name.value === "" || name.value == null ||
        sub.value === '' || sub.value == null || email.value === '' ||
        email.value == null || msg.value === '' || msg.value == null  ;

}
window.addEventListener("keyup", check);




    window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above

    let form = document.getElementById("contactform");
    let status = document.getElementById("my-form-status");

    // Success and Error functions for after the form is submitted

    function success() {
    form.reset();
    status.innerHTML = "Thanks :)";
}

    function error() {
    status.innerHTML = "Oops! There was a problem.";
}

    // handle the form submission event


    form.addEventListener("submit", function(ev) {
        ev.preventDefault();


    let data = new FormData(form);
    ajax(form.method, form.action, data, success, error);
});

});


    // helper function for sending an AJAX request

    function ajax(method, url, data, success, error) {
    let xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
    if (xhr.readyState !== XMLHttpRequest.DONE) return;
    if (xhr.status === 200) {
    success(xhr.response, xhr.responseType);
} else {
    error(xhr.status, xhr.response, xhr.responseType);
}
};
    xhr.send(data);
}

$("#btn2").click(()=>{
   console.log("hey")
})















