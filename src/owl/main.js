$('.owl-carousel').owlCarousel({
    center: true,
    items:10,
    loop:true,
    margin:5,
    responsive:{
        0:{
            items:3,
            nav:false
        },
        767:{
            items:5,
            nav:false
        },
        1204:{
            items:10,
            nav:false
        }
    }
})