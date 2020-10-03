let themeDots = document.getElementsByClassName('theme-dot')

for (let i=0; themeDots.length >i;i++){
    themeDots[i].addEventListener('click',function () {

        let eventvar = themeDots[i];
        let query = eventvar.outerHTML.slice(27,37);
        console.log(query)

        if (query === "light-mode"){
            document.getElementById('theme-style').setAttribute("href","style.css");
        }
        else if (query === "bllue-mode"){
            document.getElementById('theme-style').setAttribute("href","blue.css");

        }
        else if (query === "purple-mod"){
            document.getElementById('theme-style').setAttribute("href","purple.css");

        }
        else if (query === "green-mode"){
            document.getElementById('theme-style').setAttribute("href","green.css");

        }

    })

}
