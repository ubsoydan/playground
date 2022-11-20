const MAPBOX_ACCESS_TOKEN = "insert token here";

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
});

function renderMap(centerPosition) {
    const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v12", // style URL
        center: centerPosition, // starting position [lng, lat]
        zoom: 10, // starting zoom
        accessToken: MAPBOX_ACCESS_TOKEN,
    });

    const navControls = new mapboxgl.NavigationControl({
        visualizePitch: true,
    });
    map.addControl(navControls, "top-right");

    const dirControls = map.addControl(
        new MapboxDirections({
            accessToken: MAPBOX_ACCESS_TOKEN,
        }),
        "top-left"
    );
}

function successLocation(position) {
    renderMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    renderMap([-74.5, 40]);
}
