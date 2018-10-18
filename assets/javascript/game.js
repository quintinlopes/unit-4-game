var wins = 0;
var losses = 0;
var iceNumbers = [];
var total = 0;

$('#numWins').text(wins);
$('#numLosses').text(losses);

$(document).ready(function () {
    var targetNumber = Math.floor(Math.random() * 121 + 19)
    $('#compScore').text(targetNumber);
});

function numberOptions() {
    for (var i = 0; i < 4; i++) {
        var num = Math.floor(Math.random() * 12 + 1);
        iceNumbers.push(num);
    }
}
numberOptions();

function reset() {
    targetNumber = Math.floor(Math.random()* 120 + 19);
    $('#compScore').text(targetNumber);
    iceNumbers = [];
    numberOptions();
    total = 0;
    $('#yourTotal').text(total);
}

function rich() {
    wins++;
    $("#win-lose").html("<h2>Winner!</h2>");
    $("#wins").html("<h3>" + wins + "</h3>");
    $('#wins').text(wins);
    reset();
}

function broke() {
    losses++;
    $("#win-lose").html("<h2>Loser!</h2>");
    $("#losses").html("<h3>" + losses + "</h3>");
    $('#losses').text(losses);
    reset();
}