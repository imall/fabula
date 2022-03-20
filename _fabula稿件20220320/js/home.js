; (function () {
    let more_story = document.querySelector(".more-story")
    let more_story_button = document.querySelector(".more-story-button")
    let aList = document.querySelectorAll(".main-nav>ul li a")
    let menuControl = document.querySelector("#menu-control")
    more_story_button.addEventListener("click", () => {
        more_story.classList.add("click")
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
        scrollToC(e, e.scrollTop + document.querySelector(".container-fluid.header").clientHeight, element, duration);
    }




    function scrollToC(element, from, to, duration) {
        if (duration <= 0) return;
        if (typeof from === "object") from = from.offsetTop;
        if (typeof to === "object") to = to.offsetTop;
        scrollToX(element, from, to, 0, 1 / duration, 20, easeInOutQuint);
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

    function easeInOutQuint(t) {
        t /= 0.5;
        if (t < 1) return t * t * t * t * t / 2;
        t -= 2;
        return (t * t * t * t * t + 2) / 2;
    }

  
})()