$(function() {
	function notRealSite(element) {
        $(element).click(function() {
            $('.notReal').show(100);
            return false;
        });
    }
    $('.notReal_close').click(function() {
        $('.notReal').hide(100);
    });
    notRealSite('.phone');
    notRealSite('.navigation_link');
    notRealSite('.head_logIn');
    notRealSite('.head_trial');
    notRealSite('.first_try');
    notRealSite('.first_demo');
    notRealSite('.part2_learnMore');
    notRealSite('.part3_try');
    notRealSite('.part3_demo');
    notRealSite('.footer_top a');
    notRealSite('.footer_bottom a');
    notRealSite('.navigation_checklist a');
});

/*$(function() {
	function accordionOpen(item, list, image) {
		$(item).mouseover(function() {
			$(list).slideDown();
			$(image).attr('src', './images/arrow_active.png');
		});
		$(item).mouseout(function() {
			$(list).slideUp();
			$(image).attr('src', './images/arrow.png');
		});
	}
	accordionOpen('.nav_acc_prod', '.nav_acc_prod > .navigation_checklist_around', '.nav_acc_prod > img');
	accordionOpen('.nav_acc_res', '.nav_acc_res > .navigation_checklist_around', '.nav_acc_res > img');
});*/
$(function() {
	function accordionOpen(link, item, around, list, image) {
		$(item).mouseover(function() {
			$(link).css('color', '#FFA600');
			$(list).css('display', 'flex');
			$(image).attr('src', './images/arrow_active.png');
		});
		$(around).mouseout(function() {
			$(link).css('color', '#fff');
			$(list).hide();
			$(image).attr('src', './images/arrow.png');
		});
	}
	accordionOpen('.nav_acc_prod > .navigation_accordion', '.nav_acc_prod', '.nav_acc_prod > .navigation_checklist_around', '.nav_acc_prod > .navigation_checklist_around > .navigation_checklist', '.nav_acc_prod > img');
	accordionOpen('.nav_acc_res > .navigation_accordion', '.nav_acc_res', '.nav_acc_res > .navigation_checklist_around', '.nav_acc_res > .navigation_checklist_around > .navigation_checklist', '.nav_acc_res > img');
});