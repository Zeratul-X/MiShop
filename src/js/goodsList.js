var url = location.search; //?id=1
var urlArr = url.split('?'); //[" ","id=1"]
var typestr = ""; //"id=1"
var colorArr = [];

for (var i = 0; i < urlArr.length; i++) {
    if (urlArr[i]) {
        typestr = urlArr[i].toString();
    }
}


$(window).load(function () {
    $.ajax({
        url: '../php/goodsList.php',
        dataType: 'json',
        type: 'post',
        data: {
            'typestr': typestr
        },
        async: true,
        success: (data) => {
            var num = Math.floor(data.length / 5);
            var remianer = data.length % 5;
            data['num'] = num;
            data['remianer'] = remianer;
            var html = template("list", {
                data: data
            });
            //html片段加入页面
            $("#goodsList").html(html);
            itemclick(data);
            //table内按钮操作逻辑
        }
    });
});
function itemclick(data) {
    for (var i = 0; i < data.length; i++) {
        $('#item' + data[i].id).bind('click', {
            index: data[i].id
        }, clickHandler);

    }
    function clickHandler(event) {
        window.location.href = "../pages/detailInfo.html?id=" + event.data.index;
    }
}

