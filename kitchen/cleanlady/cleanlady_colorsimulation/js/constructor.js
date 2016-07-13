(function(){// JavaScript Document
	var app = simuRakuera;

	app.constructor = function(){
	//data*****
		var data = {
		
		}
		//ここでしか使わないデータ
	
	//Constructor*****
		function Plan(conf){
			if (!(this instanceof Plan)){
				return new Plan(conf);
			}
	
			this.key = conf.key;
			
			this.viewModel = {
				menuB : ko.observable(false),
				selectItem : ko.observable(),
				simuList : new SimuList(),
				tabGroup : ko.observable(false),
				menuAtemplate : function(self){
					return (self.name == "door_floor" || self.name == "door_wall") ? "menu_a_multidoor_template" : "menu_a_template"
				},
				tabWall : ko.observable(true)
			};
		}

	
		function SimuList(conf){
			if (!(this instanceof SimuList)){
				return new SimuList(conf);
			}
			
			this.items = ko.observableArray([]);
		}
		SimuList.prototype = {
			initFromList : function(list){
				var selfList = this.items;
				
				$.each(list,function(key,val){
					var conf = (val.conf) ? val.conf : {},
						opt = (val.opt) ? val.opt : {};
					
					selfList.push(createObj_(val.constructor,conf,opt));
				});
			},
			change : function(next){
				var items = this.items();
				
				$.each(next,function(key,val){
					$.each(items,function(i,item){
						if(item.name !== key){return;}
						items[i].set(val);
					});
				});
			}
		}
		

	
		//Item
		function Item(conf){
			this.init(conf);
		}
		Item.prototype = {
			init : function(conf){
				var self = this;
				
				this.name = conf.partsname;
				this.val = ko.observable((conf.val) ? conf.val : {});
				this.src = ko.computed(function(){
					var result = "",
						val = self.val();
					
					$.each(val,function(itemkey,itemval){
						if(itemkey !== "color"){return;}
						result += app.ms.getSrc(itemval);
					})
					
					return result;
				});
				this.colorText = ko.computed(this.koColorText,this);
				this.colorHtml = ko.computed(this.koColorHtml,this);
				this.zIndex = app.ms.get(this.name,"zIndex");
				
				//EDIT
				this.isVisible = (conf.isVisibleFunc) ? ko.pureComputed(conf.isVisibleFunc,this) : this.isVisible;
				this.visible = this.isVisible;
				this.noSimuImg = (this.name === "door") ? true : false;
				
				this.partsCategory = conf.partsCategory;
			},
			set : function(newval){
				var complementVal = $.extend(this.val(),this.complementVal(newval));
	
				this.val(complementVal);
			},
			complementVal : function(val){
				return val;
			},
			koSrc : function(){
				var result = "",
					val = this.val();
				
				$.each(val,function(itemkey,itemval){
					if(itemkey !== "color"){return;}
					result += app.ms.getSrc(itemval);
				})
				
				return result;
			},
			koColorText : function(){
				var name = "",
					val = this.val();
				
				if($.isPlainObject(val)){
					var objKeys = (Object.keys) ? Object.keys(val) : $.map(val,function(val_val,val_key){return val_key;}),
					val_length = objKeys.length;
					$.each(val,function(i2,val2){
						if(name !== "" && val_length > 1){name += " ";}
						name += app.ms.getName(val2);
					});
				}else{
					name += app.ms.getName(val);
				}
				
				return name;
			},
			koColorHtml : function(){
				var name = "",
					val = this.val();
				
				if($.isPlainObject(val)){
					var objKeys = (Object.keys) ? Object.keys(val) : $.map(val,function(val_val,val_key){return val_key;}),
					val_length = objKeys.length;
					$.each(val,function(i2,val2){
						if(name !== "" && val_length > 1){name += "<br>";}
						name += app.ms.getName(val2);
					});
				}else{
					name += app.ms.getName(val);
				}
				
				return name;
			},
			//EDIT
			isVisible : function isVisible(){
				return true;
			}
		};


	//Init*****
		return {
			createObj : createObj_
		};


	
	//Method*****
		function inherit_(p) {
			if (Object.create) {
				return Object.create(p);
			}
			
			function f() {};
			f.prototype = p;
			return new f();
		}
	
		function createObj_(constructor,conf){
			switch (constructor){
				case "plan" :
					return new Plan(conf);
					break;
				case "simulist" :
					return new SimuList(conf);
					break;
				case "item" :
					return new Item(conf);
					break;
				default :
					return new Item(conf);
					break;
			}
		}
	}
})();