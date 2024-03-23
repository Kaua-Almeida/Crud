
document.addEventListener('DOMContentLoaded', function () {
  var botoes = document.querySelectorAll('#excluir');
  botoes.forEach((botao) => {
    botao.addEventListener('click', function () {
      let valorDoBotao = this.value;
      console.log('O valor do botão é:', valorDoBotao);
    });
  });

  document.addEventListener('click', function (event) {
    if (event.target && event.target.id === 'excluir') {
      let valorDoBotao = event.target.value;
      console.log('O valor do botão é:', valorDoBotao);
      fetch(`http://localhost:3000/eventos/${valorDoBotao}`, {
        method: 'DELETE'
      }).then(response => {
        if (response.ok) {
          console.log('Post excluído com sucesso');
        } else {
          console.error('Falha ao excluir o post');
        }
      })
        .catch(error => {
          console.error('Ocorreu um erro:', error);
        });
    }

  });
});



