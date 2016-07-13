(function ($) {

var f_num;
var self = $.plan = {
	
	
	
	init: function () {
		self.def();
		self.setMain( 0 );
		self.setDetail();
		self.clickThumb();
	},
	
	
	
	// �����ݒ�
	def: function () {
		$( "ul#thumb li" ).css({ "opacity" : "0.4" });
		self.setThumb( 0 );	
	},
	
	
	
	// ���C���r�W���A���̐ݒ�
	setMain: function ( num ) {
		var mc_div = $( "div#mainvisual > div:eq(" + num + ")" );
		var mc_img = $( "div#mainvisual > div:eq(" + num + ") div.btn img" );
		
		if ( f_num != num ) {
			$( "div#mainvisual > div" ).hide();
			mc_div.find( "div.detail" ).hide();
			mc_div.fadeIn( 200 );
			f_num = num;
			
			if ( mc_img.attr( "src" ).indexOf( "close" ) >= 0 ) {
				self.dispBtn( mc_img, false );
			}
		}
	},
	
	
	
	// �ڍ׃{�^���̐ݒ�
	setDetail: function () {
		
		$( "#plan div#mainvisual div.btn a" ).click( function(){
			var mc_detail = $( this ).parent().siblings( "div.detail" );
			var mc_img    = $( this ).children( "img" );
			
			$( this ).hide();
			$( this ).fadeIn( 100 );
			
			if ( mc_detail.is( ':visible' ) ) {
				mc_detail.fadeOut( 100 );
				self.dispBtn( mc_img, false );
			}
			else {
				mc_detail.fadeIn( 100 );
				self.dispBtn( mc_img, true );
			}
		});
	},
	
	
	
	// �ڍ׃{�^���̐���
	dispBtn: function ( mc_img, mode ) {
		
		if ( mode ) {
			mc_img.attr( 'src', mc_img.attr( 'src' ).replace( 'detail', 'close' ));
		}
		else {
			mc_img.attr( 'src', mc_img.attr( 'src' ).replace( 'close', 'detail' ))	
		}
	},
	
	
	
	// �T���l�C���̐ݒ�
	setThumb: function ( num ) {
		var mc_thumb = $( "ul#thumb li:eq(" + num + ")" );
		
		$( "ul#thumb li" ).css({ "opacity" : "0.4" });
		mc_thumb.css({ "opacity" : "1" });
		
		$( "ul#thumb li img" ).addClass( "ov" );
		mc_thumb.find( "img" ).removeClass( "ov" );
	},
	
	
	
	// �T���l�C���̃{�^���ݒ�
	clickThumb: function () {
		
		$( "ul#thumb li a" ).click( function(){
			var num = $( "ul#thumb li a" ).index( this );
			
			self.setThumb( num );
			self.setMain( num );
		});
	}
	
	
	
}
$(function () { self.init(); });
})(jQuery);

