//Google map
function initMap() {
  var coordinates = {lat: 34.869633, lng: -111.755049};
  var mapFigure = document.getElementById('map');
  var map = new google.maps.Map(mapFigure, {
    center: coordinates,
    zoom: 12
  });
  var marker = new google.maps.Marker({
   position: coordinates,
   map: map,
   title: 'Sedona'
  });
}

window.onload = function () {
  var foundGoogle, img;
  foundGoogle = typeof google === 'object' && typeof google.maps === 'object';
  if (foundGoogle) {
    img = document.getElementById('mapImage');
    img.classList.add('is-hidden');
  } else {
    map = document.getElementById('map');
    map.classList.add('is-hidden');
  }
}

var searchButton = document.getElementById('hotel-search');
var searchForm = document.getElementById('hotelSearchForm');
searchButton.addEventListener('click', function(event) {
  event.preventDefault();
  searchForm.classList.toggle('form-open');
});
