/*
This is empty on purpose! Your code to build the resume will go here.
 */

/*
var awesomeThougths = "I am Sylvester and I am AWESOME!";
var funThoughts = awesomeThougths.replace('AWESOME','FUN');
console.log(awesomeThougths);*/


// $("#main").append(funThoughts);

var name = "Sylvester Das";
var role = "Web Developer";

var formattedName = HTMLheaderName.replace("%data%",name);
var formattedRole = HTMLheaderRole.replace("%data%",role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    
    s=s[1].toUpperCase() + s.slice(2);
    
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));