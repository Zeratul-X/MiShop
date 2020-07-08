<?php
include "./header.php";
include "./connection.php";

$goodsId = $_POST['goodsId'];
$goodsName = $_POST['goodsName'];
$userName=$_POST['userName'];
$number = $_POST['number'];
$goodsEdition = $_POST['goodsEdition'];
$goodsColor = $_POST['goodsColor'];
$totalPrice=$_POST['totalPrice'];
$singlePrice = $_POST['singlePrice'];
$imgUrl=$_POST['imgUrl'];

$sql="INSERT INTO SHOPCAR VALUES(null,$goodsId,'$goodsName',(SELECT ID FROM USER WHERE USERNAME='$userName'),'$userName',$number,'$goodsEdition','$goodsColor',$totalPrice,$singlePrice,'$imgUrl')";

$res=mysqli_query($link,$sql);
if($res){
    $json=array('code'=>0,'content'=>'insert success');
    echo json_encode($json);
}else{
    $json = array('code' =>1, 'content' => 'insert failed');
    echo json_encode($json);
}
