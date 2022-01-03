<?php
error_reporting(0);
//$conect= mysqli_connect("localhost","root","", "bd_cliente");
$conect= mysqli_connect("localhost", "root","", "bd_cliente");
if(!$conect){
	
	if(!mysqli_select_db($conect, "bd_cliente")){
		echo "Erro ao conectar com o banco de dados";exit;
	}
	//mysqli_set_charset("utf8");

}
?>