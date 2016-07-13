(function ($) {
var self = $.top = {
	mc_base  : 'div#mainvisual div.photo',
	mc_gauge : 'div#mainvisual ul.gauge',
	sp       : 1000,
	delay    : 5000,
	timer    : null,
	btn      : false,
	f_photo  : 0,
	total    : null,
	
	
	
	init: function () {
		var first = $( self.mc_base + ' div:first' );
		$( self.mc_base ).children( 'div' ).css( { opacity : '0' });
		first.show();
		first.stop().animate({ opacity : '1', z : '2' }, self.sp );
		
		var icon = $( self.mc_gauge + ' li:first' );
				icon.addClass( "on" );
		
		self.total = $( self.mc_base + " div" ).length;
		self.slide();
		self.btn();
	},
	
	
	
	/* slide */
	slide: function () {
		self.timer = setInterval( function () {
			self.move_next();
		}, self.delay );
	},
		
		
		
	/* click */
	btn: function () {
		$( self.mc_gauge + " li" ).click( function () {
			var num = $( self.mc_gauge + " li" ).index( this );
		
			if ( num == self.f_photo ) {
				console.log("batting");
			}
			else {
				clearInterval( self.timer );
				self.move_next( num );
				self.btn = true;
			}
		});
	},
		
		
		
	/* next */
	move_next: function ( num ) {
		var next_id = num == null ? ( self.f_photo == ( self.total - 1 ) ? 0 : self.f_photo + 1 ) : num;
		var prev    = $( self.mc_base + ' div:eq(' + self.f_photo + ')' );
		var next    = $( self.mc_base + ' div:eq(' + next_id + ')' );
		
		self.gauge( self.f_photo, next_id );
		prev.stop().animate({ opacity : '0' }, self.sp );
		next.show();
		self.f_photo = next_id;
		
		next.stop().animate({ opacity : '1' }, self.sp, function(){
			prev.hide();
			
			if ( self.btn == true ) {
				self.btn = false;
				self.slide();
			}
		});
	},
		

	/* gauge */
	gauge: function ( prev, next ) {
		var mc_prev = $( self.mc_gauge + " li:eq(" + prev + ")" );
		var mc_next = $( self.mc_gauge + " li:eq(" + next + ")" );
		
		mc_prev.removeClass( "on" );
		mc_next.addClass( "on" );
		
		mc_next.hide();
		mc_next.fadeIn( 500 );
	}
}



$(function () { self.init(); });
})(jQuery);