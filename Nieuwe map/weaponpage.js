<<<<<<< HEAD
function openWeapons() {
    document.getElementById("weapon-popup").style.display = "flex";
    document.body.style.overflow = "hidden"; // stops the page scrolling behind the popup
}

function closeWeapons() {
    document.getElementById("weapon-popup").style.display = "none";
    document.body.style.overflow = "";
}

// click background= close)
function closeOnBackground(event) {
    if (event.target.id === "weapon-popup") {
        closeWeapons();
    }
}

// escape =close
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeWeapons();
    }
=======
function openWeapons() {
    document.getElementById("weapon-popup").style.display = "flex";
    document.body.style.overflow = "hidden"; // stops the page scrolling behind the popup
}

function closeWeapons() {
    document.getElementById("weapon-popup").style.display = "none";
    document.body.style.overflow = "";
}

// click background= close)
function closeOnBackground(event) {
    if (event.target.id === "weapon-popup") {
        closeWeapons();
    }
}

// escape =close
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeWeapons();
    }
>>>>>>> origin/simon
});