// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navbar-mobile-dropdown");

    if (x.style.maxHeight === "0px") {
      x.style.maxHeight = "500px";
    } else {
      x.style.maxHeight = "0px";
    }
}

function open_url(url){
  window.open(url, '_blank');
}
