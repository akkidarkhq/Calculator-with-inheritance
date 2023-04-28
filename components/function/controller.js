 var FunctionButton = function(id, options){
   console.log("FunctionButton")
   this.init =  function(id, options){
      console.log("in init method of fn butn")
       this.model = new FunctionButtonModel();
       this.view = new FunctionButtonView(id,this.model,options);
    }

    this.onBtnPress = function(event){
    }    
    Button.call(this,id,options);
}

FunctionButton.prototype = Object.create(Button.prototype);
FunctionButton.prototype.constructor = FunctionButton;

