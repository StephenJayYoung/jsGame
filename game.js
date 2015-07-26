// Check if the user is ready to play!
confirm("I am learning to code");

var codingAge = prompt("How many months have you been coding?");

if(codingAge<1) {
    console.log("You're just beginning. Welcome!");
}
    else {
        console.log("Looks like you have a bit of practice under your belt!");
    }
    
console.log("Coding is challenging, and to be good, it helps to do it every day'");


var userAnswer=prompt("Do you think this is something that you can do every day?");

 if (userAnswer==="yes"); {
     console.log("Yassss!! You are going to be a coding boss!");
 }
 else {
     console.log("Ok! You will still be good if you keep at it!'");
     }

var feedback = prompt("How many hours do you want to spend doing this per day>");

if (feedback < 3) {
    console.log("Ok! If you do that evry day, you are going to be a programming boss in no time ");
}
else {
    console.log("Ok! You can get pretty decent with this amount of time, but I recommend more!!");
}
