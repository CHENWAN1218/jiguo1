$(function() {
	//banner描述文本右侧滑出
	var $p = $(".b_d_content").parent();
	$("body").css({
		"overflow-x": "hidden"
	})
	$(".b_d_content").css({
		"position": "absolute",
		"top": "-250px",
		"right": "-350px"
	}).animate({
		"top": $p.offset().top + "px",
		"right": $p.offset().left + "px"
	}, 800, function() {
		$(this).css({
			"position": "static",
			"top": "0",
			"right": "0"
		})
	});

	//slide轮播图片
	var first = true;
	$(".page a:first").click(function() {

		if(first) {
			$(".ul_con").find("ul:last").prependTo($(".ul_con"));
			$(".ul_con").css("margin-left", "-1000px");
		}
		$(".ul_con").animate({
			"margin-left": "0px"

		}, 2000, function() {
			first = false;
			$(".ul_con").find("ul:last").prependTo($(".ul_con"));
			$(".ul_con").css("margin-left", "-1000px");
			/*$(".ul_con").find("ul:first").appendTo($(".ul_con"));
			$(".ul_con").css({
				"margin-left":"-1000px"
			})*/
		});
	});

	$(".page a:last").click(function() {
		next();
	});

	//自动滚动
	var timer = setInterval(function() {
		next();
	}, 3000);

	//左右翻动获得焦点时，停止或重新开始定时
	$(".page a:first,.page a:last").hover(function() {
		clearInterval(timer);
	}, function() {
		timer = setInterval(function() {
			next();
		}, 3000);
	});
	//显示隐藏backtop
	$(window).scroll(function() {
		var winHeight = $(window).height(); //获得浏览器的可是高度
		var scrollTop = $(window).scrollTop(); //获得滚动条的位置
		if(winHeight > scrollTop) {
			$(".back_top").hide();
		} else {
			$(".back_top").show();
		}
	});
	//回到顶部
	$(".back_top").click(function() {
		$("html,body").animate({
			"scrollTop": "0px"
		}, 500);
	});

});
//下翻
function next() {
	$("。ul_con").stop(true);
	$(".ul_con").animate({
		"margin-left": "-1000px"

	}, 2000, function() {
		$(".ul_con").find("ul:first").appendTo($(".ul_con"));
		$(".ul_con").css({
			"margin-left": "0px"
		})
	});
}