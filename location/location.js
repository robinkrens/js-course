/* Location + Storage API example */
const loc = document.getElementById('loc');
const mapLink = document.getElementById('map-link');

/* Exercise 1: 
 * Use the Local Storage API to (a) set and (b) check whether location data was
 * set before. You can debug the Local Storage API in the chrome developer tools
 * (Ctrl-Shift-I > Application > Storage > Local Storage)
 * HINT: Use a simple key value pair from the Local Storage API */

mapLink.href = '';
mapLink.textContent = '';

function checkLocation() {
	// TODO
}

/* Exercise 2 (a bit more advanced): 
 * Add an embedded map to the index.html and link the geoposition 
 * to this map. You can use a third-party library like https://leafletjs.com */

function locate() {
	if (!navigator.geolocation) {
		loc.textContent = 'Geolocation is not supported by your browser';
	} else {
		loc.textContent = 'Locating...';
	navigator.geolocation.getCurrentPosition(success, error);
	}

}

function success(position) {
	const latitude  = position.coords.latitude;
	const longitude = position.coords.longitude;

	loc.textContent = '';
	mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
	mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
}

function error() {
	loc.textContent = 'Error retreiving location data';
}


document.getElementById('btn').addEventListener('click', locate);
