// ==================== scroll on header menu effect jQuery ==================== //
// $(window).on('scroll',function() {    
//     var scroll = $(window).scrollTop();
//     if (scroll < 445) {
//         $(".header-bottom").removeClass("sticky-active");
//     } else {
//         $(".header-bottom").addClass("sticky-active");
//     }
// }); 


// ==================== sidbar menu jQuery ==================== //
$('.sub-item-link').click(function (e) {
    e.preventDefault();
    $('.sub-item-link').removeClass('menu-active');
    $(this).addClass('menu-active');
    var $this = $(this);
    
    if ($this.next().hasClass('sub-menu-show')) {
        $this.next().removeClass('sub-menu-show');
        // $('.menu-expand').removeClass('rotade');
        $this.next().slideUp(350);
        

    } else {
        $this.parent().parent().find('li .inner').removeClass('sub-menu-show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('sub-menu-show');
        // $('.menu-expand').addClass('rotade');
        $this.next().slideToggle(350);
        

    }
});
$(document).on('click', '.side-menu ul li a', function (e) {
    $('.inner li a').removeClass("menu-active");
    $(this).addClass("menu-active");
});



// ==================== BANNER SLIDER jQuery ==================== //
// jQuery(document).ready(function () {
//     $('#owl-carousel').owlCarousel({
//         loop: true,
//         margin: 30,
//         dots: false,
//         nav: false,
//         items: 1,
//         animateOut: 'slideOutDown',
//         animateIn: 'flipInX',
//     })
// });


// ==================== side menu open to main section move jQuery ==================== //
jQuery(document).ready(function () {
    $('.bar-icon').click(function () {
        $('.sidebar-menu').addClass('open');
        $(".overlay").fadeIn("slow");
    });
    $('.close').click(function () {
        $('.sidebar-menu').removeClass('open');
        $(".overlay").fadeOut("slow");
    });
});



// ==================== side menu open to main section move jQuery ==================== //
$('.choose-area').on('click',function () {
    $('.choose-area').removeClass('open');
   $(this).addClass('open');
});

// click to data-val show..
$('.choose-area').click(function () {
    // $('.choose-area').removeClass('open');
    // $(this).addClass('open');
    var dropDownList = $(this).parent();
    $(this).parent().find('.list').find('.option').click(function () {
        $('.list li').removeClass('selected');
        $(this).addClass('selected');
        var v = $(this).attr('data-val');
        var t = $(this).text();
        dropDownList.find('.current').text(t);
    });
});
// close the list when click out..
// $(document).click(function (e) {
    
//     var container = $(".choose-area");
//     if (!container.is(e.target)
//         && container.has(e.target).length === 0) {
//         container.parent().find('.list').slideUp();
//     }
// });




// ==================== scroll on counter up number jQuery ==================== //


// ==================================================================================


$(document).ready(function() {
    $(".set > a").on("click", function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this)
          .siblings(".content")
          .slideUp(200);
        $(".set > a i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
      } else {
        $(".set > a i")
          .removeClass("fa-minus")
          .addClass("fa-plus");
        $(this)
          .find("i")
          .removeClass("fa-plus")
          .addClass("fa-minus");
        $(".set > a").removeClass("active");
        $(this).addClass("active");
        $(".content").slideUp(200);
        $(this)
          .siblings(".content")
          .slideDown(200);
      }
    });
  });
  