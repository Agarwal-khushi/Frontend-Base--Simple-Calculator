let string="";
let buttons = document.querySelectorAll('.button');
let display = document.getElementById('display');
buttons.forEach((button) => {

    button.addEventListener('click',(e)=> {
       const value =e.target.textContent;
        if(value == '='){
            try{
            string =eval(string);
            display.value= string;
            } catch {
            display.value = "Error";
            string = "";    
            }
        }
        else if(value == 'AC'){
            string=""
            display.value = "string";

        }
        else{
        string += value;
         display.value = string;
        }   
    
  
  });

});