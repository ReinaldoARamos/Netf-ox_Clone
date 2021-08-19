import { list } from "postcss";
import React, { useEffect } from "react";
import Tbmd from "./TMDB";

export default () => {
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
