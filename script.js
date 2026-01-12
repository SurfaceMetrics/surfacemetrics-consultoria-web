$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY >20){
            $('.navbar').addClass("sticky");
            $('.menu-btn').addClass("white");
        }else{
            $('.navbar').removeClass("sticky");
            $('.menu-btn').removeClass("white");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide-up script
    $('.scroll-up-btn').click(function(){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // typing animation script
    var typed = new Typed(".typing", {
        strings:["Mejor","Sostenible","Sustentable","Ecológico"],
        typedSpeed: 100,
        backSpeed: 100,
        loop: true
    })

    
    // toogle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.menu a').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // imitialize swiper
    new Swiper('.container', {
        // Optional parameters
        loop: true,
        spaceBetween: 10,
        type: 'bullets',
        autoplay: {
            delay: 4000,
        },

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        breakpoints:{
            0:{
                slidesPerView:1
            },
            768:{
                slidesPerView:3
            },
            1024:{
                slidesPerView:4
            }
        },
    });
    document.getElementById('year').textContent = new Date().getFullYear();
})
