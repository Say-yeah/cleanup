// JavaScript Document


/* -------------------------------------------------------------

	�������������@=== ���ӎ��� ===�@������������
	
	�u���E�U�̕`�惂�[�h�����݃��[�h�i=DOCTYPW�錾���Ȃ��j�ꍇ�A
	IE�ɂĂ��̃X�N���v�g�͋@�\���܂���B
	/common/js/heightLine.js �ő�p���Ă��������B

---------------------------------------------------------------- */

// �g�p�ӏ��F
// 2011.07.07 /wrestling/index.shtml
// 2012.8.29 /catalogue/user2.html.shtml�i=�J�^���O�\�����݂̍ŏ��̑I����ʁj
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
