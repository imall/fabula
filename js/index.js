
; (function () {
    let home = document.querySelector(".go-top")
  
    window.addEventListener("scroll", () => {
        if (window.scrollY == 0) {
            home.classList.add("fade-out")
        } else {
            home.classList.remove("fade-out")

        }
    })
    window.onresize = reportWindowSize;
    window.addEventListener("load", function () {
        reportWindowSize()
    });

    home.addEventListener("click", () => {
        Slinear(document.documentElement, 1);
    })
    function Slinear(element, duration) {
        var e = document.documentElement;
        if (window.scrollY == 0) {
            window.scrollTo({ top: 1 })
        }
        scrollToB(e, e.scrollTop + document.querySelector(".container-fluid.header").clientHeight, element, duration);
    }

    function scrollToB(element, from, to, duration) {
        if (duration <= 0) return;
        if (typeof from === "object") from = from.offsetTop;
        if (typeof to === "object") to = to.offsetTop;
        scrollToX(element, from, to, 0, 1 / duration, 20, linearTween);
    }


    function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
        if (t01 < 0 || t01 > 1 || speed <= 0) {
            element.scrollTop = xTo - document.querySelector(".container-fluid.header").clientHeight;
            return;
        }
        element.scrollTop = xFrom - (xFrom - xTo) * motion(t01) - document.querySelector(".container-fluid.header").clientHeight;
        t01 += speed * step;

        setTimeout(function () {
            scrollToX(element, xFrom, xTo, t01, speed, step, motion);
        }, step);
    }

    function linearTween(t) {
        return t;
    }
    // 當調整畫面大小時

    function reportWindowSize() {
        const DesktopSize = 1441;
        const PhoneSize = 768;
        let currentSize = window.innerWidth;
        let fs = 16;
        if (currentSize < PhoneSize) {
            fs = 3.4;
        } else if (currentSize > DesktopSize) {
            fs = 1.1;
        } else {
            fs = (-0.00357 * currentSize) + 6.14
            fs = fs > 2 ? 2 : fs;
        }
        document.querySelector('html').style.fontSize = `${fs}vw`
    }
})()