
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