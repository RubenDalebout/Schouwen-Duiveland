document.getElementById("mobilemenu").addEventListener("click", function() {
    if (document.getElementById("navigation_items").style.display != "block") {
        document.getElementById("navigation_items").style.display = "block"
    } else {
        document.getElementById("navigation_items").style.display = "none";
    }
});

function myMap() {
    var mapProp= {
        center:new google.maps.LatLng(51.64848052296913, 3.92802073604089),
        zoom:5,
    };
    var map = new google.maps.Map(document.getElementById("map"),mapProp);
}