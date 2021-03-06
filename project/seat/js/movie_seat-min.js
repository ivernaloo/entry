$(function () {
    var b = $("#seatArea"),
        d = parseInt($("#maxNumSeats").val()),
        g = $("#loadingWrap");

    function l() {
        var n = $("#seatWrap");
        var m = $(window).height() - n.offset().top - $(".colorExplain").height() - 20;
        n.height(m)
    }
    l();
    $("#colBar").height(b.height());
    var e = -($("#seatArea").width() - $("body").width()) / 2;
    scroll = new IScroll("#seatWrap", {
        startX: ((e > 0) ? 0 : e),
        scrollY: true,
        scrollX: true,
        probeType: 2,
        eventPassthrough: "1",
        momentum: false,
        bounce: true,
        useTransition: true,
        scrollbars: false,
        zoom: true,
        zoomMax: 3
    });
    document.addEventListener("touchmove", function (m) {
        m.preventDefault()
    }, false);
    var a = $("#colBar");
    scroll.on("scroll", function (m) {
        a.css({
            top: this.y
        })
    });
    scroll.on("zoom", function (m) {
        a.css({
            height: this.scroller.offsetHeight * this.scale,
            top: this.y
        })
    });
    scroll.on("zoomEnd", function (m) {
        a.css({
            height: this.scroller.offsetHeight * this.scale,
            top: this.y
        })
    });
    var i = {
        seatList: [],
        size: function () {
            return this.seatList.length
        },
        put: function (m) {
            var n = this.seatList;
            if (n.length < d) {
                n.push(m);
                return n
            } else {
                return false
            }
        },
        remove: function (o) {
            var p = this.seatList,
                m = p.length;
            for (var n = 0; n < m; n++) {
                if (o === p[n]) {
                    p.splice(n, 1)
                }
            }
        },
        getValue: function () {
            return this.seatList.join(",")
        }
    };

    function f() {
        g.show();
        $.ajax({
            url: "/o2o/movies/validateSeats",
            type: "GET",
            dataType: "json",
            data: {
                id: $("#sId").val(),
                seats: i.getValue(),
                t: +new Date()
            },
            success: function (n, p) {
                if (n.code != 1) {
                    alert(n.msg)
                } else {
                    var o = "",
                        m = movieUrlConfig.buy + "?id=" + $("#sId").val() + "&seats=" + i.getValue();
                    movie.submitOrder(o, m, "")
                }
                g.hide()
            },
            error: function (m, o, n) {
                alert(o);
                g.hide()
            }
        })
    }
    function h(n) {
        var m = n.split(":");
        var o = $("<span id='" + m[0] + "_" + m[1] + "''>" + m[0] + "排" + m[1] + "座</span>");
        $(".selectedWrap").append(o)
    }
    function c(n) {
        var m = n.split(":");
        $("#" + m[0] + "_" + m[1]).remove()
    }
    function k(n) {
        var m = n.split(":");
        $("#mini_" + m[0] + "_" + m[1]).addClass("selected")
    }
    function j(n) {
        var m = n.split(":");
        $("#mini_" + m[0] + "_" + m[1]).removeClass("selected")
    }
    $("#seatWrap").on("click", "b", function (n) {
        var m = $(this);
        if (!m.attr("class")) {
            if (i.size() < d) {
                var o = m.attr("data-no");
                i.put(o);
                m.addClass("selected");
                h(o);
                k(o);
                $("#submitOrder").removeClass("disable")
            } else {
                alert("您最多可选" + d + "个座位")
            }
        } else {
            var o = m.attr("data-no");
            i.remove(o);
            m.removeClass("selected");
            c(o);
            j(o);
            if (i.size() <= 0) {
                $("#submitOrder").addClass("disable")
            }
        }
    });
    $("#submitOrder").bind("touchend", function (m) {
        if ($(this).hasClass("disable")) {
            return
        } else {
            f()
        }
    })
});