/*
	author: aloo
	date: 2012.2.20
	function: interactive on personal minisite entry page
*/
// todo:需要模板化及引入seajs。
// todo:需要有方便的存储方案，是否采用sae的key/value存储api
// todo:本地存储,把相关的东西都存储到本地。
// todo:为空，顶部按钮显示红色。
// todo:自定义布局。
$(function(){
	
   // pinterest style liquid page

  $('#container').masonry({
    // options
    itemSelector : '.widget-1',
    columnWidth : 192
  });
  
	// header slide
  	$(".widget-1 > h2").click(function(){
  		$(this).siblings("ul").slideToggle('slow',function(){
              $('#container').masonry({
                  // options
                  itemSelector : '.widget-1',
                  columnWidth : 192
              });
              $('#container').masonry( 'reload' )
          });
      })

    function weekNo() {

        var totalDays = 0;

        now = new Date();

        years=now.getYear()

        if (years < 1000)

            years+=1900

        var days = new Array(12); // Array to hold the total days in a month

        days[0] = 31;

        days[2] = 31;

        days[3] = 30;

        days[4] = 31;

        days[5] = 30;

        days[6] = 31;

        days[7] = 31;

        days[8] = 30;

        days[9] = 31;

        days[10] = 30;

        days[11] = 31;

        //  Check to see if this is a leap year

        if (Math.round(now.getYear()/4) == now.getYear()/4) {
            days[1] = 29
        }else{
            days[1] = 28
        }

//  If this is January no need for any fancy calculation otherwise figure out the
//  total number of days to date and then determine what week

        if (now.getMonth() == 0) {
            totalDays = totalDays + now.getDate();
        }else{
            var curMonth = now.getMonth();
            for (var count = 1; count <= curMonth; count++) {
                totalDays = totalDays + days[count - 1];
            }
            totalDays = totalDays + now.getDate();
        }
        var week = Math.round(totalDays/7);
        return week+2;
    }

    // For the US Government fiscal year
    // Oct-Dec = 1
    // Jan-Mar = 2
    // Apr-Jun = 3
    // Jul-Sep = 4
    function getQuarter(d) {
        d = d || new Date();
        var m = Math.floor(d.getMonth()/3) + 2;
        return m > 4? m - 5 : m;
    }

    // count day left in the quarter
    function daysLeftInQuarter(d) {
        d = d || new Date();
        var qEnd = new Date(d);
        qEnd.setMonth(qEnd.getMonth() + 3 - qEnd.getMonth() % 3, 0);
        return Math.floor((qEnd - d) / 8.64e7);
    }

    // count days in quarter
    function daysInQuarter(d) {
        d = d || new Date();
        var qBegin = new Date(d);
        qBegin.setMonth(qBegin.getMonth() + 3 - qBegin.getMonth() % 3, 0);
        return Math.floor((qBegin - d) / 8.64e7);
    }
    
//     todo:季度的第多少个月，多少天？
//     todo:本年度的第多少天。
    var _chunjie = moment([2013,1,10]),
        _now = moment();
        _leave = _chunjie.diff(_now, 'days') // 1
    $("#aloo_date").html("现在是第 <b>"+weekNo()+"</b> 个星期("+years+")" +"<br/>"+ "离春节还有 <b>"+ _leave +"</b>天");
});