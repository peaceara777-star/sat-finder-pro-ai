async function getMoonAzimuth(lat, lon) {
    const url = `https://api.ipgeolocation.io/astronomy?apiKey=YOUR_KEY&lat=${lat}&long=${lon}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.moon_azimuth;
}

function startGPS(callback) {
    navigator.geolocation.watchPosition(async (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;

        const moonAz = await getMoonAzimuth(lat, lon);
        callback(moonAz);
    });
}
