<!--
<div id="toolbar">
    <span class="icon-mode disabled" id="mode"></span>
    <span title="Toggle Markdown Hints" class="icon-pre disabled" id="hinted"></span>
</div>
<link rel="stylesheet" href="/lib/pen/pen.css"/>
<style type="text/css">
    #toolbar{margin-bottom:1em;position:fixed;left:20px;margin-top:5px;}
    #toolbar [class^="icon-"]:before, #toolbar [class*=" icon-"]:before{font-family:'pen'}
    #mode{color:#1abf89;;cursor:pointer;}
    #mode.disabled{color:#666;}
    #mode:before{content: '\e813';}
    #hinted{color:#1abf89;cursor:pointer;}
    #hinted.disabled{color:#666;}
    #hinted:before{content: '\e816';}

    #fork{position:fixed;right:0;top:0;}
</style>
<script src="/lib/pen/pen.js"></script>
<script src="/lib/pen/markdown.js"></script>
<script type="text/javascript">

    // config
    var options = {
        editor: document.querySelector('[data-toggle="pen"]'),
        debug: false
    };

    // create editor
    var pen = new Pen(options);


    // toggle editor mode
    document.querySelector('#mode').addEventListener('click', function() {
        var text = this.textContent;

        if(this.classList.contains('disabled')) {
            this.classList.remove('disabled');
            pen.rebuild();
        } else {
            this.classList.add('disabled');
            pen.destroy();
        }
    });

    // toggle editor mode
    document.querySelector('#hinted').addEventListener('click', function() {
        var pen = document.querySelector('.pen')

        if(pen.classList.contains('hinted')) {
            pen.classList.remove('hinted');
            this.classList.add('disabled');
        } else {
            pen.classList.add('hinted');
            this.classList.remove('disabled');
        }
    });
</script>-->
