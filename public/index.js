const imgList = ["uke1.jpg", "uke2.jpg", "../assets/uke3.jpg"]

let imgCount = 0;

function left() {
    if (imgCount > 0) {
        imgCount -= 1;
        document.getElementById("image1").src = imgList[imgCount];
    }

}

function right() {
    if (imgCount < 2) {
        imgCount += 1;
        document.getElementById("image1").src = imgList[imgCount];
    }
}

let value = 0;
function transition() {
    document.getElementById("image1").style.filter = `background(${value}%)`;
}

let genre = "";

function Drama() {
    window.location.href = "drama.html";
}

function Religious() {
    window.location.href = "religious.html";
}

function Love() {
    window.location.href = "love.html";
}

function Comedy() {
    window.location.href = "comedy.html";
}

function shift() {
    console.log(genre);
}

function home() {
    window.location.href = "index.html";
}