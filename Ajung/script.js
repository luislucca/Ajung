$(function() {
    $("#clearButton").hide();

    $("#searchButton").click(function() {
        var cepNum = $("#cepInput").val();
        if(cepNum != "") {
            urlStr = "https://viacep.com.br/ws/" + cepNum + "/json/";
            $.ajax(urlStr, {
                dataType: 'json',
                type: 'GET',
                success: function(data) {
                    const cep = data.cep;
                    const logradouro = data.logradouro;
                    const bairro = data.bairro;
                    const localidade = data.localidade;
                    const uf = data.uf;
                    const gia = data.gia;
                    const ibge = data.ibge;
                    $("form.needs-validation").append(`
                        <table class="table table-dark mx-auto mb-3">
                            <thead>
                                <tr class="border-bottom">
                                    <th scope="col-2" class="border-0">CEP</th>
                                    <th scope="col-2" class="border-0">Logradouro</th>
                                    <th scope="col-2" class="border-0">Bairro</th>
                                    <th scope="col-2" class="border-0">Localidade</th>
                                    <th scope="col-1" class="border-0">UF</th>
                                    <th scope="col-2" class="border-0">GIA</th>
                                    <th scope="col-2" class="border-0">IBGE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td scope="col-2" class="border-0">${cep}</td>
                                    <td scope="col-2" class="border-0">${logradouro}</td>
                                    <td scope="col-2" class="border-0">${bairro}</td>
                                    <td scope="col-2" class="border-0">${localidade}</td>
                                    <td scope="col-1" class="border-0">${uf}</td>
                                    <td scope="col-2" class="border-0">${gia}</td>
                                    <td scope="col-2" class="border-0">${ibge}</td>
                                </tr>
                            </tbody>
                        </table>`
                    );
                }
            });
        };
        if($("#clearButton").hide()) {
            $("#clearButton").show()
        };
    });

    $("#clearButton").click(function() {
        $("table.table").remove();
        $("#clearButton").hide()
    });

});