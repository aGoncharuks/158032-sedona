//Google map
function initMap() {
  var coordinates = {lat: 34.869633, lng: -111.755049};
  var mapFigure = document.getElementById('map');
  mapFigure.style.height = '593px';
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

//Hiding map image if Google map is loaded
window.onload = function() {
  var foundGoogle = typeof google === 'object' && typeof google.maps === 'object';
  var  mapFigure = document.getElementById('map');
  if (foundGoogle && mapFigure.firstChild) {
    var img = document.getElementById('mapImage');
    img.classList.add('is-hidden');
  } else {
     mapFigure.classList.add('is-hidden');
  }
}

//Hotel search form opening
var searchButton = document.getElementById('hotel-search');
var searchForm = document.getElementById('hotelSearchForm');
searchButton.addEventListener('click', function(event) {
  event.preventDefault();
  searchForm.classList.toggle('form-open');
});
