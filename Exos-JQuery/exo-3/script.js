console.log("exercice 3");

$("h1").html('Alexis');
$("#tagline").html('Hi, fancy seeing you here');
$(".navbar-nav").hide();
$(".navbar-right").show();
$("span.glyphicon-log-in").removeClass("glyphicon glyphicon-log-in").addClass("glyphicon glyphicon-user");
$("footer p").html("<b>**Copyright 2017**</b>");
$("#work1 p").html("Mon projet 1");
$("#work1 p:gt(0)").html("Mon projet 2");
$("#work1 p:gt(1)").html("Mon projet 3");
$("#work1 p:gt(2)").html("Mon projet 4");

//$("#work1 img").attr("src","MakeYourChoice.gif");

$("h3").after("<p>Ma dernière oeuvre</p><br><img src='MakeYourChoice.gif' height=250px>")
$("footer").addClass("intro");
