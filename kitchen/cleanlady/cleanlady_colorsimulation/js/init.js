(function(){
	var app = simuRakuera;
	
	$(function(){
	//初期化実行順の管理
		app.debug();
		app.constructor = app.constructor();
		app.ko();
		app.view();
		init();
	
		app.domReady.callbacks.exec();
		delete app.domReady;
	
		function init(){
			app.plan = app.constructor.createObj("plan",{key :"plan"});
			app.plan.viewModel.simuList.initFromList({
				door : {constructor : "item", conf :{
						partsname : "door", partsCategory : "door", val : { series : "sclass", color : "sc" },
						isVisibleFunc : function(){
							var items = app.plan.viewModel.simuList.items();
							var doorSeries = "";
							var doorColor = "";
							
							$.each(items,function(i,item){
								if(item.partsCategory !== "door" || item.name == "door"){return;}
								
								var series = item.val().series;
								if(doorSeries === ""){
									doorSeries = series;
								}
								if(doorSeries !== series){
									doorSeries = false;
									return false;
								}
								var color = item.src();//なぜかvalに反映されないので
								if(doorColor === ""){
									doorColor = color;
								}
								if(doorColor !== color){
									doorColor = false;
									return false;
								}
							});
							
							var isTrue = (doorSeries !== false && doorColor !== false);
							if(isTrue){
								items[0].val(items[1].val());
								app.plan.viewModel.tabGroup(false);//無限ループ防止のため、selectItem()には反映しない。groupの表示のみ切替。（selectItemへの反映はmenuAからBに切替時）
							}
							
							return isTrue;
						}
					}
				},
				door_wall : {constructor : "item", conf :{
					partsname : "door_wall", partsCategory : "door", val : { series : "sclass", color : "sc" },
						isVisibleFunc : function(){
							return !app.plan.viewModel.simuList.items()[0].isVisible();
						}
					}
				},
				door_floor : {
					constructor : "item",
					conf :{
						partsname : "door_floor",
						partsCategory : "door",
						val : { series : "sclass", color : "sc" },
						isVisibleFunc : function(){
							return !app.plan.viewModel.simuList.items()[0].isVisible();
						}
					}
				},
				kpanel : {constructor : "item", conf : {partsname : "kpanel", partsCategory : "kpanel", val : { color : "clear"} }},
				floor : {constructor : "item", conf : {partsname : "floor", partsCategory : "floor",val : { color : "natural" } }}
			});
	
			ko.applyBindings(app.plan.viewModel);
			
			
			//透過PNGが効かない環境ではbelatedPNGを実行（初回用）
			/*
			if($("html").hasClass(".no-boxshadow")){
				try{
					$(".img-png").fixPng();
				}catch(e){}//no-boxshadowかつIE8以下でない環境（Opera Miniなど）用
			}
			*/
			
			//preload
			//imgListLoad(['img/simu/base.jpg','img/simu/door_aa.png','img/simu/door_abg.png','img/simu/door_abr.png','img/simu/door_ac.png','img/simu/door_al.png','img/simu/door_ar.png','img/simu/door_aw.png','img/simu/door_cwe.png','img/simu/door_cwm.png','img/simu/door_cwr.png','img/simu/door_dw.png','img/simu/door_gsa.png','img/simu/door_gsr.png','img/simu/door_gsw.png','img/simu/door_gwbr.png','img/simu/door_gwd.png','img/simu/door_gwm.png','img/simu/door_gww.png','img/simu/door_mw.png','img/simu/door_nw.png','img/simu/door_och.png','img/simu/door_oco.png','img/simu/door_oh.png','img/simu/door_ol.png','img/simu/door_or.png','img/simu/door_ow.png','img/simu/door_rbg.png','img/simu/door_rc.png','img/simu/door_rn.png','img/simu/door_rod.png','img/simu/door_rom.png','img/simu/door_ron.png','img/simu/door_row.png','img/simu/door_rs.png','img/simu/door_rw.png','img/simu/door_tbg.png','img/simu/door_tr.png','img/simu/door_tw.png','img/simu/floor_dark.png','img/simu/floor_medium.png','img/simu/floor_natural.png','img/simu/floor_white.png','img/simu/kpanel_gw.png','img/simu/kpanel_mt.png','img/simu/kpanel_wc.png']);
			
			function imgListLoad(imglist){
				$.each(imglist,function(i,url){
					var img = new Image();
					img.src = url;
					imglist.push(img);
				});
			}
		}
	
	});//document.ready
	
	app.debug = function(){
		delete app.debug;
	}
})();
