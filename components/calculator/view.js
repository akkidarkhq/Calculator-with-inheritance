function CalculatorView(id, parentElement, options){
    
    this.init = function(id, parentElement, options) {    
        this.id = id;
        this.options = options; 
        this.parentElement = parentElement;
        this.setCalculatorWidget();
    }
    
    this.setCalculatorWidget = function(){
        // this.calculatorWidget = document.createElement('div');
        // this.calculatorWidget.className = "calc-container";

        this.calculatorWidget = this.createWidget('div',"calc-container");
        this.appendWidget(this.calculatorWidget,this.parentElement);

        this.displayContainer = this.createWidget('div',"display-container");
        this.appendWidget(this.displayContainer,this.calculatorWidget);

        this.btnContainer =  this.createWidget('div',"btn-container");
        this.appendWidget(this.btnContainer,this.calculatorWidget)

        this.funBtnContainer =  this.createWidget('div',"funBtn-container");
        this.appendWidget(this.funBtnContainer,this.btnContainer)

        this.opBtnContainer =  this.createWidget('div',"opBtn-container");
        this.appendWidget(this.opBtnContainer ,this.btnContainer)

        this.numBtnContainer =  this.createWidget('div',"numBtn-container");
        this.appendWidget(this.numBtnContainer,this.btnContainer)

        // this.parentElement.appendChild(this.calculatorWidget);

    }
   // this method creates calculatorElements(div container)
    this.createWidget = function(element,className){
        this.widget = document.createElement(element);
        this.widget.className = className;

        return this.widget;
    }

    this.appendWidget = function(widget,parentWidget){
        this.parentWidget = parentWidget;
        this.parentWidget.appendChild(widget);
    }

    /**
     * 
     * @param  
     */
    this.setDisplay = function(displayElement){
        this.displayContainer.appendChild(displayElement)
    }


    /**
     * 
     * @param {*} NumBtnArray 
     */
    this.setNumberButtons = function(NumBtnArray){
        NumBtnArray.forEach(btn => {
            this.numBtnContainer.appendChild(btn)
        }); 
    }

    /**
     * 
     * @param {*} opBtnsArray
     */
    this.setOpButtons = function(opBtnsArray){
        opBtnsArray.forEach(btn =>{
            this.opBtnContainer.appendChild(btn)
        })
    }

     /**
     * 
     * @param {*} fnBtnsArray
     */
     this.setFnButtons = function(fnBtnsArray){
        fnBtnsArray.forEach(btn =>{
            this.funBtnContainer.appendChild(btn)
        })
    }

    /**
     * 
     * @returns 
     */
    this.getWidget = function(){
        return  this.calculatorWidget;
    }
    
    /**
     * 
     */
    this.init(id, parentElement, options);
}