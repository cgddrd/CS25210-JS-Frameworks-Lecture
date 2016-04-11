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

$(document).ready(function() {
  $("#changeHeadingColourButton").slideUp()
  $("#answerCode").slideUp()
});
