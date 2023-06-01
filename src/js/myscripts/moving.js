// функция будет перемещать блок в указанное место при определенной ширине экрана

let moving = function () {

        const windowWidth = window.innerWidth; // ширина экрана

        if (windowWidth >= 992) {
            document.querySelector('.product__descr').append(document.querySelector('.product-descr__box'));
            document.querySelector('.product__aside').append(document.querySelector('.product-params'));
        }
        if ((windowWidth < 992) && (windowWidth > 600)) {
            document.querySelector('.product__img').append(document.querySelector('.product-descr__box'));
            document.querySelector('.product__descr').append(document.querySelector('.product-params'));

            document.querySelector('.product__descr').append(document.querySelector('.product-params'));
            document.querySelector('.product__img').append(document.querySelector('.product-descr__box'));
        };

        if (windowWidth <= 600) {
            document.querySelector('.product__img').append(document.querySelector('.product-params'));
            document.querySelector('.product__descr').append(document.querySelector('.product-descr__box'));
        } else {
        };

};

moving();
window.addEventListener('resize', moving);