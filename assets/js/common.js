$(function(){
    adballEntryEvent();
});

$(window).on('scroll', function(){
    var winST = $(window).scrollTop();

    if($('#container').hasClass('main')){
        // if(winST <= 30){
        //     $('#header h1').css({'top': 50-winST, 'width': 130-winST});
        // }
        if(winST > 0){
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
    }
});

//애드볼 응모 버튼 클릭 이벤트
function adballEntryEvent(){
    $('.btn-adball-entry').on('click', function(){
        $(this).addClass('active');
        $('body').delay(400).fadeOut(200, function(){

        });
    });
}