/*------------------------------------------------------*/
/* Updated: 2014/09/13 */
/*------------------------------------------------------*/

jQuery(function(){
	
 	//文字サイズ変更
    $("#header dd").click(function(){
 
        $("#header dd").removeClass("current");
        var fontCss = $(this).attr("class");
        $(this).addClass("current");
        if(fontCss == "fontL"){
          $("body").css("fontSize","1em");
        }else if(fontCss == "fontM"){
          $("body").css("fontSize","0.875em");
        }else{
          $("body").css("fontSize","0.75em");
        }
 
    });
    
	//メガメニューロールオーバー
	$(".gmenu01 a.megaMenu,.gmenu01 .dropdown").hover(function() {
		$('.gmenu01 .on').show();
	},
	function() {
	    $('.gmenu01 .on').hide();
	});
	$(".gmenu02 a.megaMenu,.gmenu02 .dropdown").hover(function() {
		$('.gmenu02 .on').show();
	},
	function() {
	    $('.gmenu02 .on').hide();
	});
	$(".gmenu03 a.megaMenu,.gmenu03 .dropdown").hover(function() {
		$('.gmenu03 .on').show();
	},
	function() {
	    $('.gmenu03 .on').hide();
	});
	$(".gmenu04 a.megaMenu,.gmenu04 .dropdown").hover(function() {
		$('.gmenu04 .on').show();
	},
	function() {
	    $('.gmenu04 .on').hide();
	});
	$(".gmenu05 a.megaMenu,.gmenu05 .dropdown").hover(function() {
		$('.gmenu05 .on').show();
	},
	function() {
	    $('.gmenu05 .on').hide();
	});
	
    //メガメニュー表示制御
	$(".gmenu01 .dropdown,.gmenu01 a.megaMenu").hover(function() {
		$('.gmenu01 .dropdown').show();
	},
	function() {
	    $('.gmenu01 .dropdown').hide();
	});
	$(".gmenu02 .dropdown,.gmenu02 a.megaMenu").hover(function() {
		$('.gmenu02 .dropdown').show();
	},
	function() {
	    $('.gmenu02 .dropdown').hide();
	});
	$(".gmenu03 .dropdown,.gmenu03 a.megaMenu").hover(function() {
		$('.gmenu03 .dropdown').show();
	},
	function() {
	    $('.gmenu03 .dropdown').hide();
	});
	$(".gmenu04 .dropdown,.gmenu04 a.megaMenu").hover(function() {
		$('.gmenu04 .dropdown').show();
	},
	function() {
	    $('.gmenu04 .dropdown').hide();
	});
	$(".gmenu05 .dropdown,.gmenu05 a.megaMenu").hover(function() {
		$('.gmenu05 .dropdown').show();
	},
	function() {
	    $('.gmenu05 .dropdown').hide();
	});
	
	$("#gmenu .close").click(function() {
		$('#gmenu .dropdown').hide();
		$('#gmenu .on').hide();
	});
		
	//タブ切り替え
	$("#tab li").click(function() {
        var num = $("#tab li").index(this);
        $(".content_wrap").addClass('disnon');
        $(".content_wrap").eq(num).removeClass('disnon');
        $("#tab li").removeClass('select');
        $(this).addClass('select')
    });
	
	//ニュースタブ切り替え
	$("#newsTab li").click(function() {
        var num = $("#newsTab li").index(this);
        $(".newsArea .content_wrap2").addClass('disnon');
        $(".newsArea .content_wrap2").eq(num).removeClass('disnon');
        $("#newsTab li").removeClass('select');
        $(this).addClass('select')
    });
	//ニュースタブソート
	$("#newsTab li.newsTab01").click(function() {
        $(".newsArea .news,.newsArea .site,.newsArea .important,.newsArea .more").show();
		$(".newsArea .more_news,.newsArea .more_site").hide();
    });
	$("#newsTab li.newsTab02").click(function() {
        $(".newsArea .site,.newsArea .important,.newsArea .more,.newsArea .more_site").hide();
        $(".newsArea .news,.newsArea .more_news").show();
    });
	$("#newsTab li.newsTab03").click(function() {
        $(".newsArea .news,.newsArea .important,.newsArea .more,.newsArea .more_news").hide();
        $(".newsArea .site,.newsArea .more_site").show();
    });
	
	//ページTOPボタン
	var topBtn = $('.pagetop2');
	topBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
    topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false;
    });
	
	//ニュースタブ表示切り替え
	$("#tab li.all").click(function() {
        $(".newsList .news,.newsList .site,.newsList .important").show();
		$(".list2013,.list2012").hide();
    });
	$("#tab li.news").click(function() {
        $(".newsList .site,.newsList .important").hide();
        $(".newsList .news").show();
		$(".list2013,.list2012").hide();
    });
	$("#tab li.site").click(function() {
        $(".newsList .news,.newsList .important").hide();
        $(".newsList .site").show();
		$(".list2013,.list2012").hide();
    });
	$("#tab li.important").click(function() {
        $(".newsList .site,.newsList .news").hide();
        $(".newsList .important").show();
		$(".list2013,.list2012").show();
    });
	$(".title2014").click(function() {
        $(".list2014").slideToggle();
    });
	$(".title2013").click(function() {
        $(".list2013").slideToggle();
    });
	$(".title2012").click(function() {
        $(".list2012").slideToggle();
    });
});

