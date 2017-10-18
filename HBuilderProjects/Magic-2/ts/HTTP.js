"use strict";
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
            console.log(encodeURIComponent(urlString));
            request.open("GET", urlString);
            request.onload = function () {
                // request.response
                callback(JSON.parse(request.response));
            };
            request.send();
        };
        return HTTP;
    }());
    http.HTTP = HTTP;
})(http || (http = {}));
