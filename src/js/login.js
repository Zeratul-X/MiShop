var isVerify = 0;
/**
 *验证码
 */
$('#verifyPanel').codeVerify({
    type: 1,
    width: '200px',
    height: '50px',
    fontSize: '30px',
    codeLength: 6,
    btnId: 'loginBtn',
    ready: function () {},
    success: function () {
        isVerify=0;
        return $('#verifySpan').html('验证成功');

    },
    error: function () {
        isVerify = 1;
        return $('#verifySpan').html('验证失败');

    }
});
/**
 * 登陆
 */
$('#loginBtn').click(function () {
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        url: '../php/login.php',
        type: 'post',
        data: {
            'username': username,
            'password': password,
            'isVerify': isVerify
        },
        dataType: 'json',
        success: (data) => {
            if (data.code == 0) {
                window.location.href = '../pages/index.html';
            }
        }
    });
});

  /**
   * 懒加载
   */
  lazyLoadInit({
      offsetBottom: 0,
      offsetTopm: 0,
      showTime: 1100,
  });