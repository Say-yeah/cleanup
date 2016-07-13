$(document).ready(function(){
	var spdomain = "cleanup.sfvw.jp";
	var cookiedomain = "cleanup.jp";
	var ua = navigator.userAgent;
	if(ua.match(/iPhone|Android.*Mobile|BlackBerry|Symbian|IEMobile/i) ){
		var redirect = "http://" + spdomain + "/sp_js/healthcheck.txt";
		$.ajax({
			url: redirect,
			type:'GET',
			dataType: 'script',
			async: false,
			timeout:5000,

			success: function(data) {
				var spurl;
				var host = spdomain;
				var cookie = document.cookie;
				if(!window.location.search.match(/is_redirect/i)){
					if(!document.cookie.match(/viewmode=pc/i)){ 
						spurl = window.location.protocol + "//"+ host + window.location.pathname + window.location.search;
						location.href = spurl;
						return;
						}
				} else {
					document.getElementById("pviewer_spbanner").innerHTML = '<div style="display:inline-block; margin:0"><a href="http://' + spdomain + '/spmode.php?rurl='+encodeURIComponent(window.location.protocol+'//' + spdomain + window.location.pathname + window.location.search )+'&domain=' + cookiedomain +'" style="border-style:none;text-decoration: none;line-height:0;"><img src="http://' + spdomain + '/sp_images/smartphone_bnnr.jpg" style="border-style:none;"/></a></div>';
				}
			},
			error: function(data) {
			}
		});
	}
});
