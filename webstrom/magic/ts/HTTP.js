"use strict";
/**
 * Created by CDLX on 2017/9/19.
 */
var http;
(function (http) {
    var HTTP = /** @class */ (function () {
        function HTTP() {
        }
        HTTP.get = function (url, parm, callback) {
            var temp = [];
            for (var key in parm) {
                temp.push(key + "=" + parm[key]);
            }
            var urlString = url + "?" + temp.join("&");
            var request = new XMLHttpRequest();
            request.open("GET", urlString);
            request.onload = function () {
                callback(JSON.parse(request.response));
            };
            request.send();
        };
        return HTTP;
    }());
    http.HTTP = HTTP;
})(http || (http = {}));
