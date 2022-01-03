<?php
# Inclusão do arquivo de conexão com o bd.
require_once "conecta.php"; 
//$conect= mysqli_connect("localhost", "root","","bd_cliente");
# Busca todos os clientes
$selecione = "SELECT * FROM `cliente` ORDER BY nome ASC";
$querySelecione= mysqli_query($conect, $selecione);
$lin = mysqli_num_rows(($querySelecione)); 

# Recupera as informações de todos os clientes para listar numa tabela
while($array= mysqli_fetch_array($querySelecione)){

    $dados .='
            <tr>
                <td>'.$array["nome"].'</td>
                <td>'.$array["sobrenome"].'</td>
                <td>'.$array["email"].'</td>
                <td>'.$array["idade"].'</td>  
                <td>
                    <input type="hidden" value="'.$array["id"].'">
                    <a href="#" class="remover" id="'.$array["id"].'">
                        <img src="deletar.png" title="Deletar" style="margin: 0 30px;">
                    </a>
                    <a href="editar.php?id='.$array["id"].'"><img src="editar.png" boder="0" title="editar"></a></td>
            </tr>';
    }         
?>
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="DataTables/datatables.min.css"/>
 
<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="DataTables/datatables.min.js"></script>

<!--SCRIPT EXCLUIR-->
<script language="Javascript" src="js/rel_cliente.js"></script> 


<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a href="index.php" class="btn btn-primary">PRINCIPAL</a>
    <a href="cadastro.php"  style="margin: 0 15px;" class="btn btn-success">NOVO</a>
	<a href="rel_cliente.php"  class="btn btn-danger">LISTA</a>
  </nav>
</div>
<nav class="navbar navbar-light">
  <span class="navbar-text">
   
  </span>
</nav>

<div class="container">
<div class="row justify-content-md-center">
<table id="example" class="display" style="width:100%">
        <thead>
            <tr>
                <th>Nome</th>
                <th>Sobre Nome</th>
                <th>Email</th>
                <th>Idade</th>
				<th>Ação</th>
            </tr>
        </thead>
        <tbody>
        	<?php echo $dados?>
			
        </tbody>
        <tfoot>
            <tr>
            <th>Nome</th>
                <th>Sobre Nome</th>
                <th>Email</th>
                <th>Idade</th>
				<th>Ação</th>
            </tr>
        </tfoot>
    </table>
</div>
</div>