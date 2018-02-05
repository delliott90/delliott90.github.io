$(document).ready(function(){
    
    recenterGroup();
    setTimeout(function(){
        changeBGColor();
    }, 3000);

    $(window).resize(function(){
        recenterGroup();
    }); 
    
    function changeBGColor(){
        var randomHexColor = '';
        randomHexColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        $("#svg-boxGradStop1").css({'stop-color': randomHexColor, transition: "6s"});
        $("#svg_backSphereGradStop1_1").css({'stop-color': randomHexColor, transition: "6s"});
        $("#svg_backSphereGradStop1_2").css({'stop-color': randomHexColor, transition: "6s"});
        randomHexColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        var bottomBackCircleStops = $(".svg-backSphereGradStop2")
        setTimeout(function(){
            $("#svg-boxGradStop2").css({'stop-color': randomHexColor, transition: "6s"});
            $("#svg_backSphereGradStop2_1").css({'stop-color': randomHexColor, transition: "6s"});
            $("#svg_backSphereGradStop2_2").css({'stop-color': randomHexColor, transition: "6s"});
        }, 3000);
        setTimeout(function(){
            changeBGColor();
        }, 15000);
    };

    function recenterGroup(){
        var windowWidth = $(window).width();
        var windowHeight = $(window).height();
    
        var svgPath = $("#animMotionPath");
        // The path position never changes
        var pathPosition = svgPath.position();
        var pathTop = pathPosition['top']; //y
        var pathLeft = pathPosition['left']; //x
    
        var pathBBox = svgPath[0].getBBox();
        var pathCenter = {'pathX': pathLeft + (pathBBox['width']/2), 'pathY': pathTop + (pathBBox['height']/2)};
    
        var animGroup = $('#svg-outerGroup');
        // Default center
        var transX = 0;
        var transY = 0;
        var windowCenter = {'windowX': windowWidth/2, 'windowY': windowHeight/2}
    
        if (pathCenter['pathX'] > windowCenter['windowX']){
            transX = -(pathCenter['pathX']-windowCenter['windowX']);
        }
        else if(pathCenter['pathX'] < windowCenter['windowX']){
            transX = (windowCenter['windowX']-pathCenter['pathX']);
        }
        if (pathCenter['pathY'] > windowCenter['windowY']){
            transY = -(pathCenter['pathY']-windowCenter['windowY']);
        }
        else if(pathCenter['pathY'] < windowCenter['windowY']){
            transY = (windowCenter['windowY']-pathCenter['pathY']);
        }
    
        var translation = 'translate('+transX+','+transY+')';
        animGroup.attr('transform', translation);
    }

});



