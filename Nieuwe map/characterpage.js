function openCharacters() {
    document.getElementById("character-popup").style.display = "flex";
    document.body.style.overflow = "hidden"; // stops the page scrolling behind the popup
}

function closeCharacters() {
    document.getElementById("character-popup").style.display = "none";
    document.body.style.overflow = "";
}

// click background=close)
function closeOnBackground(event) {
    if (event.target.id === "character-popup") {
        closeCharacters();
    }
}

// escape=close
document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
        closeCharacters();
    }
});