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
      document.getElementById("signup Form").reset();
  }