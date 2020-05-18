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

    $('#blogs .owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive: {
            0: { items: 1},
            600: {items: 3}
        }
    });


    // product section

    let qtyup = $(".qty .qty-up");
    let qty_down = $('.qty .qty-down');
    let input = $(".qty .qty-input");

    qtyup.click(function(e){
        e.preventDefault();
        if(input.val() >= 1 && input.val() <= 9){
            input.val(function(oldval){
                return ++oldval;
            });
        }
    });

    qty_down.click(function(e){
        e.preventDefault();
        if(input.val() > 1 && input.val() < 9){
            input.val(function(i, oldval){
                return --oldval;
            });
        }
    });
});