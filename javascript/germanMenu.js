
let menuOverlay = document.getElementsByClassName("menuOverlay");
reloadMenu();

function reloadMenu() {
    for (let i = 0; i < menuOverlay.length; i++) {
        menuOverlay[i].innerHTML = "<li><a href=\"/\">Home</a></li>" +
            "<li><a href=\"/projects\">Projekte</a></li>" +
            "<li><a href=\"/contact\">Kontakt</a></li>";
    }
}