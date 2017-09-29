(function (win) {
    var doc = win.document, html = doc.documentElement;
    var baseWidth = 750;
    var grids = baseWidth / 100;
    var clientWidth = html.clientWidth || 320;
    html.style.fontSize = clientWidth / grids + "px";
    //var testDom = document.createElement("div");
    var testDomWidth = 0;
    var adjustRatio = 0;
    //setTimeout(calcTestDom, 20);
    var reCalc = function () {
        var newCW = html.clientWidth;
        if (newCW === clientWidth) {
            return
        }
        clientWidth = newCW;
        html.style.fontSize = newCW * (adjustRatio ? adjustRatio : 1) / grids + "px"
    };
    if (!doc.addEventListener) {
        return
    }
    var resizeEvt = "orientationchange" in win ? "orientationchange" : "resize";
    win.addEventListener(resizeEvt, reCalc, false);
    doc.addEventListener("DOMContentLoaded", reCalc, false)

})(window);


$.toast = (function() {
    var temp = {
        message: '提示',
        state: 'default',
        time: 1000
    };
    return function() {
        var cur,modal,param;
        if(arguments.length > 1) {
            param = {
                message: arguments[0],
                state: arguments[1]
            }
        } else {
            param = arguments[0];
            if(typeof  param == 'string') {
                param = {message: param};
            }
        }

        cur = $.extend({},temp,param);
        modal = $('<div class="toast ' + cur.state + '">' + cur.message + '</div>').appendTo(document.body);
        modal.css({
            marginTop: - Math.round(modal.outerHeight() / 2) + 'px',
            marginLeft: - Math.round(modal.outerWidth()/2) + 'px',//1.185 是初始化时候的放大效果
            display: 'block'
        }).addClass('in');
        setTimeout(function() {
            modal.remove();
        },cur.time)
    };
})();