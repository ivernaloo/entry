<div id="time"></div>
<script type="text/javascript" src="/lib/momentjs/moment-with-langs.js"></script>
<script type="text/javascript">
    $("#time").html(moment().format("YYYY-MM-DD") + " <b>" + moment().format("WW") + "</b>周 <b>" + moment().format("DDDD") + "</b>天</br> 离3月2号 只有 <b>" + moment([2014, 2, 2]).diff(moment(), 'days') + "</b> 天");
</script>