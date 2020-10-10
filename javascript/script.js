let nav = document.getElementsByTagName("nav")[0];

let menuBt = document.getElementById("menuBt");
menuBt.addEventListener("click", showMenu);

let menu = document.getElementById("menu");

let menuOverlay = document.getElementsByClassName("menuOverlay");
window.addEventListener("load", function () {
    for (let i = 0; i < menuOverlay.length; i++) {
        menuOverlay[i].innerHTML = "<li><a href=\"/\">Home</a></li>" +
            "<li><a href=\"/#projects\">Projects</a></li>" +
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

let images = document.getElementsByClassName("images");
for (let i = 0; i < images.length; i++) {
    let currentId = images[i].id;
    let idElement = document.getElementById(currentId);
    for (let j = 0; j < idElement.children.length; j++) {
        idElement.children[j].addEventListener("click", function (e) {
            BigPicture({
                el: e.target,
                gallery: '#' + currentId,
            })
        })
    }
}