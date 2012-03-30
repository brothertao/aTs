(function($){
	$.scrolltotop = function(options){
		options = jQuery.extend({
			scroll_duration : 500,			//平滑滚动时间
            scroll_interval: 100,
            step : 500,
			controlHTML : '',		//html代码
            className: 'scrollControl',
            zindex: 99999,
            hover_color:'#00C000',
			downx : 325,					//回到顶部 right 偏移位置
			downy : 125,					//回到顶部 bottom 偏移位置
			upx : 325,
			upy : 125,
		}, options);
		
		var $body, $up, $down;
		
		var init = function(){
			$body =  $('html,body');

			$('<div class="'+options.className+'" id="upcontrol">' + options.controlHTML + '</div>').css({
				position : 'fixed',
				top : options.upy,
				right : options.upx,
				opacity : 100,
                'z-index' : options.zindex,
			}).mouseenter(function() {
				scroll(-options.step);
				return false;
			}).on('click', function() {
                scroll(0);
                return false;
			}).appendTo('body');

			$('<div class="'+options.className+'" id="downcontrol">' + options.controlHTML + '</div>').css({
				position : 'fixed',
				bottom : options.downy,
				right : options.downx,
				opacity : 100,
                'z-index' : options.zindex,
			}).mouseenter(function() {
				scroll(options.step);
				return false;
			}).on('click', function() {
                scroll($body.width());
                return false;
			}).appendTo('body');

		};
		
		var scroll = function(step) {
            var dest = step ? $(document).scrollTop() + step : 0;
			$body.animate( {
				scrollTop : dest
			}, options.scroll_duration);
		};

		return init();
	};
})(jQuery);

  $.scrolltotop({
   	className: 'scrollControl',
    step: 200,
 });
