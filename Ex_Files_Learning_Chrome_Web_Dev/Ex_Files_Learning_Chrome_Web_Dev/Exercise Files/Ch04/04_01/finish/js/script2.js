"use strict";

(function() {
	// log type status to console
	var types = ["Type A", "Type B", "Type C"],
		type,
		level;
	for (var i = 0; i <= 100; i++) {
		level = Math.floor(Math.random() * 10) + 1;
		type = types[Math.floor(Math.random() * types.length)];
		console.log( type + " is at level " + level);
	}
})();
