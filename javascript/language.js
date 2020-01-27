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
            menuOverlay[i].innerHTML = "<li><a href=\"index.html\">Home</a></li>" +
                "<li><a href=\"projects.html\">Projects</a></li>" +
                "<li><a href=\"contact.html\">Contact</a></li>" +
                "<li><select class = \"languageList\">" +
                "<option value = \"de\">DE</option>" +
                "<option value = \"en\">EN</option>" +
                "</select > </li>";
        }
    } else {
        for (let i = 0; i < menuOverlay.length; i++) {
            menuOverlay[i].innerHTML = "<li><a href=\"index.html\">Home</a></li>" +
                "<li><a href=\"projects.html\">Projekte</a></li>" +
                "<li><a href=\"contact.html\">Kontakt</a></li>" +
                "<li><select class = \"languageList\">" +
                "<option value = \"de\">DE</option>" +
                "<option value = \"en\">EN</option>" +
                "</select > </li>";
        }
    }


    languageList = document.getElementsByClassName("languageList");
    for (let i = 0; i < languageList.length; i++) {
        languageList[i].addEventListener("change", function () {
            document.cookie = "language=" + languageList[i].value + "; path=/";
            //                                                      global (all sites under the root folder)
            loadCookies();
        })
    }
}