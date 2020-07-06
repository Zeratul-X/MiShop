
$(window).load(function () {
    $.ajax({
        url: '../php/goodsList.php',
        dataType: 'json',
        type: 'get',
        data: {},
        async: true,
        success: (data) => {
            console.log(data);
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

