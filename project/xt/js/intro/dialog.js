
$(function() {
	$.extend({
		"dialog" : function(wH) {
			 function newDialog(wH) {
				this.wh = wH;
				this.createBackground();
				this.createDialog();
				this.position();
				var _this = this;
				$(window).resize(function(){
					_this.position();
				});
			}
			
			var theDialog;
			newDialog.prototype = {
				constructor : newDialog,
				createBackground : function() {
					if (!$(".blackbg").length) {
						var div = $("<div class='blackbg'></div>");
						div.prependTo($("body").eq(0));

						$(".blackbg").css({
							"position" : "fixed",
							"width" : "100%",
							"height" : "100%",
							"backgroundColor" : "black",
							"zIndex" : "10",
							"left" : "0px",
							"top" : "0px"
						});
						if ($.browser.msie) {
							$(".blackbg").css("filter", "alpha(opacity=60)");
						} else {
							$(".blackbg").css("opacity", "0.6");
						}
					}
				},
				createDialog : function() {
					var widthHeight = this.wh;
					var div = $("<div class='dialog'></div>");
					div.prependTo($("body")[0]);
					$(".dialog").css({
						"position" : "fixed",
						"width" : widthHeight ? widthHeight.width : "400px",
						"height" : widthHeight ? widthHeight.height : "300px",
						"zIndex" : "11"
					});
				},
				position : function() {
					var widthHeight = this.wh;
					var height = $(".blackbg").height();
					var width = $(".blackbg").width();
					var dWidth = widthHeight ? widthHeight.width.replace("px", "") : "400";
					var dHeight = widthHeight ? widthHeight.height.replace("px", "") : "300";
					$(".dialog").css({
						"top" : (height - dHeight) / 2 + "px",
						"left" : (width - dWidth) / 2 + "px"
					});
				},
				addHtml : function(divHtml){
					$(".dialog").html(divHtml);
					return this;
				},
				closeDialog : function(){
					$(".dialog").remove();
					$(".blackbg").remove();
					theDialog = null;
				}
				
			};
			theDialog = new newDialog(wH);
			return theDialog;
		}
	});

})

