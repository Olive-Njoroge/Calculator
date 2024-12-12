const display = document.querySelector("#display");
const pi = Math.PI.toFixed(3);
function appendToDisplay(input){

    if(input === 'π'){
        display.value += pi;
    }else{
         display.value += input;
    }

    

}

function clearDisplay(){
    display.value = "";

}

function calculate(){
    try{
    display.value = eval(display.value);
    }
    catch(error){
        display.value = "error";
    }


}