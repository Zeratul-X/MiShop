<?php
    include "../php/header.php";
    include "../php/connection.php";

    $sql="SELECT * FROM GOODS WHERE TYPE=1";
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