<?php
# Inclusão do arquivo de conexão com o bd.
include "conecta.php"; 

# Verifica se está setado o get do cliente
if(!isset($_GET["id"])){
  # Não foi setado o get do usuário. Redireciona par a index.
  header("location:index.php");exit;
}

$id= addslashes($_GET['id']);
$delete = "DELETE FROM cliente WHERE id = '$id'";
$queryDelete= mysqli_query($conect, $delete);	
header ('location:rel_cliente.php'); exit;
?>