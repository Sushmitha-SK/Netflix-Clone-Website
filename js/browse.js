var ele = document.getElementsByClassName("genre");
var btn = document.getElementById('play-btn');
var vid = document.getElementById('vid');

var overlay = document.getElementById('overlay');

Array.from(ele).forEach(element => {
    element.addEventListener('click', playVideo);
});
btn.addEventListener('click', playVideo);

function playVideo(e) {
    vid.style.display = "block";
    overlay.style.display = "block";
    document.body.appendChild(vid);
    vid.setAttribute('class', "vid")
    vid.controls;
}

overlay.addEventListener('click', () => {
    if (overlay.style.display == "block") {
        vid.style.display = "none";
        overlay.style.display = "none";
    }
})