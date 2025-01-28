import React, { useContext, useEffect, useState } from 'react';
import './PopularCategory.css';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import { Link, useNavigate } from 'react-router-dom';

const PopularCategory = () => {
  const navigate = useNavigate();

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

  const handleCategory = (category) => {
    navigate("/category", { state: { category } });
  };
  
  return (
    <div className="popular-categories">
      <h2>Categorias Populares</h2>
      <div className="categories-container">
        {topCategories && topCategories.length > 0 ? (
          topCategories.map((category, index) => (
            <div className="category-item" key={index}>
              <button onClick={() => handleCategory(category)}>
                <img src={category.banner_url} alt={'Banner de ' + category.name} />
              </button>
            </div>
          ))
        ) : (
          Array.from({ length: 6 }).map((_, index) => (
            <div className="category-item placeholder" key={index}>
              <p>Aqui entrará uma categoria popular</p>
            </div>
          ))
        )}
      </div>
      <div className="view-all">
        <Link to={'/categories'}>Ver todas categorias</Link>
      </div>
    </div>
  );
};

export default PopularCategory;
