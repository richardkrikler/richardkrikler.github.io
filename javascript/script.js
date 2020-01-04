
let menuBt = document.getElementById("menuBt");
menuBt.addEventListener("click", showMenu);

let menu = document.getElementById("menu");
let menuOverlay = document.getElementById("menuOverlay");

function showMenu() {
    if (menu.classList == "") {
        menu.className = "visible animated  tdFadeIn";
    } else {
        menu.className = "visible animated  tdFadeOut";
        setTimeout(() => {
            menu.className = "";
        }, 100);
    }
}