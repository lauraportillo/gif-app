import React, { useState } from 'react';
import AddCategory from "./AddCategory";
import '../stylesheets/GifExpertApp.scss';
import '../stylesheets/Reset.scss';


const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

  // const handleAdd = () => {
  //   const add = [...categories, 'HunterXHunter']
  //   setCategories(add);
  //   console.log(add);
  // }

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory />
      <hr />

      {/* <button onClick={handleAdd}>Agregar</button> */}

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
