const EventUtil = require('./EventUtil.js');

var droptarget = document.getElementById('droptarget');

EventUtil.addHandler(droptarget, "dragover", function (event) {
	EventUtil.preventDefault(event);
});

EventUtil.addHandler(droptarget, "dragenter", function(event) {
	EventUtil.preventDefault(event);
})