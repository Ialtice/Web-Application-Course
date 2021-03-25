//Global variables
let prevCalc = 0;
let calc = "";

window.onload = function(){//upon loading the webpage this function prepares all buttons to have a onclick action
    document.getElementById("btn1").onclick = showNum;
    document.getElementById("btn2").onclick = showNum;
    document.getElementById("btn3").onclick = showNum;
    document.getElementById("btnPlus").onclick = add;
    document.getElementById("btn4").onclick = showNum;
    document.getElementById("btn5").onclick = showNum;
    document.getElementById("btn6").onclick = showNum;
    document.getElementById("btnMinus").onclick = subtract;
    document.getElementById("btn7").onclick = showNum;
    document.getElementById("btn8").onclick = showNum;
    document.getElementById("btn9").onclick = showNum;
    document.getElementById("btnTimes").onclick = multiply;
    document.getElementById("btn0").onclick = showNum;
    document.getElementById("btnPow").onclick = power;
    document.getElementById("btnPow2").onclick = power2;
    document.getElementById("btnDivide").onclick = divide;
    document.getElementById("btnDecrement").onclick = decrement;
    document.getElementById("btnIncrement").onclick = increment;
    document.getElementById("btnSqrt").onclick = sqrt;
    document.getElementById("btnFloor").onclick = floor;
    document.getElementById("btnRound").onclick = round;
    document.getElementById("btnDecimal").onclick = showNum;
    document.getElementById("btnReset").onclick = clear;
    document.getElementById("btnCalc").onclick = calculate;

}
//The following function displays a number in the text field when a number is clicked.
//Note that it keeps concatenating numbers which are clicked. 
function showNum() {
    document.frmCalc.txtNumber.value += this.value;
}

//The following function decreases the value of displayed number by 1.
//isNaN method checks whether the value passed to the method is a number or not.     
function decrement() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            num--;
            document.frmCalc.txtNumber.value = num;
        }
}

//The following function is called when "Add" button is clicked. 
//Note that it also changes the values of the global variables.       
function add() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            prevCalc = num;
            document.frmCalc.txtNumber.value = "";
            calc = "Add";
        }
}

//The following function is called when "Calculate" button is clicked.
//Note that this function is dependent on the value of global variable.        
function calculate() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
        if (!(isNaN(num))) {
            let total;
            if (calc === "Add"){
                total = prevCalc + num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc === "Subtract"){
                total = prevCalc - num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc === "Divide"){
                total = prevCalc / num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc === "Multiply"){
                total = prevCalc * num;
                document.frmCalc.txtNumber.value = total;
            }
            if (calc === "Power"){
                total = prevCalc ** num;
                document.frmCalc.txtNumber.value = total;
            }
        
}}

function clear() {
	document.frmCalc.txtNumber.value = "";
	prevCalc = 0;
	calc = "";
}

function subtract() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Subtract";
    }
}

function divide() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Divide";
    }
}

function multiply() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Multiply";
    }
}

function sqrt() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {

        num= num ** 0.5;
        document.frmCalc.txtNumber.value = num;
    }
}
function floor() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {

        num = num - num % 1;
        document.frmCalc.txtNumber.value = num;
    }
}
function round() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {

        if(num % 1 >= 0.5){
            num = (num - num % 1) + 1
        }
        else{
            num = num - num % 1;
        }
        document.frmCalc.txtNumber.value = num;
    }
}
function increment() {
    let num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {

        num++;
        document.frmCalc.txtNumber.value = num;
    }
}
function power(){
    let num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {
        prevCalc = num;
        document.frmCalc.txtNumber.value = "";
        calc = "Power";
    }
}
function power2(){
    let num = parseFloat(document.frmCalc.txtNumber.value);
    if (!(isNaN(num))) {

        num = num ** 2;
        document.frmCalc.txtNumber.value = num;
    }
}
