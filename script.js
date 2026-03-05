const display= document.getElementById("display");

function diaplayThe(input){
    
    display.value += input;
}
function calculate(){
    try{
    let expression = display.value.replace(/\b0+(\d+)/g, '$1');

    display.value=eval(expression)}
    catch(error){
        display.value="error"
    }
    
}
function clearDisplay(){
    display.value = " ";
    
}