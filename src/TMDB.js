//Estou criando este arquivo para centralizar os requests que eu irei pegar da API TMDB,
//É melhor criar um arquivo assim pois todas as informações recebidas pelos requests
//ficarão aqui, e não espalhadas pelos arquivos ao longo do APP, dessa forma, se algum dia eu for trocar
//Os dados dos requests, usando um banco de dados feito por mim ou de outra API, eu apenas
//PReciso editar este arquivo, pois ele irá centralizar tudo, tornando a minha vida muito
//Mais fácil e deixando o desenvolvimento mais prático e organizado
const API_KEY = "f42a31a6ad2f581ff02e34b50a18fa17"; //Chave da nossa API
const API_BASE = "https://api.themoviedb.org/3"; //Base dos dados que iremos usar da API, encontradas nesse URL

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
        items: [],
      },
      {
        slug: "trending",
        title: "Recomendados para você",
        items: [],
      },
      {
        slug: "top-rated",
        title: "Em Alta",
        items: [],
      },
      {
        slug: "action",
        title: "Ação",
        items: [],
      },
      {
        slug: "terror",
        title: "Terror",
        items: [],
      },
      {
        slug: "comedy",
        title: "Comédia",
        items: [],
      },
      {
        slug: "romance",
        title: "Romance",
        items: [],
      },
      {
        slug: "documentary",
        title: "Documentário",
        items: [],
      },
    ];
  },
};
