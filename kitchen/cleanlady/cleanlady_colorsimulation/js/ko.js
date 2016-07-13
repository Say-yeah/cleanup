(function(){
	var app = simuRakuera;
	
	app.ko = function(){
		initCustomBindings();
		
		delete app.ko;
	};
	
	function initCustomBindings(){
		var $html = $("html");
		
		initCustomBindingVisualState($html);
		//initCustomBindingPngChange($html); IE7以上対応になったため不要
	}
	
		function initCustomBindingVisualState($html){
			if($html.hasClass("csstransitions")){return;}//CSS transitionが効かない環境のみに適用
			//visualStateが変わるたびにイベント発行（jQueryアニメーションを実行させる用）
			ko.bindingHandlers['visualState'] = jQuery ? {
					init: function(element, valueAccessor) {
						jQuery(element)
							.trigger('visualStateInit', [ valueAccessor() ]);
					},
					update: function(element, valueAccessor) {
						ko.bindingHandlers.css.update(element, valueAccessor);
						jQuery(element)
							.trigger('visualStateChanged', [ valueAccessor() ]);
					}
				} : ko.bindingHandlers.css;
		}
		/*
		function initCustomBindingPngChange($html){
			if($html.hasClass("boxshadow")){return;}//IE6以下のみ（透過PNGが効かない環境）に適用
			//透過PNGの動的書きかえのたびにイベント発行（belatedPNGを実行させる用）
			ko.bindingHandlers["pngChange"] = {
				init : function(elem,valueAccessor){
					var val = ko.utils.unwrapObservable(valueAccessor());
					
					$(elem).trigger("fixPng");
				},
				update : function(elem,valueAccessor){
					var val = ko.utils.unwrapObservable(valueAccessor());
					
					$(elem).trigger("fixPng");
				}
			};
		}
		*/
})();