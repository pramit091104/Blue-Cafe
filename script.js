function gotologin() {
    window.location.href = "login.html";
}

function BTable() {
    window.location.href = "BTable.html";
}

window.addEventListener("scroll", function () {
    let header = document.querySelector("header");
    let bannerHeight = document.querySelector(".container").offsetHeight;

    if (window.scrollY >= (bannerHeight-70)) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
});
