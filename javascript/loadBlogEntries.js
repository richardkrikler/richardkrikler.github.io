let main = document.getElementsByTagName("main")[0];
let blogs = ["raspberryPiDmxLight"];
let blogCounter = 0;

for (; blogCounter < blogs.length; blogCounter++) {
    post(blogs[blogCounter] + "/entry.txt", "text/xml charset=utf-8", "", "createElements");
}


function createElements(text) {
    let hr = document.createElement("hr");
    main.appendChild(hr);


    let entryLines = text.split("\n");
    let entry = document.createElement("a");
    entry.className = "blogA";
    entry.href = blogs[blogCounter];

    let left = document.createElement("div");
    entry.appendChild(left);
    
    let entryH3 = document.createElement("h3");
    entryH3.textContent = entryLines[0];
    left.appendChild(entryH3);


    let img = document.createElement("img");
    img.src = blogs[blogCounter] + "/images/entry.png";
    img.alt = "Blog specific Picture";
    entry.appendChild(img);

    for (let j = 1; j < entryLines.length; j++) {
        let p = document.createElement("p");
        p.textContent = entryLines[j];
        left.appendChild(p);
    }

    main.appendChild(entry);
}