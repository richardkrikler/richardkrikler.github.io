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
            window.location.href = "/en" + window.location.pathname;
        }
    } else {
        if (language == "de") {
            window.location.href = window.location.pathname.substring(3, window.location.pathname.length);
        } else {
            if (!window.location.pathname.includes("/en/404") && document.title.includes("404")) {
                window.location.href = "/en/404";
            }
        }
    }
}



let menuOverlay = document.getElementsByClassName("menuOverlay");
reloadMenu();

function reloadMenu() {
    if (language == "en") {
        for (let i = 0; i < menuOverlay.length; i++) {
            menuOverlay[i].innerHTML = "<li><a href=\"/en\">Home</a></li>" +
                "<li><a href=\"/en/projects\">Projects</a></li>" +
                "<li><a href=\"/blog\">Blog</a></li>" +
                "<li><a href=\"/en/contact\">Contact</a></li>" +
                "<li><select class = \"languageList\">" +
                "<option value = \"de\">DE</option>" +
                "<option value = \"en\">EN</option>" +
                "</select > </li>";
        }
    } else {
        for (let i = 0; i < menuOverlay.length; i++) {
            menuOverlay[i].innerHTML = "<li><a href=\"/\">Home</a></li>" +
                "<li><a href=\"/projects\">Projekte</a></li>" +
                "<li><a href=\"/blog\">Blog</a></li>" +
                "<li><a href=\"/contact\">Kontakt</a></li>" +
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
            //                                                      global (all sites under the root folder)
            document.cookie = "language=" + languageList[i].value + "; path=/";
            loadCookies();
        })
    }
    
}
