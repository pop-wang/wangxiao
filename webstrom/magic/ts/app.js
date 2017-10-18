"use strict";
/**
 * Created by CDLX on 2017/9/18.
 */
function init() {
    new navBar.NavBar("type-item", function (index) {
    });
    new detailType.DetailType(".search-button", ".search-input", ".type-detail-item", function (searchText) {
        http.HTTP.get(URL_API, { "showapi_appid": "40091", "showapi_sign": "2b66a43022b444ad81e18ad18996cefc", qq: searchText }, function (result) {
            console.log(result.showapi_res_body);
            var domString = "";
            for (var key in result.showapi_res_body) {
                domString += "<p>" + result.showapi_res_body[key] + "</p>";
            }
            document.querySelector(".result-container").innerHTML = domString;
        });
    });
}
init();
