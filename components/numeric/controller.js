var NumberButton = function(id, options){
    this.init =  function(id, options){
       this.model = new NumberButtonModel();
       this.view = new NumberButtonView(id,this.model,options);
    }

    this.onBtnPress = function(event){
       
    }    
    Button.call(this,id,options);
}

NumberButton.prototype = Object.create(Button.prototype);
NumberButton.prototype.constructor = NumberButton;
