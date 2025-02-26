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

let isVisible = false; // Track visibility state

function toggle_p_info() {
  let hiddenBox = document.getElementById("p_info");

  isVisible = !isVisible; // Toggle state
  hiddenBox.style.display = isVisible ? "flex" : "none";
}

function hideDivOnEsc(event) {
  if (event.key === "Escape") {
    document.getElementById("p_info").style.display = "none";
    isVisible = false; // Reset state
  }
}

// Event Listeners
document.getElementById("pitem2").addEventListener("click", toggle_p_info);
document.addEventListener("keydown", hideDivOnEsc);
