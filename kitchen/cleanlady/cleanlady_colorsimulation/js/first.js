(function(){
	var app = {};
	window.simuRakuera = app;
	
	app.domReady = (function(){
		function CallbackList(){
			this.list = [];
			this.exec_opt = {};
		}
		CallbackList.prototype = {
			add : function(callback,opt){
				this.list.push(callback);
				
				$.extend(this.exec_opt,opt);
			},
			exec : function(opt){
				$.extend(this.exec_opt,opt);
				var exec_opt = this.exec_opt;
				
				$.each(this.list,function(i,obj){
					if(Object.prototype.toString.call(obj).slice(8,-1) == "Function"){obj(exec_opt);}
				});
				
				delete this.exec_opt;
			}
		};
		
		var callbacks_ = new CallbackList(),
			initEvents_ = new CallbackList();
		
		return {
			callbacks : callbacks_,
			initEvents : initEvents_
		}
	})();
})();
