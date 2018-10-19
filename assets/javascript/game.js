var wins = 0;
var losses = 0;
var iceNumbers = [];
var total = 0;

$('#wins').text(wins);
$('#losses').text(losses);

$(document).ready(function () {
    var targetNumber = Math.floor(Math.random() * 120 + 19)
    $('#compScore').text(targetNumber);
});

function numberOptions() {
    for (var i = 0; i < 4; i++) {
        var number = Math.floor(Math.random() * 12 + 1);
        iceNumbers.push(number);
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

$("#ice1").on('click', function() {
    total = total + iceNumbers[0];
    $("#yourTotal").text(total);

    if (total == targetNumber) {
        rich();
    }
    else if (total > targetNumber){
        broke();
    }

})

$("#ice2").on('click', function() {
    total = total + iceNumbers[1];
    $("#yourTotal").text(total);

    if (total == targetNumber) {
        rich();
    }
    else if (total > targetNumber){
        broke();
    }

})

$("#ice3").on('click', function() {
    total = total + iceNumbers[2];
    $("#yourTotal").text(total);

    if (total == targetNumber) {
        rich();
    }
    else if (total > targetNumber){
        broke();
    }

})

$("#ice4").on('click', function() {
    total = total + iceNumbers[3];
    $("#yourTotal").text(total);

    if (total == targetNumber) {
        rich();
    }
    else if (total > targetNumber){
        broke();
    }

});