function turnYellow() {

  $("li").css("background-color","yellow").slideUp("slow");

}

function turnNormal() {

  $("li").css("background-color","transparent").slideDown("slow");

}

function changeHeadingColour() {

  $("#changeHeadingColourButton").siblings("h2").css("background-color", "#47D591");

}

function revealAnswer() {

  $("#changeHeadingColourButton").slideDown()
  $("#answerCode").slideDown()

}

function revealCSSProperty() {

  alert($("#changeHeadingColourButton").siblings("h2").css("color"));

}

function changeLinkURL() {

  $("#exampleLink").attr("href","http://www.qinusty.co.uk/dapstep.mp3");
  $("#exampleLink").html("<i>" + $("#exampleLink").siblings("h2").text() + "</i>");

}

function changePColours() {

  $("#iterationButton").siblings("p").each(function(i) {
  		$(this).css("background-color", "red");
  		$(this).append(" (that was P number <b>" + i + "</b>)");
  })

}

function startTimer(duration, display) {

    var timer = duration, minutes, seconds;

    var intervalId = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.innerHTML = "<strong>" + minutes + " mins and " + seconds + " secs</strong>";

        if (--timer < 0) {
            display.innerHTML = "<strong>no time left</strong>";
            clearInterval(intervalId);
        }
    }, 1000);
}

function triggerExerciseTimer() {

  var twoMinsThirtyTwoSecs = 152,
      display = document.querySelector('#time2');

      startTimer(twoMinsThirtyTwoSecs, display);
}

Reveal.addEventListener( 'stats', function() {
    triggerExerciseTimer();
} );


$(document).ready(function() {
  $("#changeHeadingColourButton").slideUp()
  $("#answerCode").slideUp()

});
