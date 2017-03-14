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
           // console.log(addColor);
    });

    $( "div" ).mousemove(function( event ) {
        var colorRandom = Math.floor(Math.random()*900000) + 100000;
        var addColor = "#"+colorRandom;
        var colorDiv = document.getElementById('color1');
            colorDiv.style.backgroundColor = addColor;
            //console.log(addColor);
    });

});


// Raj heights rambaug colony paud road kothrud Pune 411038
// For any further detils please write to us jaysounds_pune@yahoo.com
// contact us +919881907980 / +919226448081