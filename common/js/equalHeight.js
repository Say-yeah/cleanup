// JavaScript Document


/* -------------------------------------------------------------

	▼▽▼▽▼▽　=== 注意事項 ===　▼▽▼▽▼▽
	
	ブラウザの描画モードが相互モード（=DOCTYPW宣言がない）場合、
	IEにてこのスクリプトは機能しません。
	/common/js/heightLine.js で代用してください。

---------------------------------------------------------------- */

// 使用箇所：
// 2011.07.07 /wrestling/index.shtml
// 2012.8.29 /catalogue/user2.html.shtml（=カタログ申し込みの最初の選択画面）
// 2012.8.29 /c_catalogue/webcatalog.shtml


function equalHeight(group) {
	var tallest = 0;
	group.each(function() {
		var thisHeight = $(this).height();
		if(thisHeight > tallest) {
			tallest = thisHeight;
		}
	});
	group.height(tallest);
}
