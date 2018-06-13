const drawMap = function(){
  const mapDiv = document.getElementById("main-map");
  const glasgow = [55.86, -4.25];
  const javaStreet = [55.801507, -4.003805];
  const london = [51.5, -0.076];
  const zoomlevel = 15;
  const mainMap = new MapWrapper(mapDiv, javaStreet, zoomlevel);

  makeButton(mainMap, london);
}

const makeButton = function(map, london){
    const button = document.getElementById("new-york-button");
    button.addEventListener("click", function(){
      map.flyToLondon(london);
    })
}





window.addEventListener("load", drawMap);
