(function ($) {

var self = $.clinap = {
	n:     2,
	timer: null,
	
	/* 初期設定 */
	//////////////////////////////////////////////////////
	init: function () {
		var fade = $('#report_top');
		
		fade.find('ul li.vol_2, ul li.vol_3, li.vol_4, div.ctrl div.repo_1 span').hide();
		
		self.hover();
		self.start();
		
		self.ctrl();
		fade.hover(self.stop, self.start);
	},
	
	hover: function(){
		var li = $('#report_top ul li.vol_3');
		li.find('a').hover(
			function () { 
				var class_now = $(this).parent().attr('class');
				if (class_now == 'left') {
					var class_1 = 'center';
					var class_2 = 'right';
				}
				else if (class_now == 'center') {
					var class_1 = 'left';
					var class_2 = 'right';
				}
				else if (class_now == 'right') {
					var class_1 = 'left';
					var class_2 = 'center';
				}
				li.find('div.' + class_1 + ' a').addClass('off'); 
				li.find('div.' + class_2 + ' a').addClass('off'); 
			},
			function () { 
				var class_now = $(this).parent().attr('class');
				if (class_now == 'left') {
					var class_1 = 'center';
					var class_2 = 'right';
				}
				else if (class_now == 'center') {
					var class_1 = 'left';
					var class_2 = 'right';
				}
				else if (class_now == 'right') {
					var class_1 = 'left';
					var class_2 = 'center';
				}
				li.find('div.' + class_1 + ' a').removeClass('off');
				li.find('div.' + class_2 + ' a').removeClass('off');
			 }
		);
	},
	
	/* スライドショー開始 */
	//////////////////////////////////////////////////////
	start: function () {
		// 一定の間隔で関数を呼ぶ設定
		self.timer = setInterval(function () {
			self.change();
		}, 4500);
	},
	
	/* スライドショー停止 */
	//////////////////////////////////////////////////////
	stop: function () {
		// 一定の間隔で関数を呼ぶ設定
		clearInterval(self.timer);
	},
	
	/* サムネイル */
	//////////////////////////////////////////////////////
	sum: function () {
		var ctrl = $('#report_top div.ctrl');
		
		if (self.n == 4)
			ctrl.find('div span').fadeIn(750);
		else {
			ctrl.find('div.repo_' + self.n + ' span').fadeOut(750);
			if (self.n == 1) {
				ctrl.find('div.repo_' + (self.n+1) + ' span').fadeIn(750);
				ctrl.find('div.repo_' + (self.n+2) + ' span').fadeIn(750);
			}
			else if (self.n == 2) {
				ctrl.find('div.repo_' + (self.n-1) + ' span').fadeIn(750);
				ctrl.find('div.repo_' + (self.n+1) + ' span').fadeIn(750);
			}
			else if (self.n == 3) {
				ctrl.find('div.repo_' + (self.n-1) + ' span').fadeIn(750);
				ctrl.find('div.repo_' + (self.n-2) + ' span').fadeIn(750);
			}
		}
	},
	
	/* クリック */
	//////////////////////////////////////////////////////
	ctrl: function () {
		$('#report_top div.ctrl a, #report_top div.ctrl span').click(function () {
			if (self.lock)
				return false;
			self.lock = true;
			
			self.n = $(this).parent().attr('class').replace(/repo_/, '') - 0;
			self.change();
			
			return false;
		});
	},
	
	/* 写真の入れ替え */
	//////////////////////////////////////////////////////
	change: function () {
		var ul    = $('#report_top ul');
		var li    = ul.find('li.vol_' + self.n);
		self.lock = true;
		
		self.sum();
		
		ul.append(li.hide());
		li.fadeIn(800, function () {
			self.n++;
			if (self.n > 4)
				self.n = 1;
			
			self.lock = false;
		});
	}
	
};

$(function () { self.init(); });

})(jQuery);