function count(data){
    //data = JSON.parse(data);
    var num = data.clickCount,len = num.length;
    if(len<5){
        $(".weibo>div").html("与" + num + "人 一起吐槽");
    }else if(len == 5){
        num = (parseInt(num)/10000).toFixed(2);
        $(".weibo>div").html("与" + num + "万人 一起吐槽");
    }else if(len == 6){
        num = (parseInt(num)/10000).toFixed(1);
        $(".weibo>div").html("与" + num + "万人 一起吐槽");
    }else if(len == 7){
        num = (parseInt(num)/10000).toFixed(0);
        $(".weibo>div").html("与" + num + "万人 一起吐槽");
    }
}
$(function() {
	// data = {"clickCount":"1111"}
    /*
	$.ajax({
		url: "http://www.miui.com/extra.php?mod=systemActivite/do&stat=1",
		type:"post",
		dataType: "json",

	})
	*/
	//中间内容滑动
	$(".func").click(function() {
		var currentIndex = $(".func").index($(".current_func"));
		var endIndex = $(".func").index($(this));
		$(".current_func").removeClass('current_func');
		$(this).addClass("current_func");
		var time = Math.abs(currentIndex - endIndex) * 200;
		$(".lists_contain").animate({
			"left" : -(endIndex * 840) + "px"
		}, time);
	});

	$(".lists_left").click(function() {
		var currentIndex = $(".func").index($(".current_func"));
		if (currentIndex != 0) {
			var endIndex = currentIndex - 1;
			$(".current_func").removeClass('current_func');
			$(".func").eq(currentIndex - 1).addClass("current_func");
			$(".lists_contain").animate({
				"left" : -(endIndex * 840) + "px"
			}, 200);
		}
	});
	$(".lists_right").click(function() {
		var currentIndex = $(".func").index($(".current_func"));
		if (currentIndex != 4) {
			var endIndex = currentIndex + 1;
			$(".current_func").removeClass('current_func');
			$(".func").eq(currentIndex + 1).addClass("current_func");
			$(".lists_contain").animate({
				"left" : -(endIndex * 840) + "px"
			}, 200);
		}
	});

	//顶部视频播放
	var video_src_0 = "<img class='video_close' src='http://www.miui.com/static/miui/homepage/images/video_close.png' /><embed width='960' height='585' wmode='opaque' type='application/x-shockwave-flash' src='http://player.youku.com/player.php/sid/XNjkzMTUwNDE2/v.swf' allowscriptaccess='sameDomain' allowfullscreen='true'>";

	$(".video").click(function() {
		$(".video_contain").html(video_src_0);
		$(".video_contain").show();
	});

	$(".video_contain").delegate(".video_close", "click", function() {
		$(".video_contain").html("").hide();
        weibodialog();
	})
	
	//微博文案
	var weiboWords = [
	"听说@MIUI_ROM 推出了#小米系统公测#版，只要安装小米系统，MIUI主题、电话短信、小米云服务等马上有！终于有机会改造我的板砖机了！活动地址：",
	"没有好系统的手机都是板砖！@MIUI_ROM 现在搞了个#小米系统公测#版，安卓4.0以上的手机，装了就有MIUI的界面和小米云服务，超好用！活动地址：",
	"话说手机系统太烂，真的和用板砖没区别。@MIUI_ROM 做的#小米系统公测#终于出了，一秒就有MIUI主题、拨号、小米云服务等功能，爽！活动地址：",
	"吐槽板砖机，每天还能赢10个小米移动电源？我的板砖机已经不值得吐槽了…@MIUI_ROM 的#小米系统公测#版出了，装了就有MIUI的主题和功能服务，这个可以有：",
	"最好用的MIUI，现在不刷机也能有！@MIUI_ROM 新出的#小米系统公测#版简直给力，装了之后手机立刻变身MIUI，主题、通讯录、云服务马上有！活动地址："
	];
	var zhuti_4 = ["哈哈哈《告别板砖》这个视频好好笑！看了好想下@MIUI_ROM 的#小米系统公测#版，赶紧用MIUI主题改造一下我的手机！活动地址：","系统太烂，手机用着跟板砖一样，现在我的手机终于能装MIUI了，不用刷机哦！@MIUI_ROM 的#小米系统公测#版，安装之后MIUI主题界面统统有！活动地址：","一直很心仪MIUI的一款主题，结果手机不能刷MIUI. 现在不刷机也能有MIUI啦！@MIUI_ROM 的#小米系统公测#版，直接安装就有MIUI的界面和服务功能，赞！活动地址："] ;
	var info_3 = "以前换个手机，导通讯录和短信是最痛苦的。现在有@MIUI_ROM 的#小米系统公测#版，安装就能同步通讯录短信甚至照片。活动地址：";
	var tel_1 = "打个电话翻通讯录翻半天，我需要最好用的MIUI！现在@小米手机 有了#小米系统公测#版，不刷机也有MIUI，吐槽板砖机还能赢10个小米移动电源，走起：";
	
	//分享到新浪微博
	function shareweibo(word) {
		var title = word;
		var rLink = 'http://xitong.xiaomi.com/intro';
		var site = '';
		var pic = 'http://www.miui.com/extra/systemActivite/images/weibo.jpg?da';
		window.open('http://service.weibo.com/share/share.php?title=' + encodeURIComponent(title) + '&url=' + encodeURIComponent(rLink) + '&appkey=' + encodeURIComponent(site) + '&pic=' + encodeURIComponent(pic), '_blank', 'scrollbars=no,width=600,height=450,left=75,top=20,status=no,resizable=yes');
	}

	//微博弹出框
	function weibodialog() {
		var aaa = $.dialog({
			"width" : "960px",
			"height" : "640px"
		});
		aaa.addHtml("<div style='background-color: white; border: 1px solid #d5d5d5; width: 958px;height:638px;position: relative;border-radius: 8px;'><div id='dd' style='width: 15px;height: 15px;position: absolute; right: 15px; top: 15px;background: url(http://i1.ml.mi-img.com/img/miui/miuilite/img/intro2/index_12.png) -43px -40px;cursor: pointer;'></div><div style='height: 93px; border-bottom: 1px solid #d5d5d5;'><h2 style='font-size: 36px; color: #595959; font-weight: bold;text-align: center; line-height: 92px;'>用手机，哪里最不爽？</h2></div><div id='chooses' style='background: url(http://i1.ml.mi-img.com/img/miui/miuilite/img/intro2/index_11.png) no-repeat center 30px; height: 420px; position: relative;'><p class='p_0'>骚扰电话一大堆</p><p class='p_1'>打个电话，找人找半天…</p><p class='p_2'>发个短信还要钱？</p><p class='p_3'>手机一丢，资料全完蛋</p><p class='p_4'>主题丑爆了！</p></div><div><div id='share_btn' style='width: 164px;height: 42px;background: url(http://i1.ml.mi-img.com/img/miui/miuilite/img/intro2/index_12.png) no-repeat 0px -104px; margin: 0 auto; cursor: pointer;'></div><p style='padding-top: 20px;font-size: 12px;color: #595959;line-height: 24px;text-align: center;'>以#小米系统公测#为话题并@MIUI_ROM，分享你的吐槽到新浪微博，每天都有机会赢取10台10400mAh小米移动电源！<br /><a target='_blank' href='http://bbs.xiaomi.cn/thread-9521987-1-1.html' style='color: #f27132;text-decoration: underline;'>活动规则</a></p></div></div>");
		$("#dd").click(function() {
			aaa.closeDialog();
		});
		$("#chooses p").click(function(){
			$("#chooses p").removeClass('p_click');
			$(this).addClass('p_click');
		});
		$("#share_btn").click(function(){
			if($(".p_click") && $(".p_click").length == 1){
				$("#counter").attr("src","http://www.miui.com/extra.php?mod=systemActivite/do&clickStatus=true");
//                $.ajax({
//					type:"post",
//					url:"http://www.miui.com/extra.php?mod=systemActivite/do",
//					data:{clickStatus:"true"},
//					success: function(){
//
//					}
//				});
				var index = $("#chooses p").index($(".p_click"));
				if( index == 0 || index == 2 ){
					var num = Math.floor(Math.random() * 5);
					shareweibo(weiboWords[num]);
				}else if(index == 1){
					weiboWords.push(tel_1);
					var num = Math.floor(Math.random() * 6);
					shareweibo(weiboWords[num]);
					weiboWords.pop();
				}else if(index == 3){
					weiboWords.push(info_3);
					var num = Math.floor(Math.random() * 6);
					shareweibo(weiboWords[num]);
					weiboWords.pop();
				}else if(index == 4){
					weiboWords.concat(zhuti_4);
					var num = Math.floor(Math.random() * 8);
					shareweibo(weiboWords[num]);
					weiboWords.length = 5;
				}
				$("#dd").click();
				
			}else{
				alert("您还没有做出选择!");
			}			
		})
	}
	
	$(".weibo>div").click(function() {
		weibodialog();
	});
	
	$(".func").hover(
		function(){
			var index = $(".func").index($(this));
			$(this).attr("style","background:none;")
			$(this).parent().addClass('li_hover_' + index);
		},
		function(){
			var index = $(".func").index($(this));
			$(this).attr("style","")
			$(this).parent().removeClass('li_hover_' + index);
		}
	)

})
