const display = document.querySelector("#display");
function appendToDisplay(input){

    if(input === 'π'){
        
        display.value += 'π';
    }else if(input === '√'){
         if (display.value !== "") {
            display.value = Math.sqrt(parseFloat(display.value)).toFixed(3); // Square root with 3 decimal places
        } else {
            display.value = "error"; // Handle case where display is empty
        }
        
    }
    else{
         display.value += input;
    }



    

}

function clearDisplay(){
    display.value = "";

}

function calculate(){
    try{
    const valueWithPi = display.value.replace("π", Math.PI);
    display.value = eval(valueWithPi).toFixed(2);
    }
    catch(error){
        display.value = "error";
    }


}