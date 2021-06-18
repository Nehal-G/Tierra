$('.owl-carousel').owlCarousel({
      margin: 15,
      dots:false,
      nav: true,
      navText: ["<div class='nav-button owl-prev'>‹</div>", "<div class='nav-button owl-next'>›</div>"],
      responsive: {
        500: {
          items: 2
        },
        900: {
          items: 3
        },
        1100: {
          items: 5
        }
      }
    });
