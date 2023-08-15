function startFalling() {
    var image = document.getElementById("fallingImage");
    image.style.top = "0";
    image.style.opacity = "0";
    image.style.transform = "rotate(50deg)"

    setTimeout(function () {
        image.style.transform = "rotate(0)"
        image.style.transition = "none";
        image.style.top = "-95%";
    }, 1000);

    setTimeout(function () {
        image.style.transition = "all 0.5s ease-in-out";
        image.style.top = "-95%";
        image.style.opacity = "1";
    }, 2000);
}
