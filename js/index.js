function toggleReadMore() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more-text");
    const btn = document.getElementById("read-more-btn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btn.textContent = "Read More";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btn.textContent = "Read Less";
    }
}
function ToggleReadMore() {
    const dots = document.getElementById("Dots");
    const moreText = document.getElementById("More-text");
    const btn = document.getElementById("Read-more-btn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        moreText.style.display = "none";
        btn.textContent = "Read More";
    } else {
        dots.style.display = "none";
        moreText.style.display = "inline";
        btn.textContent = "Read Less";
    }
}