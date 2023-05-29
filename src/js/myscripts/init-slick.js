if (document.querySelector('.product-photo')) {
    $('.product-photo').slick({
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: false,
        dots: false,
        asNavFor: '.product-thumbs',
        slidesToScroll: 1,
        // responsive: [
        //     {
        //         breakpoint: 1140,
        //         settings: {
        //             slidesToShow: 4,
        //         }
        //     },

        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 3,
        //         }
        //     },

        //     {
        //         breakpoint: 500,
        //         settings: {
        //             centerMode: false,
        //             slidesToShow: 2,
        //         }
        //     }
        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        // ]
    });

    $('.product-thumbs').slick({
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: false,
        dots: false,
        slidesToScroll: 1,
        asNavFor: '.product-photo',
        variableWidth: true,
        focusOnSelect: true
        // responsive: [
        //     {
        //         breakpoint: 1140,
        //         settings: {
        //             slidesToShow: 4,
        //         }
        //     },

        //     {
        //         breakpoint: 768,
        //         settings: {
        //             slidesToShow: 3,
        //         }
        //     },

        //     {
        //         breakpoint: 500,
        //         settings: {
        //             centerMode: false,
        //             slidesToShow: 2,
        //         }
        //     }
        //     // You can unslick at a given breakpoint now by adding:
        //     // settings: "unslick"
        //     // instead of a settings object
        // ]
    });
};




