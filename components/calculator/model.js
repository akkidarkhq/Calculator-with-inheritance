function CalculatorModel(id,options){
    
    this.init = function(id, options) {    
        this.id = id;
        this.numericalBtns = ['7','8','9','4','5','6', '1','2','3','.','0'];
        this.operationBtns = ['/','*','-','+','=']
        this.functionBtns = ['AC','DEL']
        this.options = options; 
    }
      
    this.init(id,options);
}