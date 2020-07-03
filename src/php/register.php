<?php

    include "./header.php";
    include "./connection.php";

    $username=$_POST['username'];
    $password=$_POST['password'];
    $tel=$_POST['tel'];
    //是否验证成功
    $isVerify= $_POST["isVerify"];
    //是否存在username
    $hasName= $_POST["hasName"];
    if($isVerify==0){
        if($hasName==0){
            $sql = "INSERT INTO `USER` VALUES(null,'$username','$password','$tel')";
            $res = mysqli_query($link, $sql);
            if ($res) {

                $json = array('code' => 0,  'content' => '注册成功');
                echo json_encode($json);
            } else {
                $json = array('code' => 1,  'content' => '注册失败');
                echo json_encode($json);
            }
        }else{
            $json = array('code' => 2,  'content' => '注册失败，用户名已存在');
            echo json_encode($json);
        }
    }else{
        $json = array('code' => 3,  'content' => '验证失败，请重新验证');
        echo json_encode($json);
    }

    mysqli_close($link);
?>