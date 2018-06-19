    $(document).ready(function() {
        ! function() {
            var map = [],
                names = [],
                win = $(window),
                header = $('.sidemenu ul li'),
                currClass

            $('.scroll').each(function(n) {
                map[n] = this.offsetTop-36 //top的數字
                names[n] = $(this).attr('id') // 各區塊的id
            })

            win.on('scroll', function() {
                var i = 0

                while (map[i++] <= win.scrollTop());
                if (i >= 3) {
                    header.eq(i-3).addClass('on').siblings('.on').removeClass('on');
                }else if(i == 1){
                  header.removeClass('on')
                }

                console.log("map:" + map);
                console.log("i:" + i);
            })
        }();
    });

    function goToByScroll(id) {
        $('html,body').animate({
            scrollTop: $("#" + id).offset().top
        }, 'slow');
    }
