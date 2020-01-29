window.addEventListener("load", loadCookies);

let language;
let languageList;

function loadCookies() {
    // console.log("Cookie: " + getCookie("language"));
    language = getCookie("language");
    if (language == undefined) {
        language = window.navigator.language.substring(0, 2);
    }

    reloadMenu();
    for (let i = 0; i < languageList.length; i++) {
        languageList[i].value = language;
    }

    if (!window.location.pathname.includes("/en")) {
        if (language != "de") {
            if (!window.location.pathname.includes("/en/404") && document.title.includes("404")) {
                window.location.href = "en/404";
            }

            window.location.href = "en" + window.location.pathname;
        }
    } else {
        if (language == "de") {
            window.location.href = ".." + window.location.pathname.substring(3, window.location.pathname.length);
        }
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



let menuOverlay = document.getElementsByClassName("menuOverlay");
reloadMenu();

function reloadMenu() {
    if (language == "en") {
        for (let i = 0; i < menuOverlay.length; i++) {
            menuOverlay[i].innerHTML = "<li><a href=\"/en\">Home</a></li>" +
                "<li><a href=\"en/projects\">Projects</a></li>" +
                "<li><a href=\"en/contact\">Contact</a></li>" +
                "<li><select class = \"languageList\">" +
                "<option value = \"de\">DE</option>" +
                "<option value = \"en\">EN</option>" +
                "</select > </li>";
        }
    } else {
        for (let i = 0; i < menuOverlay.length; i++) {
            menuOverlay[i].innerHTML = "<li><a href=\"/\">Home</a></li>" +
                "<li><a href=\"projects\">Projekte</a></li>" +
                "<li><a href=\"contact\">Kontakt</a></li>" +
                "<li><select class = \"languageList\">" +
                "<option value = \"de\">DE</option>" +
                "<option value = \"en\">EN</option>" +
                "</select > </li>";
        }
    }


    languageList = document.getElementsByClassName("languageList");
    for (let i = 0; i < languageList.length; i++) {
        // languageList[i].addEventListener("click", languageAnimation);
        languageList[i].addEventListener("change", function () {
            document.cookie = "language=" + languageList[i].value + "; path=/";
            //                                                      global (all sites under the root folder)
            loadCookies();
        })
    }
    
}

// let languageCounter = 0;
// function languageAnimation() {
//     if (detectmob) {
//         let options = event.target.children;
//         if (languageCounter % 2 == 0) {
//             for (let i = 0; i < options.length; i++) {
//                 options[i].className = "animated tdFadeIn";            
//             }
//         } else {
//             for (let i = 0; i < options.length; i++) {
//                 options[i].className = "";            
//             }         
//         }
//     }
//     languageCounter++;
// }


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

