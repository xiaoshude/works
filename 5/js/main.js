$(function(){
    var tipInfo=$('.tip-info');
    var line=$('.line');
    var line1=$('.line1');
    var line2=$('.line2');
    var line3=$('.line3');
    var line4=$('.line4');
    $('.tip').hover(function(){
            var index=$('.tip').index(this);
            console.log(index);
        tipInfo.eq(index).addClass('tip-ani');
        line1.eq(index).removeClass('line1-ani-l').addClass('line1-ani');
            line2.eq(index).removeClass('line2-ani-l').addClass('line2-ani');
            line3.eq(index).removeClass('line3-ani-l').addClass('line3-ani');
            line4.eq(index).removeClass('line4-ani-l').addClass('line4-ani');
    },function(){
            var index=$('.tip').index(this);
            tipInfo.eq(index).removeClass('tip-ani');
            line1.eq(index).removeClass('line1-ani').addClass('line1-ani-l');
            line2.eq(index).removeClass('line2-ani').addClass('line2-ani-l');
            line3.eq(index).removeClass('line3-ani').addClass('line3-ani-l');
            line4.eq(index).removeClass('line4-ani').addClass('line4-ani-l');
        }
    )
});