const MapWrapper = function(element, coords, zoom){
  const osmLayer = new L.TileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png");
  this.map = L.map(element)
  .addLayer(osmLayer)
  .setView(coords, zoom);
  this.map.on("click", function(event){
    this.addMarker(event.latlng);
  }.bind(this))
  this.addInfoWindow();
}

MapWrapper.prototype.addMarker = function (coords){
  L.marker(coords).addTo(this.map);
};

MapWrapper.prototype.flyToLondon = function(coords){
  this.map.flyTo(coords);
}

MapWrapper.prototype.addInfoWindow = function(){
  const myMarker = new L.marker([55.86515, -4.2573], {title: "Codeclan Glasgow"}).bindPopup("Codeclan Glasgow - Coding school in Scotland").openPopup();
  myMarker.addTo(this.map);
}
