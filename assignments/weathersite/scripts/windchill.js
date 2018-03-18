document.addEventListener('DOMContentLoaded', function(){ 
// Wait for the page to be ready
	windChillTemperature = 35.74 + (0.6215 * temperature) - (35.75
                * Math.pow(speed, 0.16)) + (0.4275 * temperature * Math.pow(speed, 0.16));
	document.getElementById("windchill").innerHTML = "The value is ("output") + theVAlue.toFixed(2);
}, false);