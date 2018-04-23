$(document).ready(function() {

    $("#collapseBody1").hide();
    $("#collapseBody2").hide();
    $("#collapseBody3").hide();

    $("#collapseHead1").click(function() { //click to toggle collapse body

        $("#collapseBody1").slideToggle("slow");
    });


    $("#collapseHead2").click(function() { //click to toggle collapse body

        $("#collapseBody2").slideToggle("slow");
    });

    $("#collapseHead3").click(function() { //click to toggle collapse body

        $("#collapseBody3").slideToggle("slow");
    });
});