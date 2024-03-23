async function eventosApi() {
    const conexao = await fetch('http://localhost:3000/eventos');
    const resposta = await conexao.json();

    return resposta;
}


async function criarEvento(titulo, url,descricao) {
    const conexao = await fetch('http://localhost:3000/eventos', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            url: url,
            descricao:descricao
        })
    })

    const resposta = await conexao.json();

    return resposta;

}



export const ConexaoApi = {
    eventosApi,
    criarEvento
}