import React from 'react';
import { useLocation } from 'react-router-dom';

const Category = () => {
  const location = useLocation();
  const { category } = location.state || {}; // Evita erro caso o estado não exista
  console.log(category)

  return (
    <div>
      <h1>{category?.name || 'Categoria não encontrada'}</h1>
      <img src={category?.banner_url} alt={'Banner de ' + category?.name} />
      <p>{category?.description}</p>
    </div>
  );
}

export default Category