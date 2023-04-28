function Button (id, options){
    this._init =  function(id, options){
        this.id = id;
        this.options = options; 
        this.init(id,options);
      
        this.setEvent();
    }

    this.setEvent = function(){
       var _this = this;
      
        this.getWidget().onclick = function(event){ 
            _this.onBtnPress(event);
        }  
    } 

    this._init(id, options);
}

Button.prototype.init = function(id,options){
        this.model = new ButtonModel();
        this.view = new ButtonView(id,this.model,options);
}

Button.prototype.getWidget = function(){
    return this.view.getWidgetElement();
}

Button.prototype.onBtnPress = function(event){
    
}
