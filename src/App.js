import React, { useEffect, useState/*Salva a lista de filmes que iremos exibir*/ } from "react";
import Tbmd from "./TMDB";

export default () => {
  const  [movielist, setMovieList] = useState([]); //Cpnst onde iremos setar os filmes
  useEffect(() => {
    const loadAll = async () => {
      //Esse useEffect executa uma determinada função assim que a página é carregada
      let list = await Tbmd.getHomeList();
      console.log(list);
    };
    loadAll();
    return () => {};
  }, []);
  return <div>Uatiman</div>;
};
