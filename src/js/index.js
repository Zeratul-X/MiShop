  /**
   * swiper
   */
var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay:true,
      // 如果需要分页器
      pagination: {
          el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },

})

/**
 * 顶部滚动到500px显示返回顶部
 */
$(window).scroll(function () {
    if ($(window).scrollTop() > 100){
        $('#search').css({
            'position': 'sticky',
            'top': '0',
        });
        $('.banner_x').css({
            'background':'gray',
        })
    } else {
        $('.banner_x').css({
            'background': 'none',
        })
    }
    if ($(window).scrollTop() > 500)
    {
        $('.backtotop').css({
            display: 'block'
        });
    } else {
        $('.backtotop').css({
            display: 'none'
        });
    }
});

/**
 * 回到顶部按钮事件
 */
$('.backtotop').click(() => {
    $('body,html').animate({ 'scrollTop': '0' }, 'slow');
})
