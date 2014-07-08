var listEven = $("tr:even",".table-list");
var listOdd = $("tr:odd",".table-list");
listEven.css({"background-color": "#efefef"})
listEven.hover(
								 function(){
									 	$(this).css({"background-color": "#ffffdd"})
									 },
								 function(){
										listEven.css({"background-color": "#efefef"})
									 }
								 );
listOdd.hover(
								 function(){
									 	$(this).css({"background-color": "#ffffdd"})
									 },
								 function(){
										listOdd.css({"background-color": "#fff"})
									 }
								 );// JavaScript Document