"use strict";
/**
 * Created by CDLX on 2017/9/19.
 */
var detailType;
(function (detailType) {
    var DetailType = /** @class */ (function () {
        function DetailType(buttonName, inputName, typeName, callback) {
            this.buttonName = buttonName;
            this.inputName = inputName;
            this.typeName = typeName;
            this.addChooseTypehListener();
            this.addSearchListener(callback);
        }
        ;
        DetailType.prototype.addSearchListener = function (callback) {
            var searchButton = document.querySelector(this.buttonName);
            var inputView = document.querySelector(this.inputName);
            searchButton.onclick = function () {
                console.log(inputView.value);
                if (callback) {
                    callback(inputView.value);
                }
            };
        };
        ;
        DetailType.prototype.addChooseTypehListener = function () {
            var eles = document.querySelectorAll(this.typeName);
            var _loop_1 = function (i) {
                var ele = eles[i];
                ele.onclick = function (event) {
                    event.preventDefault();
                    event.preventDefault();
                    console.log(ele.textContent);
                };
            };
            for (var i = 0; i < eles.length; i++) {
                _loop_1(i);
            }
        };
        ;
        return DetailType;
    }());
    detailType.DetailType = DetailType;
})(detailType || (detailType = {}));
