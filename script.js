document.getElementById("start").addEventListener("click", (event) => {
    if (event) event.preventDefault();

    document.getElementById("overlay").style.display = "none";
    document.getElementById("game").style.display = "";
    document.getElementById("video").play();

    if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen();
    else if (document.documentElement.mozRequestFullScreen) document.documentElement.mozRequestFullScreen();
    else if (document.documentElement.webkitRequestFullscreen) document.documentElement.webkitRequestFullscreen();
    else if (document.documentElement.msRequestFullscreen) document.documentElement.msRequestFullscreen();
});
