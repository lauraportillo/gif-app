import React, { useState } from 'react';
import '../stylesheets/GifExpertApp.scss';
import '../stylesheets/Reset.scss';

const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);



  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />

      <button>Agregar</button>

      <ol>
        {
          categories.map(category => {
            return <li key={category}> {category}</li>
          })
        }
      </ol>
    </>
  );
}

export default GifExpertApp;
