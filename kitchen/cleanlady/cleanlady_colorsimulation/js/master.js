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
			clear:{parts:"kpanel",name : "�N���A", src : "clear"},
			sironami:{parts:"kpanel",name : "���g", src : "sironami"},
			wm:{parts:"kpanel",name : "�z���C�g�}�[�u��", src : "wm"},
			wb:{parts:"kpanel",name : "�z���C�g�u���b�N", src : "wb"},
			mt:{parts:"kpanel",name : "���U�C�N�^�C��", src : "mt"},
			js:{parts:"kpanel",name : "�W���G���X�g�[��", src : "js"},
			ww:{parts:"kpanel",name : "�z���C�g�E�b�h", src : "ww"},
			gw:{parts:"kpanel",name : "�O���C�b�V���E�b�h", src : "gw"},
			dw:{parts:"kpanel",name : "�_�[�N�E�b�h", src : "dw"},
			white:{parts:"floor",name : "�z���C�g", src : "white"},
			natural:{parts:"floor",name : "�i�`������", src : "natural"},
			medium:{parts:"floor",name : "�~�f�B�A��", src : "medium"},
			dark:{parts:"floor",name : "�_�[�N", src : "dark"},
			sc:{parts:"door",series : "sclass", name : "�X�e�[���A�V�����p��", src : "sc",html :"�X�e�[���A<br>�V�����p��"},
			sw:{parts:"door",series : "sclass", name : "�X�e�[���A���C��", src : "sw"},
			ss:{parts:"door",series : "sclass", name : "�X�e�[���A�Z�s�A", src : "ss"},
			bs:{parts:"door",series : "aclass", name : "�{�[�e�V���o�[", src : "bs"},
			bro:{parts:"door",series : "aclass", name : "�{�[�e���[", src : "bro"},
			bre:{parts:"door",series : "aclass", name : "�{�[�e���b�h", src : "bre"},
			ba:{parts:"door",series : "aclass", name : "�{�[�e�A�N�A", src : "ba"},
			bb:{parts:"door",series : "aclass", name : "�{�[�e�{���h�[", src : "bb"},
			bc:{parts:"door",series : "aclass", name : "�{�[�e�`���R�[��", src : "bc"},
			bwh:{parts:"door",series : "aclass", name : "�{�[�e�E�b�h�z���C�g", src : "bwh",html :"�{�[�e�E�b�h<br>�z���C�g"},
			bwd:{parts:"door",series : "aclass", name : "�{�[�e�E�b�h�_�[�N", src : "bwd"},
			lw:{parts:"door",series : "bclass", name : "���i�z���C�g", src : "lw"},
			lr:{parts:"door",series : "bclass", name : "���i���b�h", src : "lr"},
			lb:{parts:"door",series : "bclass", name : "���i�u���[", src : "lb"},
			fw:{parts:"door",series : "bclass", name : "�t���E�z���C�g", src : "fw"},
			fp:{parts:"door",series : "bclass", name : "�t���E�s���N", src : "fp"},
			fb:{parts:"door",series : "bclass", name : "�t���E�x�[�W��", src : "fb"},
			po:{parts:"door",series : "bclass", name : "�p�e�B�i�I�p�[��", src : "po"},
			pm:{parts:"door",series : "bclass", name : "�p�e�B�i�}�[�u��", src : "pm"},
			pj:{parts:"door",series : "bclass", name : "�p�e�B�i�W�F�b�g", src : "pj"},
			pr:{parts:"door",series : "bclass", name : "�p�e�B�i���r�[", src : "pr"},
			cw:{parts:"door",series : "cclass", name : "�N���X�^�z���C�g", src : "cw"},
			cs:{parts:"door",series : "cclass", name : "�N���X�^�V�g����", src : "cs"},
			cbg:{parts:"door",series : "cclass", name : "�N���X�^�u���[�O���[", src : "cbg",html :"�N���X�^<br>�u���[�O���["},
			cr:{parts:"door",series : "cclass", name : "�N���X�^���b�h", src : "cr"},
			cc:{parts:"door",series : "cclass", name : "�N���X�^�`���R�[��", src : "cc"},
			cbr:{parts:"door",series : "cclass", name : "�N���X�^�u���E��", src : "cbr"},
			mr:{parts:"door",series : "cclass", name : "�����m���[�Y", src : "mr"},
			mg:{parts:"door",series : "cclass", name : "�����m�O���[�W��", src : "mg"},
			mb:{parts:"door",series : "cclass", name : "�����m�o�[�K���f�B�[", src : "mb",html :"�����m<br>�o�[�K���f�B�["},
			on:{parts:"door",series : "cclass", name : "�I�[�N�i�`������", src : "on"},
			om:{parts:"door",series : "cclass", name : "�I�[�N�~�f�B�A��", src : "om"},
			od:{parts:"door",series : "cclass", name : "�I�[�N�_�[�N", src : "od"},
			pwh:{parts:"door",series : "cclass", name : "�y�A�E�b�h�z���C�g", src : "pwh"},
			pwa:{parts:"door",series : "cclass", name : "�y�A�E�b�h�A�b�V��", src : "pwa"},
			rw:{parts:"door",series : "dclass", name : "���t���z���C�g", src : "rw"},
			ry:{parts:"door",series : "dclass", name : "���t���C�G���[", src : "ry"},
			rc:{parts:"door",series : "dclass", name : "���t���`���R�[��", src : "rc"},
			an:{parts:"door",series : "dclass", name : "�A���u�i�`������", src : "an"},
			am:{parts:"door",series : "dclass", name : "�A���u�~�f�B�A��", src : "am"}
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
							colorList[obj.series].push(key);
							seriesList[obj.series].parts = obj.parts;
						}else{
							partsList[obj.parts] = partsList[obj.parts] || {parts : obj.parts, series : false, list : []};
							partsList[obj.parts].list.push(key);
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

