<?php
    include "../php/header.php";
    include "../php/connection.php";
    $typestr=$_POST['typestr'];
    $sql="SELECT * FROM GOODS WHERE $typestr";
    $res=mysqli_query($link,$sql);
    $rows = mysqli_fetch_all($res, MYSQLI_ASSOC);
    if($rows){
        echo json_encode($rows);
    }else{
        $json=array("code"=>0,"content"=>"商品不存在");
        echo json_encode($json);
    }

    mysqli_close($link);
?>