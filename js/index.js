window.onload = function () {
    var navheight = 0;
    function setHeight() {
        return navheight = document.body.clientHeight - 120;
    }
    ;
    setHeight();
    window.addEventListener('resize', setHeight);
    document.addEventListener('scroll', function (event) {
        if (event.pageY >= navheight) {
            return document.getElementById('navbar-child').style.display = 'block';
        }
        else {
            return document.getElementById('navbar-child').style.display = 'none';
        }
    });
    window.shiftTo = function shiftTo(element) {
        scrollsTo(document.getElementById(element), 1000);
        return false;
    };
    // Scroll to link
    // Based on https://stackoverflow.com/a/23844067
    function scrollsTo(element, duration) {
        var dest, e, t;
        e = document.documentElement;
        if (e.scrollTop === 0) {
            t = e.scrollTop;
            ++e.scrollTop;
            if (t + 1 === e.scrollTop--) {
                e = e;
            }
            else {
                e = document.body;
            }
        }
        if (duration <= 0) {
            return;
        }
        if (typeof e.scrollTop === 'object') {
            e.scrollTop = e.scrollTop.offsetTop;
        }
        if ((element != null) && typeof element === 'object') {
            dest = element.offsetTop;
            if (dest >= 90) {
                dest -= 90;
            }
        }
        else {
            dest = 0;
        }
        return scrollToX(e, e.scrollTop, dest, 0, 1 / duration, 20, easeOutCuaic);
    }
    ;
    function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
        if (t01 < 0 || t01 > 1 || speed <= 0) {
            element.scrollTop = xTo;
            return;
        }
        element.scrollTop = xFrom - (xFrom - xTo) * motion(t01);
        t01 += speed * step;
        return setTimeout(function () {
            return scrollToX(element, xFrom, xTo, t01, speed, step, motion);
        }, step);
    }
    ;
    function easeOutCuaic(t) {
        t--;
        return t * t * t + 1;
    }
    ;
};
