var ButtonView =  function(id,model, options){
    
    this._init = function(id,model, options){
        
        this.id = id;
        this.options = options;
        this.widgetElement = null; 
        this._setWidget();
        this.init(id,model,options); // Overridden
    }

    this._setWidget = function(){
        
        this.widgetElement = document.createElement('button');
        this.widgetElement.innerHTML = this.options.title;
        this.widgetElement.setAttribute('id', this.id); 
        this.widgetElement.setAttribute('class', this.options.className); 
    }


    this.destroy = function(){
    }

    this.getWidgetElement = function(){
        return this.widgetElement;
    }

    this._init(id,model, options);

}

/** 
 * prototype
 */
ButtonView.prototype.init = function(id,model,options){ 

}
