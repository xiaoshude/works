$(function(){
    var configure = {
        "ios": {
            debug: false,
            "plist": "https://app.dxy.cn/packages/aspirin/ipa/ipa.plist",
            "packageName": "cn.dxy.aspirin",
            "packageUrl": "dxy-aspirin://index",
            "appStoreUrl": "https://itunes.apple.com/cn/app/id521635095"
        },
        "android": {
            "packageName": "cn.dxy.android.aspirin",
            "packageUrl": "app.dxy.cn/aspirin/index", /* NOTICE: without http! */
            "fusionPage": "http://fusion.qq.com/cgi-bin/qzapps/unified_jump?appid=248289"
        }
    };
    Zepto.install($("form"), configure);

    //
    var height=$(window).height();
    var width=$(window).width();
    $('#container').css({'height':height,'width':width});
    $('#scroller').css({'height':height*7,'width':width});
    $('section').css({'height':height});
    $('section').bind('swipeUp',function(){
        var index=$('section').index(this);
        //debugger;
        console.log(index);
        console.log($('#scroller'));
        if(index==6){return}
        $('#scroller').animate({top:-(index+1)*height+'px'},600);
    });
    $('section').bind('swipeDown',function(){
        var index=$('section').index(this);
        //debugger;
        console.log(index);
        console.log($('#scroller'));
        if(index==0){return}
        $('#scroller').animate({top:-(index-1)*height+'px'},600);
    })
});