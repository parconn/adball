$(function(){
    adballEntryEvent();
    touchEvent();
    inputPassword();
});

$(window).on('scroll', function(){
    var winST = $(window).scrollTop();

    if($('#header').length > 0){
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
        setTimeout(function(){
            $('.btn-adball-entry').removeClass('active');
        }, 600);
        /* $('body').delay(400).fadeOut(200, function(){

        });*/
    });
}

//터치 에니메이션 이벤트
function touchEvent(){
    $('.hover').on({
        'touchstart': function () {
            $(this).addClass('touch');
        }, 'touchend': function () {
            $(this).removeClass('touch');
        }
    });
}

//비밀번호 보기 이벤트
function inputPassword(){
    $('.input-pw').each(function(){
        var inp = $(this);
        inp.find('.btn-show').on('click', function(){
            if(!inp.hasClass('on')){
                inp.addClass('on');
            } else {
                inp.removeClass('on');
            }
        });
        inp.find('input[type="password"]').on('keyup', function(){
            var inpVal = $(this).val();
            inp.find('input[type="text"]').val(inpVal);
        });
        inp.find('input[type="text"]').on('keyup', function(){
            var inpVal = $(this).val();
            inp.find('input[type="password"]').val(inpVal);
        });
    });
}