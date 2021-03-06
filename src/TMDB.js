//Estou criando este arquivo para centralizar os requests que eu irei pegar da API TMDB,
//É melhor criar um arquivo assim pois todas as informações recebidas pelos requests
//ficarão aqui, e não espalhadas pelos arquivos ao longo do APP, dessa forma, se algum dia eu for trocar
//Os dados dos requests, usando um banco de dados feito por mim ou de outra API, eu apenas
//PReciso editar este arquivo, pois ele irá centralizar tudo, tornando a minha vida muito
//Mais fácil e deixando o desenvolvimento mais prático e organizado
const API_KEY = 'f42a31a6ad2f581ff02e34b50a18fa17'; //Chave da nossa API
const API_BASE = 'https://api.themoviedb.org/3'; //Base dos dados que iremos usar da API, encontradas nesse URL

/*
-originais Netflix  
-recomendados(trending)
-em alta(top rated)
-ação
-terror
-romance
-comédia
-documentários
Cada informação desse generos vem da base, vai ser uma consulta diferente na API
*/

const basicFetch = async (endpoint) => {
  //Essa função assíncrona vai fazer um fetch no request, vai pegar
  //O JSON de resultado e retorna-lo com os dados
  const req = await fetch(`${API_BASE}${endpoint}`);
  //faz a requisição e retorna o JSOn, no caso o endpoint ^
  const json = await req.json();
  return json;
};

export default {
  getHomeList: async () => {
    return [
      {
        slug: "Originals",
        title: "Originais Netflix",
        items: await basicFetch(
          `/discover/tv?with_networks=213&language=pt-BR&api_key=${API_KEY}`
        ),
        //Desse jeito iremos filtar os filmes para oque queremos através desse req
        //Usamos o with network, que irá pegar o id dentro do banco de dados da API
        //223 são os originais netflix
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: await basicFetch(
          `/trending/all/week?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "top-rated",
        title: "Em Alta",
        items: await basicFetch(
          `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "action",
        title: "Ação",
        items: await basicFetch(
          `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "terror",
        title: "Terror",
        items: await basicFetch(
          `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: await basicFetch(
          `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "romance",
        title: "Romance",
        items: await basicFetch(
          `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "documentary",
        title: "Documentário",
        items: await basicFetch(
          `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },

  getMovieInfo: async (movieId, type) => { //Aqui pegamos o movieId(tipo) e o type(que vai ser o genero)
    let info = {}; //colocamos uma let vazia que vai receber infos
    /*
    Aqui tinhamos encontrado um problema, onde basicamente o obj retornado no random number não tinha o genero
    do filme, por isso nós tiuvemos que criar essa função, que vai retornar essas informações para nós
    */ 

    if (movieId) { //criamos um if para que caso ele receba a id do filme ele crie um swich
      switch(type){
        case 'movie': //caso o id mostre ser uum filme, a informação que ele retorna da api é a seguinte
        info = await basicFetch(`/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`); //Essa aqui, que pega o genero
        break;
        case 'tv': //Caso seja série, ele faz a mesma coisa, porém como série
          info = await basicFetch(`/tv/${movieId}?language=pt-BR&api_key=${API_KEY}`);
          break;
        default:
          info=null;
          break;
      }
    }
    //Ele iguala a info e retorna no final
    //Essa Id que ele retorna que indica ser série ou filme está na própria documentação oficial
    //do The Movie DataBase
  
    return info;
  }

};
