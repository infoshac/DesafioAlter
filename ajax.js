$(document).ready(function(){
	//NOVO CLIENTE
	$("#novo").click(function(){
		let podeSalvar = true;
		$(".obrigatorio").each(function(){
			if($.trim($(this).val())==""){
				podeSalvar = false;
				$(this).css("border-color", "#900");
			}else{
				$(this).css("border-color", "#ced4da");
			}
		});

		if(podeSalvar == false){
			alert("Campos em vermelho são obrigatórios");return false;
		}
		if($("#gridCheck").is(":checked") == false){
			alert("Marque não sou robô"); return false;

		}

		var id= $("#id").val(); 
		var nome= $("#nome").val(); 
		var sobrenome= $("#sobrenome").val(); 
		var idade= $("#idade").val(); 
		var email= $("#email").val(); 

		//verifica idade
		if(idade>=150){
			alert("Idade superior ao padrão permitido");return false;
		}
		//valida email
		if(validateEmail(email)==false){
			alert('Email invalido'); return false;
		}
		
		$.ajax({
			url:"tratar.php",
			type:"POST",
			data:{
				ativa:"novo",
				nome:nome,
				sobrenome:sobrenome,
				idade:idade,
				email:email
			}
		}).done(function(response){
			if(response >0){
				alert("Cadastro efeturado com sucesso");
				location.href="rel_cliente.php";
			}
		});
	});
	//EDITAR CLIENTE	
		$("#editar").click(function(){
			
		let podeSalvar = true;
		
		$(".obrigatorio").each(function(){
			if($.trim($(this).val())==""){
				podeSalvar = false;
				$(this).css("border-color", "#900");
			}else{
				$(this).css("border-color", "#ced4da");
			}
		});

		if(podeSalvar == false){
			alert("Campos em vermelho são obrigatórios");return false;
		}
		var id= $("#id").val(); 
		var nome= $("#nome").val(); 
		var sobrenome= $("#sobrenome").val(); 
		var idade= $("#idade").val(); 
		var email= $("#email").val(); 
		var senha= $("#senha").val(); 
		var confirmaSenha= $("#confirmaSenha").val(); 
		//confirma Senha

		if(senha != confirmaSenha){
			alert("Senhas não correspondem, verifique por favor");return false;
		}

		//verifica idade
		if(idade>=150){
			alert("Idade superior ao padrão permitido");return false;
		}
		//valida email
		if(validateEmail(email)==false){
			alert('Email invalido'); return false;
		}
		/*
		###### Se fosse por php utilizaria a seguinte sintaxe em tratar recebendo o post na variavel email#####
		
		function validateEmail($email) {
    
			if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "{$email}: A valid email"."<br>";
    		}
		else {
			echo "{$email}: Not a valid email"."<br>";
			}
		}
		
		########################################################
		*/

		$.ajax({
			url:"tratar.php",
			type:"POST",
			data:{
				ativa:"altera",
				id: id,
				nome:nome,
				sobrenome:sobrenome,
				idade:idade,
				email:email,
				senha:senha
			}
		}).done(function(response){
			if(response >0){
				alert("Atualização realizada com sucesso");
				location.href="rel_cliente.php";
			}
		});		
	});
	
	function validateEmail(email) {
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	  }
	
	
	
		
});
