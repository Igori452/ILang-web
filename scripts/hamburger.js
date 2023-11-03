//show
function showMenu() {
    $('.menu-mini').slideDown(400);
    $('.menu-mini').removeClass('hide').addClass('show');
}
//hide
function hideMenu() {
    $('.menu-mini').slideUp(400);
    $('.menu-mini').removeClass('show').addClass('hide');
}

$(document).ready(function() {
    $(document).on('click', function(e) {
        if ($(e.target).closest('.hamburger-nav').hasClass('hamburger-nav')) showMenu();
        else if ($(e.target).hasClass('back-icon')) hideMenu();
        else if ($('.menu-mini').hasClass('show') && !$(e.target).closest('.menu-mini').hasClass('menu-mini')) hideMenu();
        else if ($(e.target).closest('.li-menu').hasClass('li-menu')) hideMenu();
    });
  });
