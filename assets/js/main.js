// Get name input function and output to game-page id
function getGamerId(){
    document.getElementById("result").innerHTML = document.getElementById('gamerid').value + "";
    document.getElementById('landing-page').style.display = "none"; document.getElementById('game-page').style.display="block";
}