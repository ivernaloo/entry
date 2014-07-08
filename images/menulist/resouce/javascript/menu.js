jQuery(function($){
var libCMS = function() {
		
}
libCMS.menu = {

	//	@初始化
	init: function(){
		for (var m in menulist) {
			
			menubar[_flag] = m;
			submenubar[_flag] = menulist[m];
			_flag++;
		}
	},
	
	//	@构建主菜单
	//	@params (Object) 操作对象
	//	@params	(Object) 传入的值  	
	builderMenu: function(target,value) {
		var _html = "";
		var _lis;
		var _num; //点击菜单序列号
		if(!target) return;
		if(!value) return;
		this.init();

		for(var i = 0; i < _flag; i++){
			var _html_ = "<a class='search-btn' href=''>" + value[i] + "</a>";
			_html += _html_;
			
		}
		target.html(_html);
		_lis = $("a",target);
		//给生成的每个一级菜单绑定事件
		_lis.each(function(){
						   
			$(this).bind("click",function(e){
				e.preventDefault();
				_num = _lis.index(this);
				_lis.each(function(){
								   this.className="search-btn";
								   })
				_lis[_num].className="search-btn-on"
				libCMS.menu.builderSubMenu(_targetsub,submenubar,_num);
			})
		});
		//初始二次菜单
		(function(){
					   _lis[0].className = "search-btn-on";
					   libCMS.menu.builderSubMenu(_targetsub,submenubar,0)
					   })()
		
	},
	
	//	@构建二级菜单
	//	@params (Object) 操作对象
	//	@params	(Object) 传入的值
	//	@params	(Number) 调用menubar[index]对应的子菜单  	
	builderSubMenu: function(target,value,index) {
		var _html = "";
		var _lis;
		var _name; //点击菜单序列
		if(!target) return;
		if(!value) return;

		$("#navtopbar").html(menubar[index]);
		for(s in value[index]){
			
			var _html_ = "<li><a href=''>" + s + "</a></li>"	
			_html += _html_;			
		}
		target.html(_html);
		_lis = $("a",target);
		
		//隐藏loading条
		function closeLoading() {
			if(	_framebar[0].contentWindow.document.readyState == "complete") {
				_loadingbar.hide();
				_framebar.css("visibility","visible")
				clearInterval(setIntervalId)
			}
		}
		
		function startPollingForCompletion() {
			setIntervalId = setInterval(closeLoading, 1000); 
		}
		
		libCMS.menu.builderNavbar(_targetnav,menubar[index],_name)
		
		//给生成的每个一级菜单绑定事件
		_lis.each(function(){
			
			$(this).bind("click",function(e){
				e.preventDefault();
				_name = this.innerHTML;
				
				_lis.each(function(){
								   this.className="";
								   })
				_lis[_lis.index(this)].className="on"
				_framebar.css("visibility","hidden");
				_loadingbar.show();
				_framebar.attr("src",value[index][_name]);
				startPollingForCompletion();
				libCMS.menu.builderNavbar(_targetnav,menubar[index],_name)
			})
		})
	},
	
	//	@构建导航栏
	//@params (object) 操作对象
	//@params (string) 主菜单当前栏目
	//@params (string) 二级菜单当前栏目
	builderNavbar: function(target,main,sub){
			target.html(main + " - " + sub );	
	}
}
var _target = $("#menubar"); //主菜单操作对象
var _targetsub = $("#submenubar"); //子菜单操作对象
var _framebar = $("#framebar");
var _targetnav = $("#navhead"); //显示当前栏目地址
var _loadingbar = $("#loadingbar");
var _flag = 0;
var menubar = [];
var submenubar = [];
var menubar_length = menubar.length; 
libCMS.menu.builderMenu(_target,menubar);
});