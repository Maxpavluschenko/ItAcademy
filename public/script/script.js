
$(document).ready(function owlCarousel(){
    $(".owl-carousel").owlCarousel({
      items: 1,
      loop: true,
      dots:false,
      nav: true,
      autoplay:true,
      autoplayHoverPause:true,
      autoplaySpeed:1500,
      smartSpeed:1500
    });
    
  });

$(document).ready(function animate() {
    $("#topnav").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});

menu.onclick = function hamburgerMenu() {
    var x = document.getElementById('topnav');

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

