var url = location.search; //?id=1
var urlArr = url.split('?'); //[" ","id=1"]
var idstr = ""; //"id=1"
var colorArr = [];
var chooseContent = Array();

for (var i = 0; i < urlArr.length; i++) {
    if (urlArr[i]) {
        idstr = urlArr[i].toString();
    }
}
var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    loop: false, // 循环模式选项
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
});
$(window).load(function () {
    $.ajax({
        url: '../php/detailInfo.php',
        type: 'post',
        dataType: 'json',
        async: false,
        data: {
            'idstr': idstr
        },
        success: (data) => {

            //加载页面先显示第一个数据的样式
            $('#img1').attr('src', data[1][5]);
            $('#img2').attr('src', data[1][6]);
            $('#img3').attr('src', data[1][7]);
            $('#img4').attr('src', data[1][8]);

            loadData(data);
        }
    });
    mySwiper.init();
});
$('#goodsColor').html("");

function loadData(data) {
    //初始化涉及到静态显示信息的地方
    $('#goodstitle').html(data[data.length - 2]);
    $('#goodsName').html(data[data.length - 2]);
    $('#goodsContent').html(data[data.length - 1]);
    $('#goodsPrice').html(data[0][3] + '元');
    $('#singleContent').html(data[data.length - 2] + " 全网通版 " + data[0][2] + " " + data[0][1]);
    $('#singleprice').html(data[0][3] + " 元");
    $('#total').html("总计：" + data[0][3] + " 元");
    for (var i = 0; i < 3; i++) {
        if (i % 2 == 0) {
            $('#goodsEdition').append("<div class='banben fl' style='dlsplay:inline;' id='edition" + i + "'><a><span>全网通版 " + data[i][2] + "</span><span>" + data[i][3] + "元</span></a></div>");
        } else {
            $('#goodsEdition').append("<div class='banben fr' style='dlsplay:inline;' id='edition" + i + "'><a><span>全网通版 " + data[i][2] + "</span><span>" + data[i][3] + "元</span></a></div>");
        }
    }
    //循环data
    for (var i = 0; i < data.length - 2; i++) {
        //将不同的颜色存入colorArr中
        if (colorArr.indexOf(data[i][1]) == -1) {
            colorArr.push(data[i][1]);
        }

    }
    //将不同的颜色模块显示在页面上
    for (var j = 0; j < colorArr.length; j++) {
        if (j % 2 == 0) {
            $('#goodsColor').append("<div class='banben fl' id='color" + j + "'><a></span><span class ='yanse' id='colorName'>" + colorArr[j] + "</span></a></div>");
        } else {
            $('#goodsColor').append("<div class='banben fr' id='color" + j + "'><a><span class ='yanse' id='colorName'>" + colorArr[j] + "</span></a></div>");
        }

        $('#color' + j).bind('click', {
                index: j,
                color: colorArr[j]
            },
            function (event) {
                var singleObj = new Array();
                var color = event.data.color;
                for (var i = 0; i < data.length - 2; i++) {
                    if (data[i][1] == color) {
                        singleObj[i] = data[i];
                    }
                }
                //swiper图片更改
                var arr = Object.keys(singleObj);
                $('#img1').attr('src', singleObj[arr[0]][5]);
                $('#img2').attr('src', singleObj[arr[0]][6]);
                $('#img3').attr('src', singleObj[arr[0]][7]);
                $('#img4').attr('src', singleObj[arr[0]][8]);
                mySwiper.init();

                //循环去掉空值后的singleObj并设置版本
                singleObj = singleObj.filter(item => item);
                $('#goodsEdition').html("");
                for (var j = 0; j < singleObj.length; j++) {
                    if (j % 2 == 0) {
                        $('#goodsPrice').html(singleObj[0][3] + '元');
                        $('#goodsEdition').append("<div class='banben fl' style='dlsplay:inline;' id='edition" + j + "'><a><span>全网通版 " + singleObj[j][2] + "</span><span>" + singleObj[j][3] + "元</span></a></div>");
                    } else {
                        $('#goodsPrice').html(singleObj[0][3] + '元');
                        $('#goodsEdition').append("<div class='banben fr' style='dlsplay:inline;' id='edition" + j + "'><a><span>全网通版 " + singleObj[j][2] + "</span><span>" + singleObj[j][3] + "元</span></a></div>");
                    }
                    $('#edition' + j).bind('click', {
                        index: j
                    }, function (event) {
                        //设置数据
                        $('#goodsPrice').html(singleObj[event.data.index][3] + '元');
                        $('#singleContent').html(data[data.length - 2] + " 全网通版 " + singleObj[event.data.index][2] + " " + singleObj[event.data.index][1]);
                        $('#singleprice').html(singleObj[event.data.index][3] + " 元");
                        $('#total').html("总计：" + singleObj[event.data.index][3] + " 元");
                        //goodcontent
                        chooseContent['goodsId'] = singleObj[event.data.index][9];
                        chooseContent['goodsName'] = data[data.length - 2];
                        chooseContent['goodsEdition'] = singleObj[event.data.index][2];
                        chooseContent['goodsColor'] = singleObj[event.data.index][1];
                        chooseContent['singlePrice'] = singleObj[event.data.index][3];
                        chooseContent['imgUrl'] = singleObj[event.data.index][8];
                    });
                }

            });

    }

}

$('#addToCar').on('click', function () {
    var cookieArr = $.cookie();
    var username = cookieArr['uname'];
    chooseContent['username'] = username;
    //先查当前登录用户下所有购物车中的商品
    if (chooseContent['username']) {
        $.ajax({
            url: '../php/checkShopCar.php',
            type: 'post',
            dataType: 'json',
            data: {
                'username': chooseContent['username'],
            },
            success: (data) => {
                console.log(data);
                if (data.code == 1 || data.code==0) {
                    //说明当前用户的购物车没有商品信息
                    //直接将该商品insert into
                    insertDataToDataBase(chooseContent);
                    alert('添加购物车成功');
                } else {
                    var isSingle = false;
                    var insertOnce = false;
                    //说明当前用户下的购物车存在商品信息
                    for (var i = 0; i < data.length; i++){
                        if (
                            data[i][1] == chooseContent['goodsId'] &&
                             data[i][4] == chooseContent['username'] &&
                             data[i][6] == chooseContent['goodsEdition'] &&
                             data[i][7] == chooseContent['goodsColor']
                        ) {
                            isSingle = true;
                            alert("当前选中的商品已存在购物车中，请前往购物车查看");
                            return;
                        } else {
                            if (!isSingle) {
                                insertOnce = true;
                            } else {
                                insertOnce = false;
                            }
                         }
                    }
                    if (insertOnce) {
                        insertDataToDataBase(chooseContent);
                    }

                }
            }
        });
    }
});

function insertDataToDataBase(chooseContent) {
    chooseContent['totalPrice'] = chooseContent['singlePrice'];
    chooseContent['number'] = 1;
    console.log(chooseContent);
    $.ajax({
        url:'../php/addToShopCarNoInfo.php',
        type: 'post',
        dataType: 'json',
        data: {
            'goodsId': chooseContent['goodsId'],
            'goodsName': chooseContent['goodsName'],
            'userName': chooseContent['username'],
            'number': chooseContent['number'],
            'goodsEdition': chooseContent['goodsEdition'],
            'goodsColor': chooseContent['goodsColor'],
            'totalPrice': chooseContent['totalPrice'],
            'singlePrice': chooseContent['singlePrice'],
            'imgUrl': chooseContent['imgUrl']
        },
        success: (data)=>{
            console.log(data);

        }
    });

}


