mapboxgl.accessToken =
  "pk.eyJ1Ijoiaml3b25oYW4iLCJhIjoiY2thOGc4ZzQxMDNndTJxbXpraWZ6cW5laiJ9.4DijaBZ9jfWAZFSOUFuckw";
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [126.984809, 37.570608],
  zoom: 12,
});

map.on("load", function () {
  map.loadImage(
    "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
    function (error, image) {
      if (error) throw error;
      map.addImage("custom-marker", image);
      map.addSource("places", {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [
            {
              type: "Feature",
              properties: {
                description:
                  '<strong><a href="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=264337" target="_blank" title="Opens in a new window">Gyeongbokgung Palace</a></strong>',
                icon: "town-hall",
              },
              geometry: {
                type: "Point",
                coordinates: [126.974847, 37.579617],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong><a href="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=264316" target="_blank" title="Opens in a new window">Deoksugung</a></strong>',
                icon: "town-hall",
              },
              geometry: {
                type: "Point",
                coordinates: [126.9729521, 37.5658049],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong><a href="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=264329 " target="_blank" title="Opens in a new window">Gwanghwamun Gate</a></strong>',
                icon: "town-hall",
              },
              geometry: {
                type: "Point",
                coordinates: [126.9746217, 37.5759369],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong><a href="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=264550" target="_blank" title="Opens in a new window">N Seoul Tower</a></strong>',
                icon: "art-gallery",
              },
              geometry: {
                type: "Point",
                coordinates: [126.9860326, 37.5511694],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong><a href="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=561382" target="_blank" title="Opens in a new window">Bukchon Hanok Village</a></strong>',
                icon: "art-gallery",
              },
              geometry: {
                type: "Point",
                coordinates: [126.9814591, 37.5824075],
              },
            },
            {
              type: "Feature",
              properties: {
                description:
                  '<strong><a href="https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=264312" target="_blank" title="Opens in a new window">Myeong-dong</a></strong>',
                icon: "art-gallery",
              },
              geometry: {
                type: "Point",
                coordinates: [126.9733034, 37.5615512],
              },
            },
          ],
        },
      });
      // Add a layer showing the places.
      map.addLayer({
        id: "places",
        type: "symbol",
        source: "places",
        layout: {
          "icon-image": "{icon}-15",
          "icon-allow-overlap": true,
        },
      });

      // When a click event occurs on a feature in the places layer, open a popup at the
      // location of the feature, with description HTML from its properties.
      map.on("click", "places", function (e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
          .setLngLat(coordinates)
          .setHTML(description)
          .addTo(map);
      });

      // Change the cursor to a pointer when the mouse is over the places layer.
      map.on("mouseenter", "places", function () {
        map.getCanvas().style.cursor = "pointer";
      });

      // Change it back to a pointer when it leaves.
      map.on("mouseleave", "places", function () {
        map.getCanvas().style.cursor = "";
      });
    }
  );
});


map.addControl(new mapboxgl.NavigationControl());


