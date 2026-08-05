function showScreenSize() {
    document.getElementById("screensize").innerHTML =
        "Width: " + window.innerWidth + "px | Height: ";
        // + window.innerHeight + "px";
}

// Show on page load
// showScreenSize();

// Update when the browser is resized
window.addEventListener("resize", showScreenSize);
