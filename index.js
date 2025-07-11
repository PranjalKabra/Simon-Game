
let level = 0;
let started = false;
let gamePattern = [];
let userClickedPattern = [];

function playSound(name){
        (new Audio("sounds/" + name + ".mp3")).play();
}


function nextSequence() {
    userClickedPattern = [];
    var ranNum = Math.floor(Math.random() * 4);
    level++;
    $("h1").text("Level " + level);
    const $reqbtn = $(".btn").eq(ranNum);   
    playSound($reqbtn.attr("id"));
    gamePattern.push($reqbtn.attr("id"));
    $reqbtn.css("opacity", "0.2");
    setTimeout(() => {
    $reqbtn.css("opacity", "1");
    }, 300);
    
    
}

$($(".btn")).click(() =>{
    var btnPushed = ($(event.srcElement).attr("id"));
    playSound(btnPushed);
    userClickedPattern.push(btnPushed);
    $("#" + btnPushed).addClass("pressed");
    setTimeout(() => {
        $("#" + btnPushed).removeClass("pressed");
    }, 300);
    checkAns(userClickedPattern.length - 1);
    
});
// function to check after click
function checkAns(currentlevel){
    if(userClickedPattern[currentlevel] === gamePattern[currentlevel]){
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(() =>{
                nextSequence();
            }, 1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(() => {
        $("body").removeClass("game-over");
        }, 200);
        startOver();
    }
}


function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
  $("h1").text("Game Over! Press Any Key to Restart");
}
    // console.log(userClickedPattern);
$(document).on("keydown", function () {
  if (!started) {
    started = true;
    nextSequence();
  }
});

    


