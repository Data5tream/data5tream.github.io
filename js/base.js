window.addEventListener('load', function () {
    document.getElementById('navtoggle').addEventListener('click', function () {
        var nav = document.getElementById('navtoggle').parentNode.childNodes[1];
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        }
        else {
            nav.style.display = 'block';
        }
    });
});
