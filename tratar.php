<?php
# Código de tratamento 

# Inclusão do arquivo de conexão com o bd.
include "conecta.php"; 

//COMANDO DE CONDIÇÃO
$ativa 	   = addslashes($_POST['ativa']); 
$id        = addslashes($_POST['id']); 
$nome      = addslashes($_POST['nome']); 
$sobrenome	   = addslashes($_POST['sobrenome']); 
$email  = addslashes($_POST['email']); 
$idade = addslashes($_POST['idade']);
$Recebesenha = addslashes($_POST['senha']);
if($Recebesenha!=''){
	$senha = password_hash($_POST['senha'], PASSWORD_DEFAULT);
}else{
	$senha ='';
}


//CADASTRO
if($ativa=='novo'){
	$inseriCliente = "INSERT INTO cliente(nome, sobrenome, idade, email) VALUES 
	('$nome', 
	'$sobrenome', 
	'$idade', 
	'$email')";
	$queryinseri= mysqli_query($conect, $inseriCliente) or die(mysqli_error());
	echo 1; exit;
	
} 

//EDITAR
if($ativa=='altera'){
	//print "editar"; die();
	//print $id; die();
	$atualizaCliente= "UPDATE cliente SET nome='$nome',sobrenome='$sobrenome',idade='$idade',email='$email', senha='$senha' WHERE id= '$id'";
	
	$queryatualiza= mysqli_query($conect, $atualizaCliente);
	if(queryatualiza){
		echo 1;exit;
	}
}

?>