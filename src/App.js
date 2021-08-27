import React, {
  useEffect,
  useState /*Salva a lista de filmes que iremos exibir*/,
} from "react";
import Tbmd from "./TMDB";
import MovieRow from "./components/MovieRow";
import "./App.css";
import FeaturedMovie from "./components/FeaturedMovie"
import Header from "./components/Header";

export default () => {
  const [movielist, setMovieList] = useState([]); //Cpnst onde iremos setar os filmes
  const [featuredData, setFeaturedData] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  
  useEffect(() => {
    const loadAll = async () => {
      
      let list = await Tbmd.getHomeList();
     setMovieList(list);

      let originals = list.filter(i=>i.slug === "Originals");
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1 ));
      let chosen = originals[0].items.results[randomChosen];
      let chosenInfo = await Tbmd.getMovieInfo(chosen.id, 'tv');
    setFeaturedData(chosenInfo);
      
    };
    loadAll();
  }, []);

  useEffect(() => { //criei um UseEffet
    const scrollListener = () => { //Esse use effect se chama ScrollListener
      if(window.scrollY > 10) { //Aqui eu coloquei um evento nativo com um if, de que caso o scroll Y seja movido um pouco, ele coloque true no BlackHeader
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll', scrollListener) //Aqui eu coloquei o EventListener de Scroll pra executar o ScrollListener
    return () => {
      window.removeEventListener('scroll', scrollListener) //Quando o Scroll estiver menor que 10, ele remove o evento, setando o Scroll False, removendo o fundo
    }
  }, [])
  return (
    <div className="page">

      <Header  black={blackHeader}/>
    {featuredData &&  
    <FeaturedMovie item={featuredData }/>
    }

      <section className="lists">
        {movielist.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
      <footer className= "footer">Feito usando o curso de React Native da B7WEb e APi The Movie Database</footer>
    {movielist.length <=0 &&
    <div className="loading">
      <img src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif" alt="loading" />


    </div>
 }
 </div>

  );
};


//-------------------------------------------------------------------------------------
/* 
     const loadAll = async () => {
      
      let list = await Tbmd.getHomeList();
      setMovieList(list);

      //pegando a Lista de filmes em destaque
      let originals = list.filter((i) => i.slug === "Originals");
      let randomChosen = Math.floor(
        Math.random() * (originals[0].items.results.length - 1)
      );
      //Essa linha serve para gerar um número aleatorio
      //Esse Random cria um math.floor que vai gera um número aleatório
      //Esse número aleatório vai ser multiplicado pela quantidade de itens dentro do array Originals
      //Menos 1, a partir do 0, por exemplo
      //Se haver 20 filmes, ele retorna um valor aleatório entre 0 e 19, pois o array parte do 0
      let chosen = originals[0].items.results[randomChosen];
      //|Esse choosen retorna o númmero aleatório junto com os dados em formato de OBj de dentro dos ORiginals
      let chosenInfo = await Tbmd.getMovieInfo(chosen.id, 'tv');
      setFeaturedData(chosenInfo);
      console.log(chosenInfo);
      //VERIFICAR FEATURED DATA, nao ta recebendo dados
  
    };
    loadAll();
  }, [setMovieList, setFeaturedData]);
*/

//-------------------------------------------------------------------------------------------------

    /*let originals = list.filter(i=>i.slug === "Originals");
      let randomChosen = Math.floor(Math.random() * (originals[0].items.results.length - 1 ));
      let chosen = originals[0].items.results[randomChosen];

      console.log(chosen);
     */