
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