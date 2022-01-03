<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

<script src="js/jquery-1.11.1.min.js"></script>
<script type="text/javascript" src="js/jquery.maskedinput.min.js"></script>
<!--AJAX DE TRATAMENTO-->
<script src="ajax.js"></script>

<div class="container">
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
	<a href="rel_cliente.php" class="btn btn-primary">PRINCIPAL</a>
    <button type="button" style="margin: 0 15px;" class="btn btn-success">NOVO</button>
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
 
<div class="form-group">
    <label for="inputAddress2">Nome</label>
    <input type="text" class="form-control obrigatorio" id="nome" placeholder="Nome" name="nome" value="">
  </div>
  <div class="form-group">
    <label for="inputAddress2">Sobre nome</label>
    <input type="text" class="form-control obrigatorio" id="sobrenome" placeholder="Sobre nome" name="sobrenome" value="">
  </div>
  <div class="form-row">
	<div class="form-group col-md-8">
      <label for="">E-mail</label>
      <input type="email" class="form-control " id="email"  name="email" placeholder="nome@dominio.com" value="" required>
    </div>
	<div class="form-group col-md-4">
      <label for="inputCity">Idade</label>
      <input type="text " class="form-control obrigatorio" id="idade" maxlength="4"  name="idade" value="">
    </div>


  <div class="form-group">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="gridCheck">
      <label class="form-check-label" for="gridCheck">
        Não sou um robô
      </label>
    </div>
  </div>
  </div>
  <button type="button" class="btn btn-primary" id="novo">Cadastrar</button>
</form>
</div>
</div>