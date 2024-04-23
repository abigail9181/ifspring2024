document.addEventListener("DOMContentLoaded", () => {
    const navLinkEls = document.querySelectorAll('.nav_link');
    const sectionEls = document.querySelectorAll('.section');


    let currentSection = "home";
    window.addEventListener('scroll', () => {
        //console.log(navLinkEls);
        sectionEls.forEach(sectionEL => {
            //console.log(sectionEL.id)
            if (window.scrollY >= sectionEL.offsetTop - 200) {
                currentSection = sectionEL.id;
            }
        })

        navLinkEls.forEach(navLinkEl => {
            // console.log(currentSection)
            // console.log(navLinkEl)
            if(navLinkEl.firstChild){
                if (navLinkEl.href.indexOf(currentSection)>-1) {
                    document.querySelector('.active').classList.remove('active');
                    navLinkEl.classList.add('active');
                }
            }
            


        })

    })
})


$(document).ready(function () {
    $('.responsive').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1550,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 620,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});





// https://www.youtube.com/watch?v=nwCtWn-xFz0