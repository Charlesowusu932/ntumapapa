


$(document).ready(function(){
 $('.owl-carousel').owlCarousel({
    center: true,
    loop:true,
    margin:5,
    nav:true,
   	navText : ["<i class='fa fa-angle-left fa-2x'></i>","<i class='fa fa-angle-right fa-2x'></i>"],
    dots: false,
    pagination: false,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
});
