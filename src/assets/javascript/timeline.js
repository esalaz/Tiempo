(function($){
$('li').click(function(){
$(this).toggleClass('active').siblings().removeClass('active');
});
})(jQuery);

export timeline.js
