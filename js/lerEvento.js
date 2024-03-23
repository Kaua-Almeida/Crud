import { ConexaoApi } from "./api.js"
async function showEvents() {
    const listarEventosApi = await ConexaoApi.eventosApi()
    const htmlInfo = document.querySelector("#lista")
    listarEventosApi.forEach(evento => {
        htmlInfo.innerHTML += `
        <div class="eventos"> 
            <h2 class="titulo_evento">${evento.titulo}</h2>
            <img width="200" src="${evento.url}"> </img>
            <p>${evento.descricao}</p>
            <button id= "editar" class = "editar" value = "${evento.id}"b>Editar</button>
            <button id="excluir" class ="excluir" value="${evento.id}">Excluir</button>
        </div>

    `
    });
}

showEvents()

const barrapesquisa = document.querySelector('.pesquisa');

barrapesquisa.addEventListener('input', filtro)



async function filtro() {
    await ConexaoApi.eventosApi();

    const allEvents = document.querySelectorAll('.eventos')

    if (barrapesquisa != "") {
        allEvents.forEach(evento => {
            let titulo = evento.querySelector('.titulo_evento').textContent.toLowerCase();
            let valorFiltro = barrapesquisa.value.toLowerCase();

            if (!titulo.includes(valorFiltro)) {
                evento.style.display = 'none';
            }
            else {
                evento.style.display = 'block';
            }

        })
    }
    else {
        todoseventos.forEach(evento => {
            evento.style.display = 'block';
        })
    }

}

filtro();
