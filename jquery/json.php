<?php
$teste= $_POST['teste'];
print "vamos";
die();

$con= mysql_connect("127.0.0.1",'root','');
mysql_select_db('bd_sistema');

$selecione= "SELECT * FROM tbl_cliente WHERE id_cliente= '911' ";
			$querySelecione= mysql_query($selecione);
			while($array= mysql_fetch_array($querySelecione)){
			
			$id_cliente= $array['id_cliente'];
			$nome_cliente= $array['nome_cliente'];
			$tipo_cliente= $array['tipo_cliente'];
			$telefone_cliente= $array['telefone_cliente'];
			
			}

// array com referente a 3 pessoas




    $var = Array(
    array(
        "id"=>$id_cliente,
        "nome"=>$nome_cliente,
        "tipo"=>$tipo_cliente
    
    ));
// convertemos em json e colocamos na tela
    echo json_encode($var);