const filmes = [
    {
        titulo:"Vingadores",
        imagem:"https://media.themoviedb.org/t/p/w300_and_h450_face/tCyp6aqOhqGxg6dU0OOIPhOAAne.jpg",
        descricao:"Os maiores heróis da terra",
    }, {
        titulo: "Batman",
        imagem: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
        descricao: "O cavaleiro das trevas",
    },
    {
        titulo: "Homem-aranha",
        imagem: "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
        descricao:"Sem volta para casa",
    },
    {
        titulo: "Spider-Noir",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/rfrzXSaiuvRMLo8PRQds0TfFrZC.jpg",
        descricao:"O detetive particular Ben Reilly é contratado para casos simples",
    },
    {
        titulo: "Todo Mundo em Pânico",
        imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/1z9haN6yiYsuv9D93H8n5yaCk8I.jpg",
        descricao:"Vinte e seis anos depois de escaparem de um assassino mascarado suspeitosamente familiar",
    },
    {
        titulo: "Mortal Kombat",
        imagem: "https://img.odcdn.com.br/wp-content/uploads/2021/03/mortal-kombat-new-poster.jpg",
        descricao:"O lutador de MMA Cole Young deve treinar para liberar seu verdadeiro poder para unir-se aos maiores campeões mundiais contra inimigos da Exoterra em uma batalha decisiva pelo universo.",
    }
]

const listaFilmes = document.getElementById("listaFilmes");

function mostrarFilmes(lista) {
    listaFilmes.innerHTML = ""
    lista.forEach(filme => {
        listaFilmes.innerHTML += `
        <div class="col-md-4">
        <div class="card card-filme h-100">
        <img src="${filme.imagem}" class="card-img-top">
        <div class="card-body">
          <h3>${filme.titulo}</h3>
          <p>${filme.descricao}</p>
          <button class="btn btn-dark" onclick="verDetalhes('${filme.titulo}')">Ver detalhes</button>
               </div>
             </div>
          </div>
        `
        
    });
}

mostrarFilmes(filmes)

function verDetalhes(titulo) {
    Swal.fire ({
        title:titulo,
        text:"Mais informações do filme.",
        icon:"info"
    }) 
}
const campoBusca = document.getElementById("campoBusca")

campoBusca.addEventListener("input",()=> {
    const texto = campoBusca.ariaValueMax.toLocaleLowerCase()

    const filmesFiltrados = filmes.filter(filme =>
        filme.titulo.toLocaleLowerCase().includes(texto)
        )
        mostrarFilmes(filmesFiltrados)
})