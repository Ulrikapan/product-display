// ----------------------------
// $Catalog 目錄

// $JavaScript Document 消除連結虛線
// $判斷瀏覽器
// $waypoints & animate
// $reveal-animation


// ----------------------------

// $判斷瀏覽器

navigator.sayswho = (function () {
    var ua = navigator.userAgent, tem,
    M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return 'IE ' + (tem[1] || '');
    }
    if (M[1] === 'Chrome') {
        tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
        if (tem != null)
            return tem.slice(1).join(' ').replace('OPR', 'Opera');
    }
    M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
    if ((tem = ua.match(/version\/(\d+)/i)) != null)
        M.splice(1, 1, tem[1]);
    return M.join(' ');
})();



// $JavaScript Document 消除連結虛線
jQuery(function ($) {
    $("a").focus(function () {
        $(this).blur();
    });
});

$(document).ready(function(){

    // $waypoints & animate ------

    function onScrollAnim( items, trigger ) {
        items.each( function() {
            var wpaElement = $(this),
                wpaAnimation = wpaElement.attr('data-wpa-animation'),
                wpaDuration = wpaElement.attr('data-wpa-duration'), 
                wpaDelay = wpaElement.attr('data-wpa-delay');

            wpaElement.css({
                '-webkit-animation-delay':  wpaDelay,
                '-moz-animation-delay':     wpaDelay,
                'animation-delay':          wpaDelay,
                '-webkit-animation-duration': wpaDuration,
                '-o-animation-duration': wpaDuration,
                'animation-duration': wpaDuration,
            });
     
            //若trigger變數有值，則為此值，若無則為element本身
            var wpaTrigger = ( trigger ) ? trigger : wpaElement;

            wpaTrigger.waypoint(function(direction) {
                // if (direction == 'down'){
                  wpaElement.addClass('animated').addClass(wpaAnimation);
                // } 
                // else {
                //   wpaElement.removeClass('animated').removeClass(wpaAnimation);
                // }
                
            },{
                offset: '100%'
            });
        });
    }


    onScrollAnim( $('.myAnimation') );

    // $reveal-animation
    var revealEl = $('body').find('.reveal');
    function revealAnimate(){
      revealEl.each(function(){
        var revealElPos = $(this).offset().top;
        //捲動觸發點
        if($(window).scrollTop() > revealElPos - 800){
          if($(this).hasClass('reveal-l')){
            $(this).addClass('revealAniL');
          }else if ($(this).hasClass('reveal-r')){
            $(this).addClass('revealAniR');
          }else if ($(this).hasClass('reveal-t')){
            $(this).addClass('revealAniT');
          }else if ($(this).hasClass('reveal-b')){
            $(this).addClass('revealAniB');
          }
          $(this).parent().find('.reveal-content').addClass('active');
        }
      })
    }
    revealAnimate();
    $(window).scroll(function(){
      revealAnimate()
    })


});
