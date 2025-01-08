import React, { useContext, useEffect, useState } from 'react';
import './PopularCategory.css';
import { CategoriesContext } from '../../contexts/CategoriesContext';

const PopularCategory = () => {
  const categoriesContext = useContext(CategoriesContext);
  const [topCategories, setTopCategories] = useState([]);

  const loadTopCategories = async () => {
    try {
      const categories = await categoriesContext.getTopCategories();
      setTopCategories(Array.isArray(categories) ? categories : []);
    } catch (error) {
      console.error('Erro ao carregar a categoria', error);
    }
  };

  useEffect(() => {
    loadTopCategories();
  }, []);

  return (
    <div className="popular-categories">
      <h2>Categorias Populares</h2>
      <div className="categories-container">
        {topCategories.map((category, index) => (
          <div className="category-item" key={index}>
            <button>
              <img src={category.banner_url} alt={'Banner de' + category.name} />
            </button>
          </div>
        ))}
      </div>
      <div className="view-all">
        <a href="/categories.html">Ver todas categorias</a>
      </div>
    </div>
  );
};

export default PopularCategory;
