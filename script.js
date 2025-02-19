const display = document.getElementById("display");
var error_state = false;
var result_state = false;

function appendToDisplay(input){
    if(error_state){
        clear_display();
        error_state = false;
    }

    if(result_state && Number(input)){
        clear_display();
    }
    
    display.value += input;
    result_state = false;
}

function clear_display(){
    display.value = "";
}

function calculate(){
    try {
        display.value = eval(display.value);
        result_state = true;
    }
    catch(error){
        display.value = "Error";
        error_state = true;
    }
}