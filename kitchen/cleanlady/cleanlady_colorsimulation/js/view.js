(function(){
	var app = simuRakuera;

	app.view = function(){
	//Init*****
		var isTouch = ('createTouch' in document) || ('ontouchstart' in document),
			eventName = {
				start : (isTouch) ? "touchstart" : "mousedown",
				end : (isTouch) ? "touchend" : "mouseup",
				click : (isTouch) ? "click" : "click"//�X�N���[�������Ή�
			};
	
		initDOM_();
		initEvent_();
		app.domReady.initEvents.exec({eventName : eventName});
		
		delete app.view;
	
	//Method*****
		function initDOM_(){
			
		}
	
		function initEvent_(){
			var $html = $("html");
			
		//Header
			$(".print").on(eventName.click,function(){
				$html.addClass("print");
				window.print();
				$html.removeClass("print");
			});
		
		//Menu
			$("#menu-a").on(eventName.click,".to_menu-b",function(){
				var vm = app.plan.viewModel;
				
				var selectButton = ko.contextFor(this).$data;
				//�ʑI���̐F����v���Ă��āu�S�́v�I���ɂȂ��Ă���ꍇ�A������selectItem()�ɔ��f������
				var selectItem = (vm.selectItem() !== undefined && selectButton.name == "door" && vm.selectItem().name !== "door") ? vm.simuList.items()[0] : selectButton;
				
				vm.selectItem(selectItem);
				vm.menuB(true);
			}).on("mouseenter",".box-item",function(){
				var partsname = ko.contextFor(this).$data.name;
				var classname = (partsname == "door_wall") ? ".border_door_wall, .border_door_floor_b" : (partsname == "door") ? ".border_door_wall, .border_door_floor" : ".border_" + partsname;
				var $classname = $(classname);
				$classname.add($classname.parent(".box-border-simu")).addClass("mouseover");
			}).on("mouseleave",".box-item",function(){
				var partsname = ko.contextFor(this).$data.name;
				var classname = (partsname == "door_wall") ? ".border_door_wall, .border_door_floor_b" : (partsname == "door") ? ".border_door_wall, .border_door_floor" : ".border_" + partsname;
				var $classname = $(classname);
				$classname.add($classname.parent(".box-border-simu")).removeClass("mouseover");
			});
			$(".to_menu-a").on(eventName.click,function(){
				app.plan.viewModel.menuB(false);
			});
			
			$("#menu-b").on(eventName.click,".ul-select li",function(){
				var context = ko.contextFor(this),
					next = {},
					nextVal = {};
				
				if(context.$parent.series){
					nextVal.series = context.$parent.series;
				}
				nextVal.color = context.$data;
				next[context.$parents[1].name] = nextVal;
				
				if(context.$parents[1].partsCategory == "door"){
					if(context.$root.tabGroup()){//�ʑI����S�̂ɔ��f
						next.door = nextVal;
					}else{//�S�̑I�����ʂɔ��f
						next.door_wall = nextVal;
						next.door_floor = nextVal;
					}
				}
				
				app.plan.viewModel.simuList.change(next);
			}).on(eventName.click,".tab-select-group li",function(){
				var nowClass = $(this).attr("class").replace("on","").replace(" ","");
				var vm = app.plan.viewModel;
				var isTabGroup = (nowClass == "parts");

				vm.tabGroup(isTabGroup);
				if(isTabGroup){
					if(vm.tabWall()){
						vm.selectItem(vm.simuList.items()[1]);
					}else{
						vm.selectItem(vm.simuList.items()[2]);
					}
				}else{
					vm.selectItem(vm.simuList.items()[0]);
				}
			}).on(eventName.click,".tab-select-parts li",function(){
				var nowClass = $(this).attr("class").replace("on","").replace(" ","");
				var vm = app.plan.viewModel;
				var isTabWall = nowClass == "door_wall";
				
				vm.tabWall(isTabWall);
				if(isTabWall){
					vm.selectItem(vm.simuList.items()[1]);
				}else{
					vm.selectItem(vm.simuList.items()[2]);
				}
			}).on("mouseenter",".tab-select li",function(e){
				var partsname = $(e.currentTarget).attr("class");
				var isParts = $(e.currentTarget).parent().hasClass("tab-select-parts");
				var classname = (isParts) ? ".border_" + partsname : (partsname == "all") ? ".border_door_wall, .border_door_floor" : ".border_door_wall, .border_door_floor_b";
				var $classname = $(classname);
				$classname.add($classname.parent(".box-border-simu")).addClass("mouseover");
			}).on("mouseleave",".tab-select li",function(e){
				var partsname = $(e.currentTarget).attr("class");
				var isParts = $(e.currentTarget).parent().hasClass("tab-select-parts");
				var classname = (isParts) ? ".border_" + partsname : (partsname == "all") ? ".border_door_wall, .border_door_floor" : ".border_door_wall, .border_door_floor_b";
				var $classname = $(classname);
				$classname.add($classname.parent(".box-border-simu")).removeClass("mouseover");
			});
			
		//Effects
			//CSS transition�������Ȃ����ł�jQuery�A�j���[�V���������s
			//�������ko.js��
			$("#menu-b")
			.on("visualStateInit",function(e,state){
				if(!ko.unwrap(state.on)){
					$(this).css("left","102%");
				}
			})
			.on("visualStateChanged",function(e,state){
				if(ko.unwrap(state.on)){
					$(this).animate({"left" : "3px"},700);
				}else{
					$(this).animate({"left" : "102%"},700);
				}
			});
			
			//����PNG�������Ȃ����ł�belatedPNG�����s
			//�������ko.js��
			/*
			$(document).on("fixPng","img",function(e){
				var $this = $(this),
					prevShape1 = $this.prev("shape"),
					prevShape2 = (prevShape1) ? prevShape1.prev("shape") : false;
				if(prevShape2){
					prevShape1.add(prevShape2).remove();
				}
				
				try{
					$this.fixPng();
				}catch(e){}//no-boxshadow����IE8�ȉ��łȂ����iOpera Mini�Ȃǁj�p
			});
			*/
		}
	}
})();