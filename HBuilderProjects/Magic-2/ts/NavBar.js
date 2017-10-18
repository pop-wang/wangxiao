"use strict";
var navBar;
(function (navBar) {
    var NavBar = /** @class */ (function () {
        function NavBar(className, callback) {
            this.addAction(className, callback);
        }
        ;
        //callback? 可选类型 可以传  也可不传参数的
        NavBar.prototype.addAction = function (className, callback) {
            var eles = document.getElementsByClassName(className);
            var lastEle = eles[0];
            var _loop_1 = function (i) {
                var item = eles[i];
                item.onclick = function () {
                    var self = this;
                    //断言
                    return function (index) {
                        lastEle.className = "type-item";
                        self.className = "type-item active animated bounce";
                        lastEle = self;
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
