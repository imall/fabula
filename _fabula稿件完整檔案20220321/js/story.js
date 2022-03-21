; (function () {
    let company_des = document.querySelector("[href='#company-des']")
    let fundation_info = document.querySelector("[href='#fundation-info']")
    let tags = document.querySelector("[href='#tags']")
    let map_section = document.querySelector("[href='#map-section']")

    company_des.addEventListener("click", () => {

        addClass(company_des)
        removeClass(fundation_info, tags, map_section)
        scrollfun(company_des)
    })
    fundation_info.addEventListener("click", () => {

        addClass(fundation_info)
        removeClass(company_des, tags, map_section)
        scrollfun(fundation_info)
    })
    tags.addEventListener("click", () => {

        addClass(tags)
        removeClass(company_des, fundation_info, map_section)
        scrollfun(tags)

    })
    map_section.addEventListener("click", () => {

        addClass(map_section)
        removeClass(fundation_info, tags, company_des)
        scrollfun(map_section)

    })


    function scrollfun(node) {
        let movetoSectionNode = document.querySelector("#" + node.href.split("#")[1])

        setTimeout(() => {
            movetoSectionNode.classList.add('animate__animated', 'animate__headShake');
        }, 600);
        setTimeout(() => {
            movetoSectionNode.classList.remove('animate__animated', 'animate__headShake');
        }, 1200);
    }

    function addClass(element) {
        element.parentElement.classList.add("link-active")
    }
    function removeClass(elementa, elementb, elementc) {
        elementa.parentElement.classList.remove("link-active")
        elementb.parentElement.classList.remove("link-active")
        elementc.parentElement.classList.remove("link-active")
    }
})()