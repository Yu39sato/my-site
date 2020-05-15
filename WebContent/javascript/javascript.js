/*トップ用*/
$(function() {



	$('#articles-scroll').hide();

	$(window).scroll(function() {
		if ($(this).scrollTop() > 800) {
			$('#articles-scroll').slideDown();

			$('#articles-scroll').addClass('is-fixed');
		} else {
			$('#articles-scroll').hide('is-fixed');
		}
	});
});
$('#articles-scroll').hide();


/*slide*/
$(document).ready(function(){
    $('.slider').bxSlider({
        auto: true,
        pause: 5000,
    });
});
