<?php
include "./header.php";
include "./connection.php";

$id=$_POST['id'];

$sql="DELETE FROM SHOPCAR WHERE ID=$id";
$res = mysqli_query($link, $sql);
if($res){
    $json = array('code' => 0, 'content' => '删除成功');
    echo json_encode($rows);
}else{
    $json=array('code'=>1,'content'=>'删除失败');
    echo json_encode($json);
}
