<?php
include "./header.php";
include "./connection.php";

$number=$_POST['number'];
$totalPrice = $_POST['totalPrice'];
$id = $_POST['id'];

$sql="UPDATE SHOPCAR SET `NUMBER`=$number,TOTALPRICE=$totalPrice WHERE ID=$id";
$res=mysqli_query($link,$sql);
    if($res)
    {
        $json = array('code' => 0, 'content' => 'update success');
        echo json_encode($json);
    }else{
        $json = array('code' => 1, 'content' => 'update defeated');
        echo json_encode($json);
    }

?>