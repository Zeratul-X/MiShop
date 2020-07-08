<?php
include "./header.php";
include "./connection.php";

$username=$_POST['username'];

$sql="SELECT * FROM SHOPCAR WHERE USERID=(SELECT ID FROM USER WHERE USERNAME='$username') AND USERNAME='$username'";

$res = mysqli_query($link, $sql);
$rows = mysqli_fetch_all($res);
if($res->num_rows>0){
    echo json_encode($rows);
}else{
    $json=array('code'=>1,'content'=>'this users shop car is empty');
    echo json_encode($json);
}
?>