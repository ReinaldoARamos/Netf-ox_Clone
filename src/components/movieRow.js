import React, {useState} from "react";
import "./MovieRow.css";
import { NavigateBefore } from "@material-ui/icons";
import { NavigateNext } from "@material-ui/icons";

export default ({ title, items }) => {

  const [scrollX, setScrollX] = useState(0);
  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2); //Pega o valor do monitor do usuário e divide por 2
    if(x>0){ //verificação de que caso o x for maior que 0, ele iguale o x a 0, impedindo de sair do limite
      x=0
    }
setScrollX(x); //setamos o valor
  };
  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2); //
    if(x>0){ //verificação de que caso o x for maior que 0, ele iguale o x a 0, impedindo de sair do limite
      x=0
    }
setScrollX(x); //setamos o valor
  };
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <NavigateBefore style={{ fontSize: 50 }} />
      </div>

      <div className="movieRow--right" onClick={handleRightArrow}>
        <NavigateNext style={{ fontSize: 50 }} /> 
      </div>
      <div className="movieRow--listarea" >
        <div className="movieRow--list" style={{marginLeft: scrollX, width: items.results.length * 200 }}>
          {items.results.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow--item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
