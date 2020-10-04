let themeDots = document.getElementsByClassName('theme-dot')

for (let i=0; themeDots.length >i;i++){
    themeDots[i].addEventListener('click',function () {

        let eventlet = themeDots[i];
        let query = eventlet.outerHTML.slice(27,37);
        console.log(query)

        if (query === "light-mode"){
            document.getElementById('theme-style').setAttribute("href","static/css/style.css");
        }
        else if (query === "bllue-mode"){
            document.getElementById('theme-style').setAttribute("href","static/css/blue.css");

        }
        else if (query === "purple-mod"){
            document.getElementById('theme-style').setAttribute("href","static/css/purple.css");

        }
        else if (query === "green-mode"){
            document.getElementById('theme-style').setAttribute("href","static/css/green.css");

        }

    })
}



    window.addEventListener("DOMContentLoaded", function() {

    // get the form elements defined in your form HTML above

    let form = document.getElementById("contactform");
    let button = document.getElementById("btn");
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





















