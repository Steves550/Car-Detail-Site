// Initialize and add the map
function initMap() {
  // Your Location
  const loc = { lat: 39.290386, lng: -76.612190 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map')
    , {
      zoom: 14,
      center: loc
    });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}