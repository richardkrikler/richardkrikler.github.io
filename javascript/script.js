let nav = document.getElementsByTagName("nav")[0];

let menuBt = document.getElementById("menuBt");
menuBt.addEventListener("click", showMenu);

let menu = document.getElementById("menu");

function showMenu() {
    if (menu.classList == "") {
        nav.className = "visible";
        menu.className = "visible animated tdFadeIn";
    } else {
        nav.className = "";
        menu.className = "visible animated tdFadeOut";
        setTimeout(() => {
            menu.className = "";
        }, 100);
    }
}


function getCookie(cname) {
    let cookies = (document.cookie).split(";");

    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i];
        while (c.charAt(0) == ' ') {
            c = c.substr(1);
        }
        if (c.indexOf(cname + "=") == 0) {
            return c.substr((cname + 1).length, c.length);
        }
    }
}

// Detect if the website is used in a mobile browser
function detectmob() {
    if (navigator.userAgent.match(/Android/i) ||
        navigator.userAgent.match(/webOS/i) ||
        navigator.userAgent.match(/iPhone/i) ||
        navigator.userAgent.match(/iPad/i) ||
        navigator.userAgent.match(/iPod/i) ||
        navigator.userAgent.match(/BlackBerry/i) ||
        navigator.userAgent.match(/Windows Phone/i)
    ) {
        return true;
    } else {
        return false;
    }
}
