



$(document).ready(function(){

//variables

let wins = 0
let losses = 0
let totalScore = 0;
let randomScore;
let myId = 0;

//function to run at start and reset of game
function resetStartGame(){
    
 //array for gem images   
 let images = ['assets/images/blue-gem.jpg', 'assets/images/pink-gem.png', 'assets/images/blue-gem.png', 'assets/images/small_15735.png']

    $("#buttons").empty()
    
   //creates random number for user to match and diplays it in #random-number div
    randomScore = 
    Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    console.log(randomScore);
    $("#random-number").html("Random Number: " + randomScore);


    //for loop to create random values for buttons and appends the values to buttons
    //loops images to each button
 for (i = 0; i < 4; i++) {

  let randomGem = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  console.log(randomGem);
  
  let gem = $("<button>");
  gem.addClass("gems");
  gem.attr("data-random", randomGem);
  gem.attr("id", "gem_" + myId++)
  gem.css({"background-image":"url('" + images[i] + "')",
            "background-size": "cover"});
  $("#buttons").append(gem);   


} //end function resetStartGame

};


//runs function on click to convert data-random attribute to integer
$(document).on("click", ".gems", function(){
 let number =  parseInt($(this).attr("data-random"));

console.log(number);

//sets totalScore to sum the number for every click
totalScore += number;
$("#total-score").html("Your Total Score: " + totalScore);
//console.log(totalScore);


//if statements for winning and losing
if(randomScore === totalScore){
    alert("WINNER!!");
    wins++;
    totalScore = 0;
    $("#total-score").html("Your Total Score: " + totalScore);
    $("#win-loss").html("Wins: " + wins + " " + "Losses: " + losses);
   resetStartGame();
  
}

if(totalScore > randomScore){
    alert("Sorry, you lost!!");
    losses++;
    totalScore = 0;
    $("#total-score").html("Your Total Score: " + totalScore);
    $("#win-loss").html("Wins: " + wins + " " + "Losses: " + losses);
    resetStartGame()
}
//end if statements

});

//call resetStartGame function
resetStartGame()

});