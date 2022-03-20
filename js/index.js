
; (function () {
    let aList = document.querySelectorAll(".main-nav>ul li a")
    let home = document.querySelector(".go-top")
    let menuControl = document.querySelector("#menu-control")
    let headerHeight =document.querySelector(".container-fluid.header").clientHeight

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

    aList.forEach(element => {
        element.addEventListener("click", () => {
            let movetoSectionNode = document.querySelector("#" + element.href.split("#")[1])
            menuControl.checked = false;
            if(movetoSectionNode!=null){
                ST(movetoSectionNode, 1);
                setTimeout(() => {
                    movetoSectionNode.classList.add('animate__animated', 'animate__headShake');
                }, 800);
                setTimeout(() => {
                    movetoSectionNode.classList.remove('animate__animated', 'animate__headShake');
                }, 1200);
            }
    
        })

    });


    function ST(element, duration) {
        var e = document.documentElement;
        if (window.scrollY == 0) {
            window.scrollTo({ top: 1 })
        }
        scrollToC(e, e.scrollTop + headerHeight, element, duration);
    }

    function Slinear(element, duration) {
        var e = document.documentElement;
        if (window.scrollY == 0) {
            window.scrollTo({ top: 1 })
        }
        scrollToB(e, e.scrollTop + headerHeight, element, duration);
    }

    function scrollToB(element, from, to, duration) {
        if (duration <= 0) return;
        if (typeof from === "object") from = from.offsetTop;
        if (typeof to === "object") to = to.offsetTop;
        scrollToX(element, from, to, 0, 1 / duration, 20, linearTween);
    }

    function scrollToC(element, from, to, duration) {
        if (duration <= 0) return;
        if (typeof from === "object") from = from.offsetTop;
        if (typeof to === "object") to = to.offsetTop;
        scrollToX(element, from, to, 0, 1 / duration, 20, easeInOutQuint);
    }

    function scrollToX(element, xFrom, xTo, t01, speed, step, motion) {
        if (t01 < 0 || t01 > 1 || speed <= 0) {
            element.scrollTop = xTo - headerHeight;
            return;
        }
        element.scrollTop = xFrom - (xFrom - xTo) * motion(t01) - headerHeight;
        t01 += speed * step;

        setTimeout(function () {
            scrollToX(element, xFrom, xTo, t01, speed, step, motion);
        }, step);
    }

    function easeInOutQuint(t) {
        t /= 0.5;
        if (t < 1) return t * t * t * t * t / 2;
        t -= 2;
        return (t * t * t * t * t + 2) / 2;
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