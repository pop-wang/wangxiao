
module navBar {

    export class NavBar {
        constructor (className:string,callback?:Function){
            this.addAction(className,callback);
        };

        //callback? 可选类型 可以传  也可不传参数的
        addAction(className:string,callback?:Function){
            let eles = document.getElementsByClassName(className);

            let lastEle = <HTMLElement>eles[0];
            for (let i =0;i<eles.length;i++){
                let item = <HTMLElement>eles[i];
                item.onclick = function () {
                    let self = <HTMLElement>this;
                    //断言
                    return function (index:number) {
                        lastEle.className = "type-item";

                        self.className = "type-item active animated bounce";

                        lastEle = self;
                        (callback as Function)(index);
                    }(i)
                };
            }
        }
    }
}
