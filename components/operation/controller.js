function OperationButton (id, options){
    this.init =  function(id, options){ 
       this.model = new OperationButtonModel();
       this.view = new OperationButtonView(id,this.model,options);
    }

    this.onBtnPress = function(event){
       
    }    
    Button.call(this,id,options);
}

OperationButton.prototype = Object.create(Button.prototype);
OperationButton.prototype.constructor = OperationButton;
