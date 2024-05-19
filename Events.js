
window.addEventListener("scroll", windowScrollEvent, false);

var isbg = true;

function windowScrollEvent() {
    var element = document.getElementById("homePageHeader");
    var target = document.getElementById("menuHeaderBackground");
    var rect = element.getBoundingClientRect();
    var elementBottom = rect.height + rect.y;
    console.log(`path(${MenuHeaderBackgroundClippingPath(20, 500, 100, window.innerWidth)})`)
    if (isbg && elementBottom < 0 && !target.classList.contains('visible')) {
        target.classList.add('visible');
        target.style.clipPath = `path(\"${MenuHeaderBackgroundClippingPath(20, 550, 100, window.innerWidth)}\")`;
        isbg = false;
        console.log(1);
    }
}
