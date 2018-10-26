// 헤더 상담신청 show/hide
window.addEventListener('scroll',function (scrollY) {
	if ($('#header').hasClass('header-sticky')) {
		$('#header .toggle-item').removeClass('hide');
	}else {
		$('#header .toggle-item').addClass('hide');
	}
});

$('.go-request').click(function () {
	var CC_AUTHOR = $('.CC_AUTHOR');
	var CC_MB_TELNUM = $('.CC_MB_TELNUM');
	var CC_PN_DATE = $('.CC_PN_DATE');
	var CC_PRIVATE_INFO_AGREE = $('.CC_PRIVATE_INFO_AGREE');
	
	if (CC_AUTHOR.val() == "" || CC_MB_TELNUM.val() == "" || CC_PN_DATE.val() == "") {
		alert('빈 내용을 적어주세요.');
		return false;
	}
	if (!CC_PRIVATE_INFO_AGREE.is(":checked")) {
		alert('개인정보취급방침에 동의하셔야 상담을 신청할 수 있습니다.');
		return false;
	}
	
	alert('상담이 완료되었습니다.');

})



// popup 
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = 'expires=' + d.toUTCString();
	document.cookie = cname + '=' + escape(cvalue) + '; ' + expires + '; path=/;';
}

function getCookie(cname) {
	var name = cname + '=';
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1);
		if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
	}
	return '';
}

var pop = getCookie('pop');

if (getCookie != 'done') {
	// console.log('팝업 보이고');
} else {
	// console.log('팝업 하루동안 안보이고');
}



