﻿//swfobject.js

var swfVersionStr = "8.0.24";
var xiSwfUrlStr = "";
var flashvars = {};
var params = {};
params.quality = "best";
params.bgcolor = "#ffffff";
params.play = "true";
params.loop = "true";
params.wmode = "window";
params.scale = "showall";
params.menu = "true";
params.devicefont = "false";
params.salign = "";
params.allowscriptaccess = "sameDomain";
var attributes = {};
attributes.id = "banner";
attributes.name = "banner";
attributes.align = "middle";
swfobject.createCSS("html", "height:100%; background-color: #ffffff;");
swfobject.createCSS("body", "margin:0; padding:0; overflow:auto; height:100%;");
swfobject.embedSWF(
	"/common/image/2nd/banner2d.swf", "flashContent",
	"250", "132",
	swfVersionStr, xiSwfUrlStr,
	flashvars, params, attributes);


/*
//jquery.center.js

$(document).ready(function() {
	$("#centerBox").center();
});
*/
