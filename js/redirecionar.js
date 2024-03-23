document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (event) {
        if (event.target && event.target.id === 'editar') {
            let valorDoBotao = event.target.value;
            console.log('O valor do botão é:', valorDoBotao);
            window.location.href = "files/editarEvento.html?dado=" + valorDoBotao;

        }
    });
});


