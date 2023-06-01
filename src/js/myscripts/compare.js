if (document.querySelector('.product .product-compare')) {
    function addCompare() {
        let btnCompare = document.querySelector('.product-compare');
        btnCompare.addEventListener('click', function(e) {
            this.classList.toggle('compare-active');
        });
    }

    addCompare();
}