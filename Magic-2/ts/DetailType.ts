module detailType {
    export class DetailType {
        private buttonName:string;
        private inputName:string;
        private typeName:string;

        constructor(buttonName:string,inputName:string,typeName:string,callback?:Function){
            this.buttonName = buttonName;
            this.inputName = inputName;
            this.typeName = typeName;
            this.addChooseTypeListener();
            this.addSearchListener(callback);
        };

        addSearchListener(callback?:Function){
            let serchButton = <HTMLElement>document.querySelector(this.buttonName);
            let inputView = <HTMLInputElement>document.querySelector(this.inputName);
            serchButton.onclick = function () {

                if (callback){
                    (callback as Function)(inputView.value);
                }
            };
        };
        addChooseTypeListener(){
            let eles = document.querySelectorAll(this.typeName);
            for (let i=0;i<eles.length;i++){
                let ele = <HTMLScriptElement>eles[i];
                ele.onclick = function (event:Event) {
                    event.preventDefault();
                    console.log(this.textContent);
                }
            }
        };
    }
}