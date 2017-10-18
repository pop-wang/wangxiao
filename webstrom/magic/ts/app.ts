/**
 * Created by CDLX on 2017/9/18.
 */


function init():void{
    new navBar.NavBar("type-item",function (index:number) {

    });
    new detailType.DetailType(".search-button",".search-input",".type-detail-item",function (searchText:string) {
        http.HTTP.get(URL_API,{"showapi_appid":"40091","showapi_sign":"2b66a43022b444ad81e18ad18996cefc",qq:searchText},function (result:any) {
            console.log(result.showapi_res_body);
            let domString="";
            for(let key in result.showapi_res_body){
                domString+="<p>"+result.showapi_res_body[key]+"</p>";
            }
            (document.querySelector(".result-container")as HTMLElement).innerHTML=domString;
        });
    });
}
init();