
    const toggleClick = document.querySelector(".toggleBox")
    const navBar = document.querySelector(".nav-links")

    toggleClick.addEventListener('click', function() {
        toggleClick.classList.toggle('active')
        navBar.classList.toggle('active')
    })

//  Video section 1 //

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    pagination: {
    clickable: true,
    },
    navigation: {
    nextEl: ".next-button",
    prevEl: ".prev-button",
    },

    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        520: {
            slidesPerView: 5,
        },
        950: {
            slidesPerView: 6,
        }
    },  
});

//  Video section 2 //

var swiper = new Swiper(".mySwiper-two", {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    pagination: {
    clickable: true,
    },
    navigation: {
    nextEl: ".next-button-two",
    prevEl: ".prev-button-two",
    },

    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        520: {
            slidesPerView: 5,
        },
        950: {
            slidesPerView: 6,
        }
    },  
});

//  Video section 3 //

var swiper = new Swiper(".mySwiper-three", {
    slidesPerView: 6,
    spaceBetween: 20,
    loop: true,
    centerSlide: 'true',
    fade: 'true',
    pagination: {
    clickable: true,
    },
    navigation: {
    nextEl: ".next-button-three",
    prevEl: ".prev-button-three",
    },
    
    breakpoints: {
        0: {
            slidesPerView: 3,
        },
        520: {
            slidesPerView: 5,
        },
        950: {
            slidesPerView: 6,
        }
    },  
});