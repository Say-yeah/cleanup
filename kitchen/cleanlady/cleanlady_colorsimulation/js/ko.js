(function(){
	var app = simuRakuera;
	
	app.ko = function(){
		initCustomBindings();
		
		delete app.ko;
	};
	
	function initCustomBindings(){
		var $html = $("html");
		
		initCustomBindingVisualState($html);
		//initCustomBindingPngChange($html); IE7�ȏ�Ή��ɂȂ������ߕs�v
	}
	
		function initCustomBindingVisualState($html){
			if($html.hasClass("csstransitions")){return;}//CSS transition�������Ȃ����݂̂ɓK�p
			//visualState���ς�邽�тɃC�x���g���s�ijQuery�A�j���[�V���������s������p�j
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
			if($html.hasClass("boxshadow")){return;}//IE6�ȉ��̂݁i����PNG�������Ȃ����j�ɓK�p
			//����PNG�̓��I���������̂��тɃC�x���g���s�ibelatedPNG�����s������p�j
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