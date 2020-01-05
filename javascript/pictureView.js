// let pictureView = document.getElementById("pictureView");
// let images = document.getElementsByTagName("img");
// for (let i = 0; i < images.length; i++) {
//     images[i].addEventListener("click", showImage);
// }

// let imageDestination;
// function showImage(event) {
//     let image = event.target;
//     if (image.className.indexOf("View") != -1) {
//         image.className = image.className.substring(0,image.className.indexOf("View"));
//         pictureView.className = pictureView.className.substring(0,pictureView.className.indexOf("View"));

//         imageDestination.appendChild(image);
//     } else {
//         image.className += " View";
//         pictureView.className += " View"

//         imageDestination = image.parentElement;
//         pictureView.appendChild(image);
//     }
// }