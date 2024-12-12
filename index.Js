const display = document.querySelector("#display");
const pi = Math.PI.toFixed(3);
function appendToDisplay(input){

    if(input === 'π'){
        display.value += pi;
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
    display.value = eval(display.value).toFixed(2);
    }
    catch(error){
        display.value = "error";
    }


}