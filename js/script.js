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
};
