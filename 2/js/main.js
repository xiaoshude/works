$(function () {
    $wrapper = $('.wrapper');
    var y;
    var timerUp;
    var timerDown;
    $wrapper.mouseover(function(){
    if (event.offsetY > 250) {
        timerDown = setInterval(scrollDown, 10);
    }
        else{
        timerUp = setInterval(scrollUp, 10);
    }
    });
    $wrapper.mouseout(function(){
        clearInterval(timerDown);
        clearInterval(timerUp);
    });
    function scrollDown(){
      y=parseInt($wrapper.css('backgroundPositionY'));
        if (y==-700){
            return;
        }
        else{
            $wrapper.css('backgroundPositionY', (y-=1 ) + 'px');
            console.log(y);

        }
    }
    function scrollUp(){
        y=parseInt($wrapper.css('backgroundPositionY'));

        if (y==0) {
            return
        } else {
            $wrapper.css('backgroundPositionY', (y+=1) + 'px');
        }
    }


});

