;(function () {
    let more = document.querySelector(".more")
    let mobile = document.querySelector(".mobile-more")
    more.addEventListener("click", () => {
        more.classList.remove("more")
        more.classList.add("d-none")
    })

    mobile.addEventListener("click", () => {
        mobile.classList.remove("mobile-more")
        mobile.classList.add("d-none")
    })
})()