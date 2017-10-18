/**
 * Created by CDLX on 2017/9/19.
 */
module detailType{
    export class DetailType{
        private  buttonName:string;
        private inputName:string;
        private  typeName:string;
        constructor(buttonName:string,inputName:string,typeName:string,callback?:Function){
            this.buttonName=buttonName;
            this.inputName=inputName;
            this.typeName=typeName;
            this.addChooseTypehListener();
            this.addSearchListener(callback);
        };
        addSearchListener(callback?:Function){
            let searchButton=<HTMLScriptElement>document.querySelector(this.buttonName);
            let inputView=<HTMLInputElement>document.querySelector(this.inputName);
            searchButton.onclick=function () {
                console.log(inputView.value);
                if(callback as Function){
                    (callback as Function)(inputView.value);
                }
            }
        };
        addChooseTypehListener(){
            let eles=document.querySelectorAll(this.typeName);
            for (let i=0;i<eles.length;i++){
                let ele=<HTMLScriptElement>eles[i];
                ele.onclick=function (event:Event) {
                    event.preventDefault();
                    event.preventDefault();
                    console.log(ele.textContent);

                }
            }
        };
    }
}