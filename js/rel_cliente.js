$(document).ready(function() {
    $(document).on("click", ".remover", function(){
        var id = $(this).attr("id");
        if(id > 0){
            var confirma = confirm("Deseja realmente excluir este cliente?");
            if(confirma == true){
                location.href="remover_cliente.php?id="+id;
            }
        }
    });

    $('#example').DataTable({
        "language": {
                "sEmptyTable": "Nenhum registro encontrado",
                "sInfo": "Mostrando _END_ de _TOTAL_ registros",
                "sInfoEmpty": "Nenhum registro encontrado",
                "sInfoFiltered": "(Filtrados de _MAX_ registros)",
                "sInfoPostFix": "",
                "sInfoThousands": ".",
                "sLengthMenu": "_MENU_ Resultados por página",
                "sLoadingRecords": "Carregando...",
                "sProcessing": "Processando...",
                "sZeroRecords": "Nenhum registro encontrado",
                "sSearch": "Pesquisar",
                "oPaginate": {
                    "sNext": "Próximo",
                    "sPrevious": "Anterior",
                    "sFirst": "Primeiro",
                    "sLast": "Último"
                    },
                "oAria": {
                    "sSortAscending": ": Ordenar colunas de forma ascendente",
                    "sSortDescending": ": Ordenar colunas de forma descendente"
                    },
                },
                "order": [[ 0, "asc" ]],
                "destroy":true,

    });
    
});
