    // Take a dogs name and age and converts into dog years (1 human year = 7 dog years)
    console.log("Let's see how old your dog is...")
    
    var dogName = prompt("Enter Dog's Name");
    var dogAge = prompt("Enter " + dogName  + "\'s Age", "5");
    var dogHumanAge = dogAge * 7;

    console.log(dogName + " is " + dogHumanAge + " in human years!")
