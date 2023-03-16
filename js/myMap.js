(function () {
  // latLng, Zoom level
  var map = L.map("map").setView([53.37758, -1.46716], 12);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  var geocodeService = L.esri.Geocoding.geocodeService();

  map.on("click", function (e) {
    geocodeService
      .reverse()
      .latlng(e.latlng)
      .run(function (error, result) {
        L.marker(result.latlng)
          .addTo(map)
          .bindPopup(`${result.address.Match_addr}  ${result.latlng}`)
          .openPopup();
      });
  });
  a;
  let clearBtn = document.getElementById("clearMarkers");
  clearBtn.addEventListener("click", (ev) => {
    map.eachLayer((layer) => {
      if (layer["_latlng"] != undefined) layer.remove();
    });
  });
})();
