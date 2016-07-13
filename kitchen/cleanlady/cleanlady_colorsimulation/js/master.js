(function(){
	var app = simuRakuera;

	app.ms = (function(){
		var master = {
			door:{parts:"parts",name : "扉カラー", src : "door" ,zIndex : 3},
			door_wall:{parts:"parts",name : "ウォールキャビネット", src : "door_wall" ,zIndex : 4},
			door_floor:{parts:"parts",name : "フロアキャビネット", src : "door_floor" ,zIndex : 5},
			kpanel:{parts:"parts",name : "キッチンパネル", src : "kpanel" ,zIndex : 2},
			floor:{parts:"parts",name : "床", src : "floor" ,zIndex : 1},
			sclass:{parts:"series",name : "S class", src : "sclass"},
			aclass:{parts:"series",name : "A class", src : "aclass"},
			bclass:{parts:"series",name : "B class", src : "bclass"},
			cclass:{parts:"series",name : "C class", src : "cclass"},
			dclass:{parts:"series",name : "D class", src : "dclass"},
			clear:{parts:"kpanel",name : "クリア", src : "clear"},
			sironami:{parts:"kpanel",name : "白波", src : "sironami"},
			wm:{parts:"kpanel",name : "ホワイトマーブル", src : "wm"},
			wb:{parts:"kpanel",name : "ホワイトブリック", src : "wb"},
			mt:{parts:"kpanel",name : "モザイクタイル", src : "mt"},
			js:{parts:"kpanel",name : "ジュエルストーン", src : "js"},
			ww:{parts:"kpanel",name : "ホワイトウッド", src : "ww"},
			gw:{parts:"kpanel",name : "グレイッシュウッド", src : "gw"},
			dw:{parts:"kpanel",name : "ダークウッド", src : "dw"},
			white:{parts:"floor",name : "ホワイト", src : "white"},
			natural:{parts:"floor",name : "ナチュラル", src : "natural"},
			medium:{parts:"floor",name : "ミディアム", src : "medium"},
			dark:{parts:"floor",name : "ダーク", src : "dark"},
			sc:{parts:"door",series : "sclass", name : "ステーリアシャンパン", src : "sc",html :"ステーリア<br>シャンパン"},
			sw:{parts:"door",series : "sclass", name : "ステーリアワイン", src : "sw"},
			ss:{parts:"door",series : "sclass", name : "ステーリアセピア", src : "ss"},
			bs:{parts:"door",series : "aclass", name : "ボーテシルバー", src : "bs"},
			bro:{parts:"door",series : "aclass", name : "ボーテロゼ", src : "bro"},
			bre:{parts:"door",series : "aclass", name : "ボーテレッド", src : "bre"},
			ba:{parts:"door",series : "aclass", name : "ボーテアクア", src : "ba"},
			bb:{parts:"door",series : "aclass", name : "ボーテボルドー", src : "bb"},
			bc:{parts:"door",series : "aclass", name : "ボーテチャコール", src : "bc"},
			bwh:{parts:"door",series : "aclass", name : "ボーテウッドホワイト", src : "bwh",html :"ボーテウッド<br>ホワイト"},
			bwd:{parts:"door",series : "aclass", name : "ボーテウッドダーク", src : "bwd"},
			lw:{parts:"door",series : "bclass", name : "ルナホワイト", src : "lw"},
			lr:{parts:"door",series : "bclass", name : "ルナレッド", src : "lr"},
			lb:{parts:"door",series : "bclass", name : "ルナブルー", src : "lb"},
			fw:{parts:"door",series : "bclass", name : "フロウホワイト", src : "fw"},
			fp:{parts:"door",series : "bclass", name : "フロウピンク", src : "fp"},
			fb:{parts:"door",series : "bclass", name : "フロウベージュ", src : "fb"},
			po:{parts:"door",series : "bclass", name : "パティナオパール", src : "po"},
			pm:{parts:"door",series : "bclass", name : "パティナマーブル", src : "pm"},
			pj:{parts:"door",series : "bclass", name : "パティナジェット", src : "pj"},
			pr:{parts:"door",series : "bclass", name : "パティナルビー", src : "pr"},
			cw:{parts:"door",series : "cclass", name : "クリスタホワイト", src : "cw"},
			cs:{parts:"door",series : "cclass", name : "クリスタシトロン", src : "cs"},
			cbg:{parts:"door",series : "cclass", name : "クリスタブルーグレー", src : "cbg",html :"クリスタ<br>ブルーグレー"},
			cr:{parts:"door",series : "cclass", name : "クリスタレッド", src : "cr"},
			cc:{parts:"door",series : "cclass", name : "クリスタチャコール", src : "cc"},
			cbr:{parts:"door",series : "cclass", name : "クリスタブラウン", src : "cbr"},
			mr:{parts:"door",series : "cclass", name : "メリノローズ", src : "mr"},
			mg:{parts:"door",series : "cclass", name : "メリノグレージュ", src : "mg"},
			mb:{parts:"door",series : "cclass", name : "メリノバーガンディー", src : "mb",html :"メリノ<br>バーガンディー"},
			on:{parts:"door",series : "cclass", name : "オークナチュラル", src : "on"},
			om:{parts:"door",series : "cclass", name : "オークミディアム", src : "om"},
			od:{parts:"door",series : "cclass", name : "オークダーク", src : "od"},
			pwh:{parts:"door",series : "cclass", name : "ペアウッドホワイト", src : "pwh"},
			pwa:{parts:"door",series : "cclass", name : "ペアウッドアッシュ", src : "pwa"},
			rw:{parts:"door",series : "dclass", name : "リフレホワイト", src : "rw"},
			ry:{parts:"door",series : "dclass", name : "リフレイエロー", src : "ry"},
			rc:{parts:"door",series : "dclass", name : "リフレチャコール", src : "rc"},
			an:{parts:"door",series : "dclass", name : "アルブナチュラル", src : "an"},
			am:{parts:"door",series : "dclass", name : "アルブミディアム", src : "am"}
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
			
			//masterを精査してcolorList内を整備
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

