function onlyNumb(textarea, counter, limit) {
    $('.' + input).on('keydown', function(e){
        var qttCharacters = $(this).val().length;
        left = limit - qttCharacters;
    });
}

handleChange = (e) => {
    const val = e.target.value
    const max = 1000
    const maxLength = max.toString().length - 1
    const newVal = val < max ? val : parseInt(val.toString().substring(0, maxLength))
    // setState, etc.     
}

// $(document).ready(function () {

//     function limpa_formulário_cep() {
//         // Limpa valores do formulário de cep.
//         $("#getCep").val("");
//         $("#getLogra").val("");
//         $("#getBairro").val("");
//         $("#getLocal").val("");
//         $("#getUf").val("");
//         $("#getGia").val("");
//         $("#getIbge").val("");
//     }
// });