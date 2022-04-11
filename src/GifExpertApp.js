import React, { useState } from 'react';
import GifGrid from './components/GifGrid';
import AddCategory from "./components/AddCategory";
import './stylesheets/GifExpertApp.scss';
import './stylesheets/Reset.scss';




const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch']);

  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={setCategories} />
      <ol>
        {
          categories.map(category => (
            <GifGrid category={category} key={category} />
          ))
        }
      </ol>
    </>
  );
}

export default GifExpertApp;
