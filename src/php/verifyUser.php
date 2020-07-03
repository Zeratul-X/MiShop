<?php
    include "../php/header.php";
    include "../php/connection.php";

    $username=$_GET['username'];

    $sql="SELECT * FROM `USER` where `USERNAME`='$username'";

    $res=mysqli_query($link,$sql);
    $row = mysqli_fetch_assoc($res);
    if($row){
        $json=array('code'=>0,'content'=>'用户名已存在');
        echo json_encode($json);
    }else{
        $json = array('code' => 1, 'content' => '用户名不存在');
        echo json_encode($json);
    }

    mysqli_close($link);
?>