async function buscaEndereco(cep){

    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = "";

    try{
        var consultaCEP = await fetch(`http://viacep.com.br/ws/${cep}/json/`)
        var CEPconvertido = await consultaCEP.json()

        if (CEPconvertido.erro){
            throw Error('CEP inexistente!')
        }

        var bairro = document.getElementById('bairro')
        var cidade = document.getElementById('cidade');
        var logradouro = document.getElementById('endereco');
        var estado = document.getElementById('estado');

        bairro.value = CEPconvertido.bairro;
        cidade.value = CEPconvertido.localidade;
        logradouro.value = CEPconvertido.logradouro;
        estado.value = CEPconvertido.uf;

        console.log(CEPconvertido);
        return CEPconvertido;

    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido</p>`
        console.log(erro)

    }
    
}



var cep = document.getElementById('cep')
cep.addEventListener("focusout", () => buscaEndereco(cep.value));

buscaEndereco('01001000')
