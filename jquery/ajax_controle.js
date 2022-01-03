$(document).ready(function(){
	$("#cadastrar_entrada_matrial").click(function(){	
		//alert('opa'); return false;
	//JQUERY ENTRADA MATERIAL
		
		//var id_entrada_material= $("#id_entrada_material").val(); 
		var idMaterial_entrada_material= $("#idMaterial_entrada_material").val(); 
		var idEstoque_entrada_material= $("#idEstoque_entrada_material").val(); 
		var opm_entrada_material= $("#opm_entrada_material").val(); 
		var quantidade_entrada_material= $("#quantidade_entrada_material").val(); 
		var data_entrada_material= $("#data_entrada_material").val(); 
//inicio novos
		var tipo_entrada_material= $("#tipo_entrada_material").val();  	
		var id_siga_entrada_material= $("#id_siga_entrada_material").val(); 
		var nomeMaterial_entrada_material= $("#nomeMaterial_entrada_material").val(); 
		var nomeFantasiaMaterial_entrada_material= $("#nomeFantasiaMaterial_entrada_material").val(); 
		var precoMaterial_entrada_material= $("#precoMaterial_entrada_material").val(); 
		var numero_lote_entrada_material= $("#numero_lote_entrada_material").val(); 
		var validade_material_entrada_material= $("#validade_material_entrada_material").val(); 
		var empresa_entrada_material= $("#empresa_entrada_material").val(); 
		var numero_contrato_entrada_material= $("#numero_contrato_entrada_material").val(); 
		var especialidade_entrada_material= $("#especialidade_entrada_material").val(); 
		var localizacao_entrada_material= $("#localizacao_entrada_material").val(); 
// fim novos
		$.post("processos/tratar_controle.php",{ativa:"cadastrar_entrada_matrial",
		//id_entrada_material:id_entrada_material, 
		idMaterial_entrada_material:idMaterial_entrada_material, 
		idEstoque_entrada_material:idEstoque_entrada_material, 
		opm_entrada_material:opm_entrada_material, 
		quantidade_entrada_material:quantidade_entrada_material, 
		data_entrada_material:data_entrada_material, 
		tipo_entrada_material:tipo_entrada_material,  	
		id_siga_entrada_material:id_siga_entrada_material, 
		nomeMaterial_entrada_material:nomeMaterial_entrada_material, 
		nomeFantasiaMaterial_entrada_material:nomeFantasiaMaterial_entrada_material, 
		precoMaterial_entrada_material:precoMaterial_entrada_material, 
		numero_lote_entrada_material:numero_lote_entrada_material, 
		validade_material_entrada_material:validade_material_entrada_material, 
		empresa_entrada_material:empresa_entrada_material, 
		numero_contrato_entrada_material:numero_contrato_entrada_material, 
		especialidade_entrada_material:especialidade_entrada_material, 
		localizacao_entrada_material:localizacao_entrada_material},function(retorno){
			//alert(retorno);return false;
			if(retorno='entrada_cadastrada'){
				alert("Entrada de material cadastrada com sucesso!");

				window.location="index.php?page=entrade_material_fe";
			}


		}) 
	})	



$("#id_siga_saida_material").click(function(){
	
	
})

$("#cadastrar_saida_matrial").click(function(){	

	//alert("opa"); return false;
var	id_siga_saida_material= $("#id_siga_saida_material").val();

var id_saida_material= $("#id_saida_material").val(); 
var idMaterial_saida_material= $("#idMaterial_saida_material").val(); 
var idEstoque_saida_material= $("#idEstoque_saida_material").val(); 
var opm_saida_material= $("#opm_saida_material").val(); 
var quantidade_saida_material= $("#quantidade_saida_material").val(); 
var data_saida_material= $("#data_saida_material").val(); 
var data_entrada_material= $("#data_entrada_material").val();
var lote_saida_material= $("#lote_saida_material :selected").text();
//var tipo_saida_material= $("#tipo_saida_material").val();
var tipo_saida_material= $('input:radio[name=tipo_saida_material]:checked').val(); 
//alert(tipo_saida_material); return false; 
var idLote_saida_material= $("#lote_saida_material").val();   
$.post("processos/tratar_controle.php",{ativa:"cadastrar_saida_matrial",
id_saida_material:id_saida_material, 
idMaterial_saida_material:idMaterial_saida_material, 
idEstoque_saida_material:idEstoque_saida_material, 
opm_saida_material:opm_saida_material,
quantidade_saida_material:quantidade_saida_material, 
data_saida_material:data_saida_material,
data_entrada_material:data_entrada_material, 
lote_saida_material:lote_saida_material,
tipo_saida_material:tipo_saida_material,
idLote_saida_material:idLote_saida_material,
id_siga_saida_material:id_siga_saida_material},function(retorno){

			alert(retorno);return false;
			/*
			
				if(retorno='cadastrar_saida_matrial'){
				alert("Retirada de material concluida com sucesso!");		
				window.location="index.php?page=cadastro_material_fe";
			}*/

		})
})


	$("#cadastrar_matrial").click(function(){			
		// JQUERY CADASTRO MATERIAL 
		//var id_material= $("#id_materia").val(); 		
		var codigo_siga_material= $("#codigo_siga_material").val(); 
		var nome_material= $("#nome_material").val(); 
		var fantasia_material= $("#fantasia_material").val(); 
		var cod_produto= $("#cod_produto").val(); 

		$.post("processos/tratar_controle.php",{ativa:"cadastrar_matrial",
		codigo_siga_material:codigo_siga_material,
		nome_material:nome_material,
		fantasia_material:fantasia_material,
		cod_produto:cod_produto},function(retorno){
			//alert(retorno);return false;
				if(retorno='cadastro_material'){
				alert("Entrada de material cadastrada com sucesso!");

				window.location="index.php?page=cadastro_material_fe";
			}

		}) 	
	})
    
    //INICIO ENTRADA DE MATERIAL 
//INICIO PREENCHIMENTO POR SIGA
$("#id_siga_entrada_material").blur(function(){
        var id_siga_entrada_material= $("#id_siga_entrada_material").val();
        $.post("processos/tratar_controle.php",{ativa:"preenche_por_siga",
		id_siga_entrada_material:id_siga_entrada_material},function(retorno){
			
            var dados= retorno.split("_");
            //alert(dados);return false;
            var id_material= dados[0];
            //var codigo_siga_material= dados[1];
            var nome_material= dados[2];
            var fantasia_material= dados[3];
            var codigo_material= dados[4];
            $("#cod_produto").val(codigo_material);
            //$("#codigo_siga_material").val(codigo_siga_material);
            $("#nomeProduto_entrada_material").val(nome_material);
            $("#nomeFantasiaMaterial_entrada_material").val(fantasia_material);
            
            
            
            //alert(retorno);return false;
			/*	if(retorno='cadastro_material'){
				alert("Entrada de material cadastrada com sucesso!");

				window.location="index.php?page=cadastro_material_fe";
			}*/

		}) 	
        
    })   


//FIM PREENCHIMENTO POR SIGA
//FIM ENDTRADA MATERIAL

	
})


/*
$("#enviarMensagem").click(function(){
		
		
		//alert(conteudo);return false;
		
			$.post("processos/tratar_processos.php",{
				ativa:"Enviarmensagem",
		id_login_remetente:id_login_remetente,
		nome_remetente:nome_remetente,
		nome_destinatario:nome_destinatario,
		id_destinatario:id_destinatario,
		titulo_menssagem:titulo_menssagem,
		conteudo:conteudo},function(retorno){
				alert(retorno);return false;

		
			
		})
		
	})
*/