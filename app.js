var map;

// Inits map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {lat: 3.148805, lng: 101.625402},
    mapTypeId: 'roadmap'
  });

  // Inits trkttdi
  var trkttdi = new google.maps.Polygon({
    paths: trkttdiCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 3,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  trkttdi.setMap(map);
  trkttdi.addListener('click', function(event) {
    showInfo(event, 'trkttdi');
  });
}

// Get modal content data
function getContent(location) {
  return content[location]
}

// On press of location
function showInfo(event, location) {
  // Sets content
  modal.setContent(getContent(location));

  // Sets footer content
  modal.setFooterContent('<a class="tingle-btn tingle-btn--danger tingle-btn--pull-right" href="' + petition[location] + '" target="_blank">TAKE ACTION</a><a class="tingle-btn tingle-btn--primary tingle-btn--pull-right" href="' + sites[location] + '" target="_blank">MORE INFO</a>');

  // Opens modal
  modal.open();
}

// Init modal
var modal = new tingle.modal({
  footer: true,
  stickyFooter: false,
  closeMethods: ['overlay', 'button', 'escape'],
  closeLabel: "Close",
  cssClass: ['custom-class-1', 'custom-class-2'],
});
