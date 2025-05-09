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

  