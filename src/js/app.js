import modal from 'jquery-modal';
import './import/ui';
import './import/swiper';


//map

google.maps.event.addDomListener(window, 'load', init);
        
function init() {
  var coordinates = {lat: 55.894384, lng: 37.406382};
  if($(window).width() > 767) {
    var mapOptions = {
      zoom: 16,
      center: {lat: 55.894366, lng: 37.4026382},
    };
  }else {
    var mapOptions = {
      zoom: 16,
      center: {lat: 55.896772, lng: 37.406382},
    };
  }
  var mapElement = document.getElementById('map');
  var map = new google.maps.Map(mapElement, mapOptions);
  var image = 'img/pin.svg';
  var beachMarker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: image
  });
}
