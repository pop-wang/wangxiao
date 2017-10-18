"use strict";
var detailType;
(function (detailType) {
    var DetailType = /** @class */ (function () {
        function DetailType(buttonName, inputName, typeName, callback) {
            this.buttonName = buttonName;
            this.inputName = inputName;
            this.typeName = typeName;
            this.addChooseTypeListener();
            this.addSearchListener(callback);
        }
        ;
        DetailType.prototype.addSearchListener = function (callback) {
            var serchButton = document.querySelector(this.buttonName);
            var inputView = document.querySelector(this.inputName);
            serchButton.onclick = function () {
                if (callback) {
                    callback(inputView.value);
                }
            };
        };
        ;
        DetailType.prototype.addChooseTypeListener = function () {
            var eles = document.querySelectorAll(this.typeName);
            for (var i = 0; i < eles.length; i++) {
                var ele = eles[i];
                ele.onclick = function (event) {
                    event.preventDefault();
                    console.log(this.textContent);
                };
            }
        };
        ;
        return DetailType;
    }());
    detailType.DetailType = DetailType;
})(detailType || (detailType = {}));
