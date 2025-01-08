import React from 'react';
import './Category.css'
import { useLocation } from 'react-router-dom';
import Products from '../../components/Products/Products';
import { ProductsProvider } from '../../contexts/ProductsContext';

const Category = () => {
  const location = useLocation();
  const { category } = location.state || {}; 

  return (
    <div className="category-container">
      <img id="category-image" src={category.icon_url} alt="Categoria" />
      <div>
          <h1 id="category-name">{category.name}</h1>
          <p id="category-description">Compra e venda de services.</p>
      </div>  

      <a href="categories.html" className="category-btn">Ver todas as categorias</a>

      <input className="product-search category-search" type="text" id="product-search" placeholder="Pesquisar produto..." />

      <ProductsProvider>
        <Products />
      </ProductsProvider>
  </div>
  );
}

export default Category