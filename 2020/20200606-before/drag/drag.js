<<<<<<< HEAD
const EventUtil = require('./EventUtil.js');

var droptarget = document.getElementById('droptarget');

EventUtil.addHandler(droptarget, "dragover", function (event) {
	EventUtil.preventDefault(event);
});

EventUtil.addHandler(droptarget, "dragenter", function(event) {
	EventUtil.preventDefault(event);
})
=======

//不使用 EventUtil.js 写法
//  function Drag(id) {
//      this.div = document.getElementById(id);
//      if (this.div) {
//          this.div.style.cursor = "move";
//          this.div.style.position = "absolute";
//      }
//      this.disX = 0;
//      this.disY = 0;
//      var _this = this;
//      this.div.onmousedown = function(evt) {
//          _this.getDistance(evt);
//          document.onmousemove = function(evt) {
//              _this.setPosition(evt);
//          }
//          _this.div.onmouseup = function() {
//              _this.clearEvent();
//          }
//      }
//  }
//  Drag.prototype.getDistance = function(evt) {
//      var oEvent = evt || event;
//      this.disX = oEvent.clientX - this.div.offsetLeft;
//      this.disY = oEvent.clientY - this.div.offsetTop;
//  }
//  Drag.prototype.setPosition = function(evt) {
//      var oEvent = evt || event;
//      var l = oEvent.clientX - this.disX;
//      var t = oEvent.clientY - this.disY;
//      if (l <= 0) {
//          l = 0;
//      } else if (l >= document.documentElement.clientWidth - this.div.offsetWidth) {
//          l = document.documentElement.clientWidth - this.div.offsetWidth;
//      }
//      if (t <= 0) {
//          t = 0;
//      } else if (t >= document.documentElement.clientHeight - this.div.offsetHeight) {
//          t = document.documentElement.clientHeight - this.div.offsetHeight;
//      }
//      this.div.style.left = l + "px";
//      this.div.style.top = t + "px";
//  }
//  Drag.prototype.clearEvent = function() {
//      this.div.onmouseup = null;
//      document.onmousemove = null;
//  }

//使用 EventUtil 的写法 

var eventUtil  = require('../util/EventUtil');

console.log(eventUtil);
>>>>>>> 拖动
