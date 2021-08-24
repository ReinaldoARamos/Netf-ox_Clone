import React from 'react';
import './featuredMovie.css'

export default ({item}) =>  {
return (
    <section className= "featured">
    <div>
        {item.originals_name}
        </div>
    </section>
);

}