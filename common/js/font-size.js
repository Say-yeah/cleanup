// JavaScript Document

$(document).ready(function(){
	$('#font_s').css('background-position','100% 0');

	$("#font_s").click(
		function(){
			$("body").css('font-size','100%');
			$('#font_s').css('background-position','100% 0');
			$('#font_m').css('background-position','0 -17px');
			$('#font_l').css('background-position','0 -37px');
		   return false;
		}
	);

	$("#font_m").click(
		function(){
			$("body").css('font-size','110%');
			$('#font_s').css('background-position','0 0');
			$('#font_m').css('background-position','100% -17px');
			$('#font_l').css('background-position','0 -37px');
		   return false;
		}
	);

	$("#font_l").click(
		function(){
			$("body").css('font-size','125%');
			$('#font_s').css('background-position','0 0');
			$('#font_m').css('background-position','0 -17px');
			$('#font_l').css('background-position','100% -37px');
		   return false;
		}
	);

});
