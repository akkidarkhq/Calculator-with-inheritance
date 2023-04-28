var OperationButtonView =  function(id,model, options){
    this.init = function(id,model, options){
      this.model = model;
      this.setWidget();
    }
    this.setWidget= function(){
        
        this.widgetElement.style.background = this.model.bgcolor;
        this.widgetElement.style.color = this.model.color;
    }
    ButtonView.call(this,id,model, options);
}


OperationButtonView.prototype = Object.create(ButtonView.prototype); 
OperationButtonView.prototype.constructor = OperationButtonView;

