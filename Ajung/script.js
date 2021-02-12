$(function() {
    
    $("#searchButton").click(function() {
        var cepNum = $("#cepInput").val();
        
        if(cepNum != "") {
            if(cepNum) {
                urlStr = "https://viacep.com.br/ws/" + cepNum + "/json/";
                $.ajax(urlStr, {
                    dataType: 'json',
                    type: 'GET',
                    success: function(data) {
                        
                    }
                });
                    // if (!("erro" in dados)) {
                    //     var cep = dados.cep;
                    //     var logradouro = dados.logradouro;
                    //     var bairro = dados.bairro;
                    //     var localidade = dados.localidade;
                    //     var uf = dados.uf;
                    //     var gia = dados.gia;
                    //     var ibge = dados.ibge;
                        
                    //     const resultContainer = $("#resultContainer");
                        
                    //     function createCard() {
                    //         const result = document.createElement('table');
                    //         result.classList = "table table-dark mx-auto";
                    //     }

                    //     function createButton() {
                    //         const clearButton = document.
                    //     }

                    //     const content = `
                    //         <thead>
                    // };
            };
        };
    });
});