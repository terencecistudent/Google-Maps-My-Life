function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: {
      lat: 54.63285104393597,
      lng: -4.953659934498847,
    },
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWYZ";

  var locations = [
    { lat: 55.0266097, lng: -7.176451 },
    { lat: 55.042778, lng: -7.161111 },
    { lat: 55.04721213235512, lng: -6.948220617441481 },
    { lat: 54.99283873359073, lng: -7.310616988607975 },
  ];

  var markers = locations.map(function (location, i) {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
