(function ($) {

var f_dup = false;
var mc_dup;
var self = $.rakuera = {
	
	
	
	init: function () {
		self.slideshow();
		self.reform_tab();
		self.pnav();
		self.pnav_slide();
		self.snav01();
		self.snav02();
		self.accordion();
		self.simulation();
		self.bottom();
		self.fix_height();
	},
	
	
	
	// トップ：slideshow
	slideshow: function () {
		
		if ( $( "body#top" ).length > 0 ) {
			$( "div#mainvisual > ul" ).bxSlider({
				auto:     true,
				mode:     "fade",
				speed:    1000,
				pause:    5000,
				pager:    false,
				controls: false,
			});
		}
	},
	
	
	
	// リフォーム
	reform_tab: function () {
		
		if ( $( "body#reform" ).length > 0 ) {
			
			$( "div#point1" ).show();
			
			$( "div#tab ul li a" ).click( function(){
				var num = $( "div#tab ul li" ).index( $( this ).parent() );
				var obj = $( "div#point_frame > div:eq(" + num + ")" );
				
				if (obj.is(':hidden')) {
					$( "div#tab ul li" ).removeClass( "on" );
					$( this ).parent().toggleClass( "on" );
					
					$( "div#point_frame div.point" ).hide();
					obj.fadeIn( 1000 );
					
					var str = "lad_rf" + (num + 1);
					VL_Send( str );
				}
			});
		}
	},
	
	
	
	// サイドナビ：選び方
	pnav: function () {
		var mc_child = $( "div#side div#nav_choice ul" );
		var id = $( "body" ).attr( "id" );
		var a = [ "choice", "reform", "simulation" ];
			
		for ( var i = 0; i < a.length; i++ ) {
			var str = a[ i ];
			
			if ( id == str ) {
				var mc_child = $( "div#nav_choice > ul > li:eq(" + i + ")" );
				var mc_img   = mc_child.find( "img" );
				mc_img.attr( 'src', mc_img.attr( 'src' ).replace( 'off', 'active' ));
			}
		};
	},
	
	
	
	// サイドナビ：スライド
	pnav_slide: function () {
		
		$( "div#nav_rakuera > ul > li a, div#nav_feature > ul > li a" ).click( function() {
			var tar = $( this ).next();
			tar.slideToggle( 300, "easeOutSine" );
		});
	},
	
	
	
	// サイドナビ：ラクエラのこだわり
	snav01: function () {
		var mc_child = $( "div#side div#nav_feature ul ul" );
				mc_child.hide();
		var id = $( "body" ).attr( "id" );
		
		var a = new Array(
			[ "feature_door", "feature_worktop_sink", "feature_storage" ]
		);
		
		for ( var i = 0; i < a[ 0 ].length; i++ ) {
			var str = a[ 0 ][ i ];
			
			if ( id == str ) {
				var mc_parent  = $( "div#nav_feature > ul > li:eq(1) ul");
				var mc_child   = $( "div#nav_feature > ul > li:eq(1) > ul > li:eq(" + i + ")");
				var mc_img     = mc_child.find( "img" );
				
				mc_parent.show();
				mc_img.attr( 'src', mc_img.attr( 'src' ).replace( 'off', 'active' ));
			}
		};
	},
	
	
	
	// サイドナビ：詳細
	snav02: function () {
		var mc_child = $( "div#side div#nav_rakuera ul ul" );
				mc_child.hide();
		var id = $( "body" ).attr( "id" );
		
		var a = new Array(
			[ "plan", "package" ],
			[ "stainless_worktop", "marble_worktop" ],
			[ "floor", "wall", "storage" ],
			[ "stainless_sink", "marble_sink", "accessory", "faucet", "dishes" ],
			[ "gas_conro", "ih", "gas_oven", "rangehood" ],
			[ "door", "panel" ]
		);
		
		for ( var i = 0; i < a.length; i++ ) {
			
			for ( var j = 0; j < a[ i ].length; j++ ) {
				var str = a[ i ][ j ];
				
				if ( id == str ) {
					var tar_parent = i;
					var tar_child  = j;
					var mc_parent  = $( "div#nav_rakuera > ul > li:eq(" + tar_parent + ") ul");
					var mc_child   = $( "div#nav_rakuera > ul > li:eq(" + tar_parent + ") > ul > li:eq(" + tar_child + ")");
					var mc_img     = mc_child.find( "img" );
					
					mc_parent.show();
					mc_img.attr( 'src', mc_img.attr( 'src' ).replace( 'off', 'active' ));
				}
			};
		};
	},
	
	
	
	// アコーディオン
	accordion: function () {
		
		$( "a.switch" ).click( function() {
			var mc     = $( this ).next();
			var mc_img = $( this ).find( "img" );
			var leg    = $("a.switch").length;
			var num    = $( "a.switch" ).index( this );
			
			// 同じコンテンツを閉じる
			if ( mc.is( ':visible' ) ) {
				mc_img.attr( 'src', mc_img.attr( 'src' ).replace( 'open', 'close' ));
				mc.slideUp( 1000, "easeOutExpo" );
			}
			
			// 他のコンテンツ or 初回選択
			else {
				mc_img.attr( 'src', mc_img.attr( 'src' ).replace( 'close', 'open' ));
				
				for ( var i = 0; i < leg; i++ ) {
					var close_btn = $( "a.switch:eq(" + i + ")" );
					var close_ac  = $( "div.accordion:eq(" + i + ")" );
					
					if ( close_ac.is( ':visible' ) && i != num ) {
						f_dup  = true;
						mc_dup = mc;
						self.accordion_close( close_ac );
					}
				};
				
				// 他がどこも開いていなかったら
				if ( f_dup == false ) {
					mc.slideDown( 800, "easeInSine" );
				}
				
				self.tag( this );
			}
		});
		
		$( "div.btn_hide a, div.btn_close a,  div.btn_close_s a" ).click( function(){
			self.accordion_close( $(this) );
		});
	},
	
	
	
	// シミュレーション
	simulation: function () {
		$( ".btn_simulation" ).click( function(){
			window.open( 'cleanlady_colorsimulation/', 'win_simulation', 'width=1030, height=690, menubar=no, toolbar=no, scrollbars=yes');
		});
	},
	
	
	
	// 閉じる
	accordion_close: function (this_) {
		var mc     = f_dup ? this_ : this_.parent().parent( "div.accordion" );
		var mc_img = mc.prev().find( "img");
		
		mc_img.attr( 'src', mc_img.attr( 'src' ).replace( 'open', 'close' ));
		
		// 他に開いていたら 
		if ( f_dup ) {
			
			// 開いているのを閉じる
			mc.slideUp( 300,
				
				// ターゲットを開く
				function() { 
					mc_dup.slideDown( 800,
					function () {
						$( 'html, body' ).animate( { scrollTop: $( this ).offset().top - 100 }, 1000 );
					} );
					
					mc_dup = false;
					f_dup  = false;
				});
		}
		
		// 他に開いていなかったら
		else {
			mc.slideUp( 1000, "easeOutExpo" );
			$( 'html, body' ).animate( { scrollTop: mc.prev( 'a' ).offset().top - 100 }, 1000, 'easeOutExpo' );
		}
	},
	
	
	
	// 高さの設定
	bottom: function () {
		var h_main = $( "div#content" ).height();
		var h_side = $( "div#side" ).height();
		
		if ( h_main > h_side ) {
			$( "div#content" ).css({ "margin-bottom" : "60px" });
		}
	},
	
	
	
	// クリックタグ
	tag: function ( mc ) {
		var id  = $( "body" ).attr( "id" );
		var num = $( "a.switch" ).index( mc ) + 1;
		
		switch ( id ){
			case "package":           id = "pc"; break;
			case "stainless_worktop": id = "sw"; break;
			case "marble_worktop":    id = "mw"; break;
			case "floor":             id = "fl"; break;
			case "wall":              id = "wl"; break;
			case "stainless_sink":    id = "ss"; break;
			case "marble_sink":       id = "ms"; break;
			case "accessory":         id = "as"; break;
			case "faucet":            id = "fc"; break;
			case "dishes":            id = "ds"; break;
			case "gas_conro":         id = "gc"; break;
			case "ih":                id = "ih";  break;
			case "gas_oven":          id = "go"; break;
			case "rangehood":         id = "rh"; break;
			case "door":              id = "do"; break;
			case "panel":             id = "pl"; break;
		}
		
		var str = 'lad_' + id + num;
		VL_Send( str );
	},
	
	
	
	// 高さ統一化
	fix_height: function () {
		$( ".fix_h > *" ).lineUp({
			onFontResize : false,
			onResize : false
		});
	}
	
	
	
}
$(function () { self.init(); });
})(jQuery);

