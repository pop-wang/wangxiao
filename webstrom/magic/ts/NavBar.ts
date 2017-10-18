/**
 * Created by CDLX on 2017/9/18.
 */
module navBar{
   export class NavBar {
       constructor(className: string, callback?: Function) {//加问号表示可选参数
           this.addItemAction(className, callback);
       }

       addItemAction(className: string, callback?: Function) {
           let eles = document.getElementsByClassName(className);
           let lastEle=<HTMLScriptElement>eles[0];
           for (let i = 0; i < eles.length; i++) {
               let item = <HTMLScriptElement>eles[i];
               item.onclick = function () {
                   let self=<HTMLScriptElement>this;
                   //断言，总是弹出最后一个，所以使用闭包
                   return function (index:number) {
                       lastEle.className="type-item";
                       self.className="type-item active animated shake";
                       lastEle=self;//更新当前的值
                       (callback as Function)(index);
                   }(i);
               };
           }
       }

   }
}