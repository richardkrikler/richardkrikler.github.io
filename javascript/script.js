let nav = document.getElementsByTagName("nav")[0];

let menuBt = document.getElementById("menuBt");
menuBt.addEventListener("click", showMenu);

let menu = document.getElementById("menu");

let menuOverlay = document.getElementsByClassName("menuOverlay");
window.addEventListener("load", function () {
    for (let i = 0; i < menuOverlay.length; i++) {
        menuOverlay[i].innerHTML = "<li><a href=\"/\">Home</a></li>" +
            "<li><a href=\"/#projects\">Projects</a></li>" +
            "<li><a href=\"/blog\">Blog</a></li>" +
            "<li><a href=\"/contact\">Contact</a></li>";
    }
});

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
