
let urlParams = new URLSearchParams(window.location.search);
let valorDoBotao = urlParams.get('dado');

async function editarEvento(valorDoBotao) {



    let inputFormPut = document.querySelector("#inputFormPut");

    inputFormPut.addEventListener("click", async function (evento) {
        evento.preventDefault();

        let titulo = document.querySelector("#titulo").value;
        let url = document.querySelector("#img").value;
        let desc = document.querySelector("#desc").value;

        const data = {
            titulo: titulo,
            url: url,
            descricao: desc
        };

        try {
            const response = await fetch(`http://localhost:3000/eventos/${valorDoBotao}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                console.log('Post atualizado com sucesso');
                window.location.href = "../index.html"
            } else {
                console.error('Falha ao atualizar o post');
            }
        } catch (error) {
            console.error('Ocorreu um erro:', error);
        }
    });

}

editarEvento(valorDoBotao)
