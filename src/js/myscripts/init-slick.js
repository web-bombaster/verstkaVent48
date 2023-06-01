if (document.querySelector('.product-photo')) {
    $('.product-photo').slick({
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: false,
        dots: false,
        asNavFor: '.product-thumbs',
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 601,
                settings: {
                    dots: true,
                }
            }
        ]
    });

    $('.product-thumbs').slick({
        infinite: true,
        slidesToShow: 1,
        adaptiveHeight: false,
        arrows: true,
        dots: false,
        slidesToScroll: 1,
        asNavFor: '.product-photo',
        variableWidth: true,
        focusOnSelect: true
    });
};




