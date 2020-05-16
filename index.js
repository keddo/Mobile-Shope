$(document).ready(function(){
    $('#banner .owl-carousel').owlCarousel({
        dots: true,
        items:1
    });

    // top sale carousel

    $('#top-sale .owl-carousel').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        responsive: {
            0: { items: 1},
            600: {items: 3},
            1000: {item: 5}
        }
    })
});