"use strict";
/**
 * Created by CDLX on 2017/9/18.
 */
var navBar;
(function (navBar) {
    var NavBar = /** @class */ (function () {
        function NavBar(className, callback) {
            this.addItemAction(className, callback);
        }
        NavBar.prototype.addItemAction = function (className, callback) {
            var eles = document.getElementsByClassName(className);
            var lastEle = eles[0];
            var _loop_1 = function (i) {
                var item = eles[i];
                item.onclick = function () {
                    var self = this;
                    //断言，总是弹出最后一个，所以使用闭包
                    return function (index) {
                        lastEle.className = "type-item";
                        self.className = "type-item active animated shake";
                        lastEle = self; //更新当前的值
                        callback(index);
                    }(i);
                };
            };
            for (var i = 0; i < eles.length; i++) {
                _loop_1(i);
            }
        };
        return NavBar;
    }());
    navBar.NavBar = NavBar;
})(navBar || (navBar = {}));
