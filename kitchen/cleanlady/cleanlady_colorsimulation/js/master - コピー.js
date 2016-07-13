(function(){
	var app = simuRakuera;

	app.ms = (function(){
		var master = {
			door:{parts:"parts",name : "���J���[", src : "door" ,zIndex : 3},
			door_wall:{parts:"parts",name : "�E�H�[���L���r�l�b�g", src : "door_wall" ,zIndex : 4},
			door_floor:{parts:"parts",name : "�t���A�L���r�l�b�g", src : "door_floor" ,zIndex : 5},
			kpanel:{parts:"parts",name : "�L�b�`���p�l��", src : "kpanel" ,zIndex : 2},
			floor:{parts:"parts",name : "��", src : "floor" ,zIndex : 1},
			sclass:{parts:"series",name : "S class", src : "sclass"},
			aclass:{parts:"series",name : "A class", src : "aclass"},
			bclass:{parts:"series",name : "B class", src : "bclass"},
			cclass:{parts:"series",name : "C class", src : "cclass"},
			dclass:{parts:"series",name : "D class", src : "dclass"},
			wc:{parts:"kpanel",name : "�z���C�g�N���E�h", src : "wc"},
			mt:{parts:"kpanel",name : "���U�C�N�^�C��", src : "mt"},
			gw:{parts:"kpanel",name : "�O���[�W���E�b�h", src : "gw"},
			white:{parts:"floor",name : "�z���C�g", src : "white"},
			natural:{parts:"floor",name : "�i�`������", src : "natural"},
			medium:{parts:"floor",name : "�~�f�B�A��", src : "medium"},
			dark:{parts:"floor",name : "�_�[�N", src : "dark"},
			s1:{parts:"door",series : "sclass", name : "�X�e�[���A�V�����p��", src : "s1",html :"�X�e�[���A<br>�V�����p��"},
			s2:{parts:"door",series : "sclass", name : "�X�e�[���A���C��", src : "s2"},
			s3:{parts:"door",series : "sclass", name : "�X�e�[���A�Z�s�A", src : "s3"},
			a1:{parts:"door",series : "aclass", name : "�{�[�e�V���o�[", src : "a1"},
			a2:{parts:"door",series : "aclass", name : "�{�[�e���[", src : "a2"},
			a3:{parts:"door",series : "aclass", name : "�{�[�e���b�h", src : "a3"},
			a4:{parts:"door",series : "aclass", name : "�{�[�e�A�N�A", src : "a4"},
			a5:{parts:"door",series : "aclass", name : "�{�[�e�{���h�[", src : "a5"},
			a6:{parts:"door",series : "aclass", name : "�{�[�e�`���R�[��", src : "a6"},
			a7:{parts:"door",series : "aclass", name : "�{�[�e�E�b�h�z���C�g", src : "a7",html :"�{�[�e�E�b�h<br>�z���C�g"},
			a8:{parts:"door",series : "aclass", name : "�{�[�e�E�b�h�_�[�N", src : "a8"},
			b1:{parts:"door",series : "bclass", name : "���i�z���C�g", src : "b1"},
			b2:{parts:"door",series : "bclass", name : "���i���b�h", src : "b2"},
			b3:{parts:"door",series : "bclass", name : "���i�u���[", src : "b3"},
			b4:{parts:"door",series : "bclass", name : "�t���E�z���C�g", src : "b4"},
			b5:{parts:"door",series : "bclass", name : "�t���E�s���N", src : "b5"},
			b6:{parts:"door",series : "bclass", name : "�t���E�x�[�W��", src : "b6"},
			b7:{parts:"door",series : "bclass", name : "�p�e�B�i�I�p�[��", src : "b7"},
			b8:{parts:"door",series : "bclass", name : "�p�e�B�i�}�[�u��", src : "b8"},
			b9:{parts:"door",series : "bclass", name : "�p�e�B�i�W�F�b�g", src : "b9"},
			b10:{parts:"door",series : "bclass", name : "�p�e�B�i���r�[", src : "b10"},
			c1:{parts:"door",series : "cclass", name : "�N���X�^�z���C�g", src : "c1"},
			c2:{parts:"door",series : "cclass", name : "�N���X�^�V�g����", src : "c2"},
			c3:{parts:"door",series : "cclass", name : "�N���X�^�u���[�O���[", src : "c3",html :"�N���X�^<br>�u���[�O���["},
			c4:{parts:"door",series : "cclass", name : "�N���X�^���b�h", src : "c4"},
			c5:{parts:"door",series : "cclass", name : "�N���X�^�`���R�[��", src : "c5"},
			c6:{parts:"door",series : "cclass", name : "�N���X�^�u���E��", src : "c6"},
			c7:{parts:"door",series : "cclass", name : "�����m���[�Y", src : "c7"},
			c8:{parts:"door",series : "cclass", name : "�����m�O���[�W��", src : "c8"},
			c9:{parts:"door",series : "cclass", name : "�����m�o�[�K���f�B�[", src : "c9",html :"�����m<br>�o�[�K���f�B�["},
			c10:{parts:"door",series : "cclass", name : "�I�[�N�i�`������", src : "c10"},
			c11:{parts:"door",series : "cclass", name : "�I�[�N�~�f�B�A��", src : "c11"},
			c12:{parts:"door",series : "cclass", name : "�I�[�N�_�[�N", src : "c12"},
			c13:{parts:"door",series : "cclass", name : "�y�A�E�b�h�z���C�g", src : "c13"},
			c14:{parts:"door",series : "cclass", name : "�y�A�E�b�h�A�b�V��", src : "c14"},
			d1:{parts:"door",series : "dclass", name : "���t���z���C�g", src : "d1"},
			d2:{parts:"door",series : "dclass", name : "���t���C�G���[", src : "d2"},
			d3:{parts:"door",series : "dclass", name : "���t���`���R�[��", src : "d3"},
			d4:{parts:"door",series : "dclass", name : "�A���u�i�`������", src : "d4"},
			d5:{parts:"door",series : "dclass", name : "�A���u�~�f�B�A��", src : "d5"}
		};
	
		app.colorList = {
			door : [
				{
					series : "grand",
					list : []
				}
			],
			kpanel : [{}],
			floor : [{}]
		};
		
		initColorList_(master);
		
		return {
			set : function(key,property){
				master[key] = property;
			},
			get : function(key,property){
				var value = "";
				
				if(!key){return;}
	
				if(property){
					if($.isPlainObject(key)){
						$.each(key,function(i,val){
							if(val !== ""){
								value += master[val][property];
							}
						});
					}else{
						value = master[key][property];
					}
				}else{
					value = master[key];
				}
				
				return value;
			},
			getName : function(key){
				return this.get(key,"name");
			},
			getSrc :  function(key){
				return this.get(key,"src");
			},
			getHtml : function(key){
				var html = this.get(key,"html");
				
				if(html === undefined){
					html = this.getName(key);
				}
				
				return html;
			}
		};
	
		function initColorList_(master){
			var result = {},
				partsList = {},
				seriesList = {},
				colorList = {};
			
			//master�𐸍�����colorList���𐮔�
			$.each(master,function(key,obj){
				switch(obj.parts){
					case "parts" :
						break;
					case "series" :
						seriesList[obj.src] = {series : obj.src, list : []};
						break;
					default :
						if(obj.series){
							colorList[obj.series] = colorList[obj.series] || [];
							colorList[obj.series].push(obj.src);
							seriesList[obj.series].parts = obj.parts;
						}else{
							partsList[obj.parts] = partsList[obj.parts] || {parts : obj.parts, series : false, list : []};
							partsList[obj.parts].list.push(obj.src);
						}
						break;
				}
			});
			
			$.each(colorList,function(key,array){
				seriesList[key].list = array;
			})
			$.each(seriesList,function(key,obj){
				partsList[obj.parts] = partsList[obj.parts] || [];
				partsList[obj.parts].push(obj);
			});
			$.each(partsList,function(key,obj){
				if(obj.parts){
					result[key] = [obj];
				}else{
					result[key] = obj;
				}
			});
			
			app.colorList = result;
		}
	})();
})();

