<?php
    include "../php/header.php";
    include "../php/connection.php";

    $username=$_POST['username'];
    $password=$_POST['password'];
    $isVerify=$_POST['isVerify'];

if ($isVerify == 0) {
    $sql="SELECT * FROM `USER` WHERE `USERNAME`='$username' AND `PASSWORD`='$password'";
    $res=mysqli_query($link,$sql);
    $row=mysqli_fetch_all($res,MYSQLI_ASSOC);

        if($row){
            setcookie('uname', $username, time() + 60 * 60,'/');
            $json = array('code' => 0, 'uname' => $username, 'content' => '登陆成功');
            echo json_encode($json);
        } else {
            $json = array('code' => 1, 'content' => '登陆失败');
            echo json_encode($json);
        }
    }else{
        $json = array('code' => 2, 'content' => '验证失败，请重新输入验证码');
        echo json_encode($json);
    }
    mysqli_close($link);

?>