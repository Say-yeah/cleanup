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
			wc:{parts:"kpanel",name : "ホワイトクラウド", src : "wc"},
			mt:{parts:"kpanel",name : "モザイクタイル", src : "mt"},
			gw:{parts:"kpanel",name : "グレージュウッド", src : "gw"},
			white:{parts:"floor",name : "ホワイト", src : "white"},
			natural:{parts:"floor",name : "ナチュラル", src : "natural"},
			medium:{parts:"floor",name : "ミディアム", src : "medium"},
			dark:{parts:"floor",name : "ダーク", src : "dark"},
			s1:{parts:"door",series : "sclass", name : "ステーリアシャンパン", src : "s1",html :"ステーリア<br>シャンパン"},
			s2:{parts:"door",series : "sclass", name : "ステーリアワイン", src : "s2"},
			s3:{parts:"door",series : "sclass", name : "ステーリアセピア", src : "s3"},
			a1:{parts:"door",series : "aclass", name : "ボーテシルバー", src : "a1"},
			a2:{parts:"door",series : "aclass", name : "ボーテロゼ", src : "a2"},
			a3:{parts:"door",series : "aclass", name : "ボーテレッド", src : "a3"},
			a4:{parts:"door",series : "aclass", name : "ボーテアクア", src : "a4"},
			a5:{parts:"door",series : "aclass", name : "ボーテボルドー", src : "a5"},
			a6:{parts:"door",series : "aclass", name : "ボーテチャコール", src : "a6"},
			a7:{parts:"door",series : "aclass", name : "ボーテウッドホワイト", src : "a7",html :"ボーテウッド<br>ホワイト"},
			a8:{parts:"door",series : "aclass", name : "ボーテウッドダーク", src : "a8"},
			b1:{parts:"door",series : "bclass", name : "ルナホワイト", src : "b1"},
			b2:{parts:"door",series : "bclass", name : "ルナレッド", src : "b2"},
			b3:{parts:"door",series : "bclass", name : "ルナブルー", src : "b3"},
			b4:{parts:"door",series : "bclass", name : "フロウホワイト", src : "b4"},
			b5:{parts:"door",series : "bclass", name : "フロウピンク", src : "b5"},
			b6:{parts:"door",series : "bclass", name : "フロウベージュ", src : "b6"},
			b7:{parts:"door",series : "bclass", name : "パティナオパール", src : "b7"},
			b8:{parts:"door",series : "bclass", name : "パティナマーブル", src : "b8"},
			b9:{parts:"door",series : "bclass", name : "パティナジェット", src : "b9"},
			b10:{parts:"door",series : "bclass", name : "パティナルビー", src : "b10"},
			c1:{parts:"door",series : "cclass", name : "クリスタホワイト", src : "c1"},
			c2:{parts:"door",series : "cclass", name : "クリスタシトロン", src : "c2"},
			c3:{parts:"door",series : "cclass", name : "クリスタブルーグレー", src : "c3",html :"クリスタ<br>ブルーグレー"},
			c4:{parts:"door",series : "cclass", name : "クリスタレッド", src : "c4"},
			c5:{parts:"door",series : "cclass", name : "クリスタチャコール", src : "c5"},
			c6:{parts:"door",series : "cclass", name : "クリスタブラウン", src : "c6"},
			c7:{parts:"door",series : "cclass", name : "メリノローズ", src : "c7"},
			c8:{parts:"door",series : "cclass", name : "メリノグレージュ", src : "c8"},
			c9:{parts:"door",series : "cclass", name : "メリノバーガンディー", src : "c9",html :"メリノ<br>バーガンディー"},
			c10:{parts:"door",series : "cclass", name : "オークナチュラル", src : "c10"},
			c11:{parts:"door",series : "cclass", name : "オークミディアム", src : "c11"},
			c12:{parts:"door",series : "cclass", name : "オークダーク", src : "c12"},
			c13:{parts:"door",series : "cclass", name : "ペアウッドホワイト", src : "c13"},
			c14:{parts:"door",series : "cclass", name : "ペアウッドアッシュ", src : "c14"},
			d1:{parts:"door",series : "dclass", name : "リフレホワイト", src : "d1"},
			d2:{parts:"door",series : "dclass", name : "リフレイエロー", src : "d2"},
			d3:{parts:"door",series : "dclass", name : "リフレチャコール", src : "d3"},
			d4:{parts:"door",series : "dclass", name : "アルブナチュラル", src : "d4"},
			d5:{parts:"door",series : "dclass", name : "アルブミディアム", src : "d5"}
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

