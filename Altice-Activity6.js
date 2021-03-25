//Isaac Altice
function shapeFinder(){//overall function
    let sides = 0;// variable for number of sides the user enters
    while(!(sides >=3 && sides <= 7)){//loop asking user for number until user enters number between 3 and 7
        sides = window.prompt("Enter number of sides between 3 and 7: ");//window to ask user for number of sides
        if(!(sides >=3 && sides <= 7))// input validation
        {
            window.alert("Invalid entry, Enter a number between 3 and 7.")// let the user know incorrect input
        }

    }
    window.alert("Number of sides = " + sides + "\nName of the polygon = " + converShape(sides));// window to display data to user and call function to determine shape
    function converShape(sides){//function to determine shape given number of sides as parameter
        let shape;//variable to hold shape name
        if(sides == 3){//if else statements to determine shape
            shape = "Triangle";
        }
        else if(sides == 4){
            shape = "Square";
        }
        else if(sides == 5){
            shape = "Pentagon";
        }
        else if(sides == 6){
            shape = "Hexagon";
        }
        else{
            shape = "Heptagon";
        }
        return shape;// return the shape to where the function was called
    }
}