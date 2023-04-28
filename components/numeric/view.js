var NumberButtonView =  function(id,model, options){
    
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


NumberButtonView.prototype = Object.create(ButtonView.prototype); 
NumberButtonView.prototype.constructor = NumberButtonView;

