var _mb = $("#menubar"),_mblinks = $("a",_mb),_t = $("#framebar");
var _links = ["assort.html","module.html","channel.html"]
_mblinks.each(function() {
   $(this).bind("click",function(e){
									e.preventDefault();
									var _n = _mblinks.index(this);
									_t.attr("src",_links[_n]);
								 })
					   })// JavaScript Document