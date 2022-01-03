$(document).ready(function(){

/*
$("#salvar").click(function(){
	 
var ordem_arma= $("#ordem_arma").val();
var alfa_arma= $("#alfa_arma").val();
var ipm_ro_it_arma= $("#ipm_ro_it_arma").val();
var data_inicio= $("#data_inicio").val(); 
var data_saida= $("#data_saida").val(); 
var observacao= $("#observacao").val();

  $.post("tratar_cieat.php",{ativa:"cadastra_manutencao",
		ordem_arma:ordem_arma,
		alfa_arma:alfa_arma,
		ipm_ro_it_arma:ipm_ro_it_arma,
		data_inicio:data_inicio, 
		data_saida:data_saida, 
		observacao:observacao},function(retorno){
			if(retorno !=""){
				alert("Manuteção cadastrada com sucesso!")
			}

		}) 	



	
}); */


//INICIO PREENCHIMENTO POR SIGA
$("#ordem").blur(function(){
        var ordem= $("#ordem").val();
        $.post("tratar_cieat.php",{ativa:"preenche_por_ordem",
		ordem:ordem},function(retorno){
			//alert(retorno);return false;
            var dados= retorno.split("_");
            //alert(dados);return false;
            var alfa_arma= dados[0];
            //var codigo_siga_material= dados[1];
            var ipm_ro_it_arma= dados[1];
            var armamento= dados[2];
            //var codigo_material= dados[4];
            $("#alfa_arma").val(alfa_arma);
            //$("#codigo_siga_material").val(codigo_siga_material);
            $("#ipm_ro_it_arma").val(ipm_ro_it_arma);
            $("#armamento").val(armamento);
            
            //`ordem_arma`, ``, ``, ``
            
            //alert(retorno);return false;
			/*	if(retorno='cadastro_material'){
				alert("Entrada de material cadastrada com sucesso!");

				window.location="index.php?page=cadastro_material_fe";
			}*/

		}) 	
        
    })   


//FIM PREENCHIMENTO POR SIGA

	//INICIO PREEENCHER ALFAS DE ARMAMENTO
	$("#armamento").blur(function(){
		//alert('retorno');return false;
			//var ordem= $("#ordem").val();
			var armamento= $("#armamento").val();
			//alert(armamento);return false;
			$.post("trata.php",{ativa:"cadastroInicioManutencao",
			armamento:armamento},function(retorno){
				var id_manutencao= retorno;
				   window.location="cadastro_manutencao.php?armamento="+armamento+"&id_manutencao="+id_manutencao;	
			})		
		})	
		
	//INICIO SALVAR ARMAS POR MANUTENCAO COM OBSERVAÇÃO
	$("#salvarModal").click(function(){
			var id_manutencao= $("#id_manutencao").val(); 
var id_arma= $("#id_arma").val(); 
var ordem_arma= $("#OrdemModal").val(); 
var alfa_arma= $("#AlfaModal").val(); 
var ipm_ro_it_arma= $("#IpmModal").val(); 
//alert ("ipm_ro_it_arma"+ipm_ro_it_arma);
var armamento= $("#ArmamentoModal").val(); 
//alert ("armamento"+armamento);
var data_entrada= $("#data_entrada").val(); 
//alert ("data_entrada"+data_entrada);
var data_saida= $("#data_saida").val(); 
//alert ("data_saida"+data_saida);
var observacao= $("#observacao").val();
//alert (observacao); return false;

	 $.post("trata.php",{ativa:"cadastra_arma_manu_observa",
		id_manutencao:id_manutencao,
		id_arma:id_arma, 
		ordem_arma:ordem_arma, 
		alfa_arma:alfa_arma, 
		ipm_ro_it_arma:ipm_ro_it_arma, 
		armamento:armamento,
		data_entrada:data_entrada,
		data_saida:data_saida, 
		observacao:observacao},function(retorno){
			if(retorno !=""){
			alert('Observação cadastrada com sucesso!'); 
			}
			
		}) 


		
	})	
	//FIM SALVAR ARMAS POR MANUTENCAO


$("#salvar").click(function(){
	//$(document).on("click", "#salvar", function(){
		
	   //var id_armaCk= $("#id_armaCk").val();	
	   var id_manutencao= $("#id_manutencao").val();       
       var data_entrada= $("#data_entrada").val(); 
	   var data_saida= $("#data_saida").val(); 
	   if(data_entrada =="" || data_saida ==""){
					alert("Por favor verifique as datas");
					return false;
				}
	   
	   //var ordem_armaCk= $("#ordem_armaCk").val();
	   var ipm_ro_it_armaCk= $("#ipm_ro_it_armaCk").val();
	   var armamentoCk= $("#armamentoCk").val();
	   var array = new Array();
	   $(".ck:checked").each(function(){
            array.push($(this).val());
       
	   
	   });
	   $.post("trata.php",{ativa:"SallvarListaAlfa",
		valores:array,		
		id_manutencao:id_manutencao,
		data_entrada:data_entrada,
		data_saida:data_saida,
		ipm_ro_it_armaCk:ipm_ro_it_armaCk,
		armamentoCk:armamentoCk},function(retorno){
			alert(retorno); return false;
			
			
		}) 
	   
       //alert(array);
	
	
	
/*		
		camposMarcados = new Array();
		$("input[type=checkbox][name='chklista[]']:checked").each(function(){
			camposMarcados.push($(this).val());
		});
		alert(camposMarcados);
		
		*/

	})

/*
    $(document).on("click", "#salvar", function(){
       var array = new Array();
       $(".ck:checked").each(function(){
            array.push($(this).val());
       });
       alert(array);
    }); */
        
})   




//FIM PREEENCHER ALFAS DE ARMAMENTO 


    






