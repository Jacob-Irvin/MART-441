function storyFunction(choice) {
    var answer1 = document.getElementById("choice1").innerHTML;
    var answer2 = document.getElementById("choice2").innerHTML;
    if (choice == 1 && answer1 == "Coffee") {
        document.getElementById("story").innerHTML = "What would you like in it?";
        document.getElementById("choice1").innerHTML = "Cream"; 
        document.getElementById("choice2").innerHTML = "Sugar";
    } else if (choice == 2 && answer2 == "Tea") {
        document.getElementById("story").innerHTML = "What would you like in it?";
        document.getElementById("choice1").innerHTML = "Milk";
        document.getElementById("choice2").innerHTML = "Tea";
    } else if (choice == 1 && answer1 == "Cream") {
        document.getElementById("story").innerHTML = "Would you like that drink for here, or to go?";
        document.getElementById("choice1").innerHTML = "Here";
        document.getElementById("choice2").innerHTML = "To go";
    } else if (choice == 2 && answer2 == "Sugar") {
        document.getElementById("story").innerHTML = "Would you like that drink for here, or to go?";
        document.getElementById("choice1").innerHTML = "Here";
        document.getElementById("choice2").innerHTML = "To go";
    } else if (choice == 1 && answer1 == "Milk") {
        document.getElementById("story").innerHTML = "Would you like that drink for here, or to go?";
        document.getElementById("choice1").innerHTML = "Here";
        document.getElementById("choice2").innerHTML = "To go";
    } else if (choice == 2 && answer2 == "Tea") {
        document.getElementById("story").innerHTML = "Would you like that drink for here, or to go?";
        document.getElementById("choice1").innerHTML = "Here";
        document.getElementById("choice2").innerHTML = "To go";
    } else if (choice == 1 && answer1 == "Here") {
        document.getElementById("story").innerHTML = "Enjoy your drink!";
        document.getElementById("choice1").innerHTML = "Thank you!";
        document.getElementById("choice2").innerHTML = "Thank you!";
    } else if (choice == 2 && answer2 == "To go") {
        document.getElementById("story").innerHTML = "Enjoy your drink!";
        document.getElementById("choice1").innerHTML = "Thank you!";
        document.getElementById("choice2").innerHTML = "Thank you!";
    }
}
