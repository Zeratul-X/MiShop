<?php
include "./header.php";
include "./connection.php";

$idstr=$_POST['idstr'];

$sql="DELETE FROM SHOPCAR WHERE ID IN ($idstr)";
$res = mysqli_query($link, $sql);
if($res){
    $json = array('code' => 0, 'content' => '删除成功');
    echo json_encode($json);
}else{
    $json=array('code'=>1,'content'=>'删除失败');
    echo json_encode($json);
}

?>