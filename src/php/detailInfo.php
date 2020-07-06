<?php
    include "../php/header.php";
    include "../php/connection.php";

    $idstr=$_POST['idstr'];

    $sqlSelect="SELECT GOODSTYPE,GOODSCONTENT FROM GOODS WHERE $idstr";
    $resSelect=mysqli_query($link,$sqlSelect);
    $row=mysqli_fetch_all($resSelect);
    if($row){
        $tablename= $row[0][0];
        $goodsontent=$row[0][1];
        $sql="SELECT * FROM $tablename";
        $res = mysqli_query($link, $sql);
        $rows = mysqli_fetch_all($res);
        if ($rows) {
            array_push($rows, $tablename, $goodsontent);
            echo json_encode($rows);
        } else {
            $json = array("code" => 0, "content" => "商品不存在");
            echo json_encode($json);
        }

    }

?>