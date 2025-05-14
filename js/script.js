    // Ao clicar o container roda
    document.getElementById('btCadastro').addEventListener('click', function() {
      document.getElementById('containerWrapper').style.transform = 'rotateY(180deg)';
    });
      // Ao clicar o container roda
    document.getElementById('btLogin').addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('containerWrapper').style.transform = 'rotateY(0deg)';
    });
  
  
      // Seleciona todos os campos do formulário e limpa os valores
    function limparCampos() {
      document.getElementById("formCadastro").reset();
  }


  function mostrarTexto(botao) {
    const texto = document.getElementById("texto");

    if (botao === 1) {
      texto.innerText = "Garçons anotam pedidos em dispositivos que enviam direto à cozinha. Reduzem erros de anotação e aumentam a velocidade do atendimento.";
    } else if (botao === 2) {
      texto.innerText = "Centraliza pedidos, pagamentos, controle de caixa e emissão de notas fiscais. Otimiza o fechamento do dia e reduz falhas humanas.";
    } else if (botao === 3) {
      texto.innerText = "Tela na cozinha que exibe os pedidos em tempo real. Elimina o uso de papéis e melhora a organização do preparo.";
    }
  }

    //Script para a validação do CEP
    function limpa_formulário_cep() {
            //Limpa valores do formulário de cep.
            document.getElementById('rua').value=("");
            document.getElementById('bairro').value=("");
            document.getElementById('cidade').value=("");
            document.getElementById('uf').value=("");
            document.getElementById('ibge').value=("");
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('rua').value=(conteudo.logradouro);
            document.getElementById('bairro').value=(conteudo.bairro);
            document.getElementById('cidade').value=(conteudo.localidade);
            document.getElementById('uf').value=(conteudo.uf);
            document.getElementById('ibge').value=(conteudo.ibge);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }
        
    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if(validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('rua').value="...";
                document.getElementById('bairro').value="...";
                document.getElementById('cidade').value="...";
                document.getElementById('uf').value="...";
                document.getElementById('ibge').value="...";

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    };
    