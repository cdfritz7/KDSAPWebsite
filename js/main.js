// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navbar-mobile-dropdown");

    if (x.style.maxHeight === "0px") {
      x.style.maxHeight = "150px";
    } else {
      x.style.maxHeight = "0px";
    }
}

function moveScroller() {
    var $anchor = $("#home");
    var $scroller = $('#about');

    var move = function() {
        var st = $(window).scrollTop();
        var ot = $anchor.offset().top;
        if(st > ot) {
            $scroller.css({
                position: "fixed",
                top: "0px"
            });
        } else {
            $scroller.css({
                position: "relative",
                top: ""
            });
        }
    };
    $(window).scroll(move);
    move();
}
