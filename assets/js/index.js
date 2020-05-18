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
    });


    //Isotope filer
    var $grid = $('.grid').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
    });

    $('.btn-group').on('click', 'button', function(){
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({filter: filterValue});
    })

    // new Phones 
    $('#new-phones .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: { items: 1},
            600: {items: 3},
            1000: {item: 5}
        }
    });
});