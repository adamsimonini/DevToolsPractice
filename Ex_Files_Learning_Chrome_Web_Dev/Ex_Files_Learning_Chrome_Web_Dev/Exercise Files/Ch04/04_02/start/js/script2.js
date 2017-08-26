"use strict";

// Fetch request
(function() {
	var condition = "cloudy";
	var temp = 293.15;
	var degC = temp + 273.15;
	var degCInt = Math.floor(degC);
	var degF = degC * 1.8 - 32;
	var degFInt = Math.floor(degF);
	var weatherBox = document.querySelector("#weather");
	weatherBox.innerHTML = "<p>" + degCInt + "&#176; C / " + degFInt + "&#176; F</p><p>" + condition + "</p>";
})();
