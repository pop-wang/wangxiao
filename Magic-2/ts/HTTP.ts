

module http{
    export class HTTP {
        static get(url:string,parm?:any,callback?:Function){
            let temp = [];
            for (let key in parm){
                temp.push(key+"="+parm[key]);
            }

            let urlString = url+"?"+temp.join("&");

            let request = new XMLHttpRequest();
            console.log(encodeURIComponent(urlString));

            request.open("GET",urlString);
            request.onload = function () {
                    // request.response
                (callback as Function)(JSON.parse(request.response));
            };
            request.send();

        }
    }
}