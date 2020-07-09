  /**
   * swiper
   */
  var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: true,
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
      if ($(window).scrollTop() > 100) {
          $('#search').css({
              'position': 'sticky',
              'top': '0',
          });
          $('.banner_x').css({
              'background': 'white',
          })
      } else {
          $('.banner_x').css({
              'background': 'white',
          })
      }
      if ($(window).scrollTop() > 500) {
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
      $('body,html').animate({
          'scrollTop': '0'
      }, 'slow');
  })

  /**
   * 懒加载
   */
  lazyLoadInit({
      offsetBottom: 0,
      offsetTopm: 0,
      showTime: 1100,
  });

   // 手机板块
   // 查看全部
   $(".product_phone_head h2 a").mouseover(function () {
       $(".product_phone_head h2 a").css("color", "#ff6700")
   })
   $(".product_phone_head h2 a").mouseleave(function () {
       $(".product_phone_head h2 a").css("color", "black")
   })
   $(".product_phone_content_left img").mouseover(function () {
       $(".product_phone_content_left img").addClass("addshaow")
   })
   $(".product_phone_content_left img").mouseleave(function () {
       $(".product_phone_content_left img").removeClass("addshaow")
   })
   // 手机板块右侧 商品
   $(".product_phone_content_right ul li").mouseover(function () {
       product_phone_content_right_index = $(this).index();
       $(".product_phone_content_right ul li").eq(product_phone_content_right_index).addClass("addshaow").siblings().removeClass("addshaow")
   })
   $(".product_phone_content_right ul li").mouseleave(function () {
       $(".product_phone_content_right ul li").removeClass("addshaow")
   })

   // 家电  内容的左侧 活动效果
   $(".product_tv_content_left a").mouseover(function () {
       product_tv_content_left_index = $(this).index();
       $(".product_tv_content_left a").eq(product_tv_content_left_index).addClass("addshaow").siblings().removeClass("addshaow")
   })
   $(".product_tv_content_left a").mouseleave(function () {
       $(".product_tv_content_left a").removeClass("addshaow")
   })
   //家电 右侧  上下tab切换
   $(".product_tv_head h2 ul li:first").children().addClass("product_tv_head_h2_ul_li_a")
   $(".product_tv_head h2 ul li").mouseover(function () {
       product_tv_items = $(this).index();
       $(".product_tv_content_right>div").eq(product_tv_items).show().siblings().hide();
       $(".product_tv_head h2 ul li").eq(product_tv_items).children().addClass("product_tv_head_h2_ul_li_a");
       $(".product_tv_head h2 ul li").eq(product_tv_items).siblings().children().removeClass("product_tv_head_h2_ul_li_a")
   })




   // 智能 内容的左侧 活动效果
   $(".product_zhineng_content_left a").mouseover(function () {
       product_zhineng_content_left_index = $(this).index();
       $(".product_zhineng_content_left a").eq(product_zhineng_content_left_index).addClass("addshaow").siblings().removeClass("addshaow")
   })
   $(".product_zhineng_content_left a").mouseleave(function () {
       $(".product_zhineng_content_left a").removeClass("addshaow")
   })
   //智能 右侧 上下tab栏切换
   $(".product_zhineng_head h2 ul li:first").children().addClass("product_tv_head_h2_ul_li_a")
   $(".product_zhineng_head h2 ul li").mouseover(function () {
       product_zhineng_items = $(this).index();
       $(".product_zhineng_content_right>div").eq(product_zhineng_items).show().siblings().hide();
       $(".product_zhineng_head h2 ul li").eq(product_zhineng_items).children().addClass("product_tv_head_h2_ul_li_a");
       $(".product_zhineng_head h2 ul li").eq(product_zhineng_items).siblings().children().removeClass("product_tv_head_h2_ul_li_a")
   })


   // 搭配板块
   //  内容左侧
   $(".product_dapei_content_left a").mouseover(function () {
       product_dapei_content_left_index = $(this).index();
       $(".product_dapei_content_left a").eq(product_dapei_content_left_index).addClass("addshaow").siblings().removeClass("addshaow")
   })
   $(".product_dapei_content_left a").mouseleave(function () {
       $(".product_dapei_content_left a").removeClass("addshaow")
   })
   //  右侧 上下tab栏切换
   $(".product_dapei_head h2 ul li:first").children().addClass("product_tv_head_h2_ul_li_a")
   $(".product_dapei_head h2 ul li").mouseover(function () {
       product_dapei_items = $(this).index();
       $(".product_dapei_content_right>div").eq(product_dapei_items).show().siblings().hide();
       $(".product_dapei_head h2 ul li").eq(product_dapei_items).children().addClass("product_tv_head_h2_ul_li_a");
       $(".product_dapei_head h2 ul li").eq(product_dapei_items).siblings().children().removeClass("product_tv_head_h2_ul_li_a")
   })

   //配件板块
   //配件内容左侧
   $(".product_peijian_content_left a").mouseover(function () {
       product_peijian_content_left_index = $(this).index();
       $(".product_peijian_content_left a").eq(product_peijian_content_left_index).addClass("addshaow").siblings().removeClass("addshaow")
   })
   $(".product_peijian_content_left a").mouseleave(function () {
       $(".product_peijian_content_left a").removeClass("addshaow")
   })
   // 右侧上下tab栏切换
   $(".product_peijian_head h2 ul li:first").children().addClass("product_tv_head_h2_ul_li_a")
   $(".product_peijian_head h2 ul li").mouseover(function () {
       product_peijian_items = $(this).index();
       $(".product_peijian_content_right>div").eq(product_peijian_items).show().siblings().hide();
       $(".product_peijian_head h2 ul li").eq(product_peijian_items).children().addClass("product_tv_head_h2_ul_li_a");
       $(".product_peijian_head h2 ul li").eq(product_peijian_items).siblings().children().removeClass("product_tv_head_h2_ul_li_a")
   })

   //周边板块
   //周边内容左侧
   $(".product_zhoubian_content_left a").mouseover(function () {
       product_zhoubian_content_left_index = $(this).index();
       $(".product_zhoubian_content_left a").eq(product_zhoubian_content_left_index).addClass("addshaow").siblings().removeClass("addshaow")
   })
   $(".product_zhoubian_content_left a").mouseleave(function () {
       $(".product_zhoubian_content_left a").removeClass("addshaow")
   })
   //周边内容右侧  tab上下栏切换
   $(".product_zhoubian_head h2 ul li:first").children().addClass("product_tv_head_h2_ul_li_a")
   $(".product_zhoubian_head h2 ul li").mouseover(function () {
       product_zhoubian_items = $(this).index();
       $(".product_zhoubian_content_right>div").eq(product_zhoubian_items).show().siblings().hide();
       $(".product_zhoubian_head h2 ul li").eq(product_zhoubian_items).children().addClass("product_tv_head_h2_ul_li_a");
       $(".product_zhoubian_head h2 ul li").eq(product_zhoubian_items).siblings().children().removeClass("product_tv_head_h2_ul_li_a")
   })