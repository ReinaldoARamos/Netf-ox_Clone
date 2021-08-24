import React from 'react';
import './featureMovie.css'

export default ({items}) =>  {
return (
    <section className= "featured">
    <div>{items.Originals_name}</div>
    </section>
);

}