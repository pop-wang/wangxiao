"use strict";
/**
 * Created by CDLX on 2017/9/18.
 */
// window.xx=window.xx||{};
var ucai;
(function (ucai) {
    ucai.name = "优才";
    var school;
    (function (school) {
        var School = /** @class */ (function () {
            function School() {
            }
            ;
            School.prototype.jump = function () {
                console.log("跳！！！");
            };
            return School;
        }());
        school.School = School;
    })(school = ucai.school || (ucai.school = {}));
})(ucai || (ucai = {}));
