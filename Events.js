window.addEventListener("scroll", windowScrollEvent, false);

var isbg = true;

function windowScrollEvent() {
    var element = document.getElementById("homePageHeader");
    var target = document.getElementById("menuHeaderBackground");
    var rect = element.getBoundingClientRect();
    var elementBottom = rect.height + rect.y;

    if (isbg && elementBottom < 0 && !target.classList.contains('visible')) {
        target.classList.add('visible');
        target.classList.remove('hidden');
        isbg = false;
        console.log(1);
    } else if (!isbg && elementBottom > 0 && !target.classList.contains('hidden')) {
        target.classList.add('hidden');
        target.classList.remove('visible');
        isbg = true;
        console.log(2);
    }
}
