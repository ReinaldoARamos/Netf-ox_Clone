import React, {
  useEffect,
  useState /*Salva a lista de filmes que iremos exibir*/,
} from "react";
import Tbmd from "./TMDB";
import MovieRow from "./components/MovieRow";
import './App.css'
import FeaturedMovie from './components/featureMovie';

export default () => {
  const [movielist, setMovieList] = useState([]); //Cpnst onde iremos setar os filmes
  useEffect(() => {
    const loadAll = async () => {
      //Esse useEffect executa uma determinada função assim que a página é carregada
      let list = await Tbmd.getHomeList();
      setMovieList(list);
    };
    loadAll();
    return () => {};
  }, []);
  return (
    <div className="page">

      <FeaturedMovie />
      <section className="lists">
        {movielist.map((item, key) => (
         <MovieRow  key={key} title={item.title} items={item.items}/>
        ))}
      </section>
    </div>
  );
};
