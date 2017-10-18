"use strict";
/**
 * Created by CDLX on 2017/9/18.
 */
var flower;
(function (flower) {
    var Rouse = /** @class */ (function () {
        function Rouse() {
        }
        Rouse.prototype.open = function () {
            console.log("开花");
        };
        ;
        return Rouse;
    }());
    flower.Rouse = Rouse;
})(flower || (flower = {}));
