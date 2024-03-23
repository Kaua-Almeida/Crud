import { ConexaoApi } from "./api.js";
const inputForm = document.querySelector("#inputForm")

 
async function criarEvento(evento){
  evento.preventDefault();
    
    let titulo = document.querySelector("#titulo").value
    let url = document.querySelector("#img").value
    let desc = document.querySelector(".desc").value

    await ConexaoApi.criarEvento(titulo,url,desc);
    window.location.href = "../index.html"
   
}
inputForm.addEventListener("click",criarEvento)