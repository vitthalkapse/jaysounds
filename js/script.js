$(document).ready(function(){

    var screenWidth = $(window).width();
    var screenHeight = $(window).height();
    var heroImg = document.getElementById('heroImg');
        heroImg.style.width = screenWidth;

    $("div").click(function(){
        var colorRandom = Math.floor(Math.random()*900000) + 100000;
        var addColor = "#"+colorRandom; 
        var colorDiv = document.getElementById('color1');
            colorDiv.style.backgroundColor = addColor;

        // var spotlightColor1 = document.getElementById('spotlight1');
        // var spotlightColor2 = document.getElementById('spotlight2');
        //     spotlightColor1.style.borderTopColor = "rgba(155, 102, 102, 0.5)";
        //     spotlightColor2.style.borderTopColor = "rgba(155, 102, 102, 0.5)";
            //console.log(spotlightColor.style.borderTopColor);

        $("#spotlight1").animate({
            borderTopColor: "rgba(155, 102, 102, 0.5)" 
        }, 1500 );
    });

    $( "div" ).mousemove(function( event ) {
        var colorRandom = Math.floor(Math.random()*900000) + 100000;
        var addColor = "#"+colorRandom;
        var colorDiv = document.getElementById('color1');
            colorDiv.style.backgroundColor = addColor;
            //console.log(addColor);
    });


});