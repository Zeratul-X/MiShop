/**
 *ajax验证用户名是否在数据库中存在
 */
var isVerify = 0;
var hasName = 0;
$('#name').on('keyup', function () {
    var username = $('#name').val();
    $.get({
        url: '../php/verifyUser.php',
        data: {
            'username': username
        },
        success: function (data) {
            var json = JSON.parse(data);
            if (json.code == 0) {
                hasName = 0;
                $('#nameSpan').html('抱歉用户名已存在，请重新输入');
            } else {
                hasName = 1;
                $('#nameSpan').html('恭喜，用户名可用');
            }
        },
    });
})
/**
 *验证密码是否大于6位
 */
$('#pass').on('keyup', function () {
    if ($('#pass').val().length >= 6) {
        $('#passSpan').html('');
    } else {
        $('#passSpan').html('密码长度必须大于6');
    }
})
/**
 *验证两次输入密码是否一致
 */
$('#repass').on('keyup', function () {
    var passVal = $('#pass').val();
    var repassVal = $('#repass').val();
    if (passVal.length <= repassVal.length) {
        if (passVal == repassVal) {
            $('#repassSpan').html('');
        } else {
            $('#repassSpan').html('验证成功！');
        }
    } else {
        $('#repassSpan').html('两次输入密码不一致，请检查重新输入！');
    }
})
/**
 *验证码
 */
$('#verifyPanel').codeVerify({
    type: 1,
    width: '200px',
    height: '50px',
    fontSize: '30px',
    codeLength: 6,
    btnId: 'registerBtn',
    ready: function () {},
    success: function () {
        isVerify = 0;
        return $('#verifySpan').html("验证成功");
    },
    error: function () {
        isVerify = 1;
        return $('#verifySpan').html("验证失败");
    }

});

/**
 * ajax注册
 */
$('#registerBtn').click(function(){
    var username = $('#name').val();
    var password = $('#pass').val();
    var tel = $('#tel').val();
    $.ajax({
        url: 'http://localhost/MiShop/src/php/register.php',
        type: 'post',
        dataType: 'json',
        data: {
            'username': username,
            'password': password,
            'tel': tel,
            'isVerify': isVerify,
            'hasName': hasName
        },
        success: (data) => {
            console.log(data);

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