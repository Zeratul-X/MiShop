// 获取当前cookie或者传过来的参数
var cookieArr = $.cookie();
var unameFromCookie = cookieArr['uname'];

var url = location.search; //?username=""
var urlArr = url.split('?'); //[" ","username=''"]
var unameStr = urlArr[1].split('='); //[username,""]
var unameFromUrl = unameStr[1];
var selectSum = 0;
var allprice = 0;
//checkbox是否点击All
var ischeckedAll = false;
var ischeckedSingle = false;
//编辑按钮是否点击
var allpriceArr = Array();
var isedit = false;
$(window).load(function () {
    var username = unameFromUrl || unameFromCookie;
    $.ajax({
        url: '../php/checkShopCar.php',
        type: 'post',
        dataType: 'json',
        data: {
            'username': username
        },
        success: (data) => {
            var myTemplate = template('goodsTemplate', {
                data: data
            });
            $('#goodsInfo').html(myTemplate);
            //列表内各种操作-->全选，数量增加/减少，小计动态变化，编辑，商品总数，已选择数量，删除选中商品,合计等
            actionsInTable(data);
        }
    });
})

function actionsInTable(data) {
    //全选事件处理
    $('a.check-label.check-all').on('click', function () {
        if (!ischeckedAll) {
            $('a.check-label').addClass('checked');
            ischeckedAll = true;
            selectSum = data.length;
            $('span.sum-selected').html(selectSum);
            getAllPriceWhenCheckAll(data);
            $('span.bill-price').html('￥' + allprice.toFixed(2));
        } else {
            $('a.check-label').removeClass('checked');
            ischeckedAll = false;
            selectSum = 0;
            $('span.sum-selected').html(selectSum);
            allprice = 0;
            $('span.bill-price').html('￥' + allprice.toFixed(2));
        }

    });

    //编辑按钮事件处理
    $('td.edit-area>span.edit').on('click', function () {
        if (!isedit) {
            $('td.edit-area>span.edit').text('完成');
            $('td.goods-col-ctrl>span').show().siblings().fadeIn(100);
            isedit = true;
        } else {
            $('td.edit-area>span.edit').text('编辑');
            $('td.goods-col-ctrl>span').show().siblings().fadeOut(100);
            isedit = false;
        }
    })
    for (var i = 0; i < data.length; i++) {
        var currentid = parseInt(data[i][0]);
        allpriceArr.push(data[i][0]);
        //数量加事件处理
        $('#plus' + data[i][0]).on('click', {
            currentid: currentid
        }, function (event) {
            $('#input' + event.data.currentid).val(parseInt($('#input' + event.data.currentid).val()) + 1);
            var number = parseInt($('#input' + event.data.currentid).val());
            var singleprice = parseFloat($('#oneprice' + event.data.currentid).html());
            var totalprice = number * singleprice;
            allprice = totalprice;
            $('#sumprice' + event.data.currentid).html(totalprice.toFixed(2) + '元');
            updateDataToDataBase(number, totalprice, event.data.currentid);
        });

        //数量减事件处理
        $('#minus' + data[i][0]).on('click', {
            currentid: currentid
        }, function (event) {
            //数量减少
            $('#input' + event.data.currentid).val(parseInt($('#input' + event.data.currentid).val()) - 1);
            //小计计算
            var number = parseInt($('#input' + event.data.currentid).val());
            var singleprice = parseFloat($('#oneprice' + event.data.currentid).html());
            var totalprice = number * singleprice;
            allprice = totalprice;
            $('#sumprice' + event.data.currentid).html(totalprice.toFixed(2) + '元');
            updateDataToDataBase(number, totalprice, event.data.currentid);

            if (parseInt($('#input' + event.data.currentid).val()) < 1) {
                var res = confirm('是否删除该商品？');
                if (res) {
                    $.ajax({
                        url: '../php/deleteSingleShopCar.php',
                        type: 'post',
                        dataType: 'json',
                        data: {
                            'id': event.data.currentid
                        },
                        success: (delRes) => {
                            console.log(delRes);
                        }
                    });
                    location.reload();
                } else {
                    $('#input' + event.data.currentid).val(parseInt($('#input' + event.data.currentid).val()) + 1);
                     $('#sumprice' + event.data.currentid).html(singleprice.toFixed(2) + '元');
                    updateDataToDataBase(1, singleprice, event.data.currentid);
                }
            }
        });
        //单个checkbox选中时，下方总价格变化
        $('a#checksingle' + data[i][0] + '.check-label.check-product').on('click', {
            currentid: currentid,
            index: i
        }, function (event) {
            if (!ischeckedAll) {
                $('a#checksingle' + event.data.currentid + '.check-label').addClass('checked');
                ischeckedAll = true;
                selectSum++;
                allprice = parseFloat($('#sumprice' + event.data.currentid).html());
                $('span.sum-selected').html(selectSum);
                $('span.bill-price').html('￥' + allprice.toFixed(2));
            } else {
                $('a#checksingle' + event.data.currentid + '.check-label').removeClass('checked');
                ischeckedAll = false;
                selectSum--;
                allprice = 0;
                $('span.sum-selected').html(selectSum);
                $('span.bill-price').html('￥' + allprice.toFixed(2));
            }
        });
        //左下角显示共多少件商品
        $('span.sum').html(data.length);
        $('span.sum-selected').html(selectSum);
        $('span.bill-price').html('￥' + allprice.toFixed(2));


    }
            console.log(allpriceArr);

}

function updateDataToDataBase(number, totalprice,id) {
     $.ajax({
         url: '../php/updateToShopCar.php',
         type: 'post',
         dataType: 'json',
         data: {
             'number': number,
             'totalPrice': totalprice,
             'id': id
         },
         success: (result) => {
             console.log(result);
         }
     });
}
function getAllPriceWhenCheckAll(data) {
    for (var i = 0; i < data.length; i++){
        allprice += parseFloat(data[i][8]);
    }
}