<?php
# Inclusão do arquivo de conexão com o bd.
include "conecta.php"; 

# Verifica se está setado o get do cliente
if(!isset($_GET["id"])){
  # Não foi setado o get do usuário. Redireciona par a index.
  header("location:index.php");exit;
}

# Recebe o código do cliente
$id= addslashes($_GET['id']);

# Consulta os dados do cliente no banco de dados.
$selecione= "SELECT * FROM `cliente` WHERE id='$id' LIMIT 1";
$querySelecione= mysqli_query($conect, $selecione);
# Verifica se achou o cliente no banco de dados.
$linhas = mysqli_num_rows($querySelecione);
if($linhas == 0){
  # Não achou o cliente. redireciona para a index.
  header("location:index.php");exit;
}

# Resgata do banco as informações do cliente
$array= mysqli_fetch_array($querySelecione);
$nome      = $array['nome'];
$sobrenome       = $array['sobrenome']; 
$idade  = $array['idade']; 
$senha = $array['senha']; 
$email    = $array['email'];
$senha    = $array['senha'];
?>

<!doctype html>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

<script src="js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="js/jquery.maskedinput.min.js"></script>

<!--AJAX DE TRATAMENTO-->
<script src="ajax.js"></script>

<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a href="index.php" class="btn btn-primary">PRINCIPAL</a>
    <a href="cadastro.php"style="margin: 0 15px;" class="btn btn-success">NOVO</button>
	<a href="rel_cliente.php" class="btn btn-danger">LISTA</a>
  </nav>
</div>
<nav class="navbar navbar-light">
  <span class="navbar-text">
   
  </span>
</nav>
<div class="container">
 <div class="row justify-content-md-center">
<form>
 <input type="hidden" id="id" value="<?php print $id;?>">
  <div class="form-group">
    <label for="inputAddress2">Nome</label>
    <input type="text" class="form-control obrigatorio" id="nome" placeholder="Nome" name="nome" value="<?php print $nome;?>">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sobre nome</label>
    <input type="text" class="form-control obrigatorio" id="sobrenome" placeholder="Sobre nome" name="sobrenome" value="<?php print $sobrenome;?>">
  </div>
  <div class="form-row">
	<div class="form-group col-md-8">
      <label for="">E-mail</label>
      <input type="email" class="form-control obrigatorio " id="email"  name="email" placeholder="nome@dominio.com" value="<?php print $email;?>" pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/">
    </div>
	<div class="form-group col-md-4">
      <label for="inputCity">Idade</label>
      <input type="text" class="form-control idade" id="idade" maxlength="4" placeholder="" name="idade" value="<?php print $idade;?>">
  </div>
  
    
  </div>
  <div class="form-row">
	<div class="form-group col-md-6">
      <label for="">Senha</label>
      <input type="password" class="form-control  " id="senha"  name="senha" placeholder="" value="<?php print $senha;?>" >
    </div>
	<div class="form-group col-md-6">
      <label for="inputCity">Confirmar Senha</label>
      <input type="password" class="form-control idade" id="confirmaSenha"  placeholder="" name="confirmaSenha" value="<?php print $senha;?>">
  </div>
  
    
  </div>
  <button type="button" class="btn btn-primary" id="editar">Salvar</button>
</form>
</div>
</div>



