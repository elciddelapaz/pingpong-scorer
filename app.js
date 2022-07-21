//declaring variables
let playTo = document.getElementById("playto").value;
let p1Score = 0;
let p2Score = 0;
//p1Button() function
function p1Button() {
    //if the p1 score is < playTo
    if ((p1Score < playTo)) {
        //add 1 to the score
        ++p1Score;
        //print updated score
        document.getElementById("p1Display").innerHTML = p1Score;
        //if p1score is equal to playTo
        if (p1Score == playTo) {
            //disable the add score buttons
            document.getElementById("p1Button").disabled = true;
            document.getElementById("p2Button").disabled = true;
            //display the winner
            document.getElementById("winner").innerHTML = "Player 1 won!"
        }
    }

}
//p2Button() function
function p2Button() {
    //if the p2 score is < playTo
    if ((p2Score < playTo)) {
        //add 1 to the score
        ++p2Score;
        //print updated score
        document.getElementById("p2Display").innerHTML = p2Score;
        //if p2score is equal to playTo
        if (p2Score == playTo) {
            //disable the add score buttons
            document.getElementById("p1Button").disabled = true;
            document.getElementById("p2Button").disabled = true;
            //display the winner
            document.getElementById("winner").innerHTML = "Player 2 won!"
        }
    }
}
//reset() function
function reset() {
    //set the score of p1 and 2 to 0
    p1Score = 0
    p2Score = 0
    //display the score of p1 and p2
    document.getElementById("p1Display").innerHTML = p1Score;
    document.getElementById("p2Display").innerHTML = p2Score;
    //enable the add score buttons
    document.getElementById("p1Button").disabled = false;
    document.getElementById("p2Button").disabled = false;
    //remove the winner
    document.getElementById("winner").innerHTML = ""
}
//update() function
function update() {
    //set the number selected in the option to playTo
    playTo = document.getElementById("playto").value;
}
