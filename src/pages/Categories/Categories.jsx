import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';
import { CategoriesContext } from '../../contexts/CategoriesContext';

const Categories = () => {
  const categoriesContext = useContext(CategoriesContext);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const loadCategories = async () => {
    try {
      const categories = await categoriesContext.getCategories();
      setCategories(Array.isArray(categories) ? categories : []);
      setFilteredCategories(Array.isArray(categories) ? categories : []);
    } catch (error) {
      console.error('Erro ao carregar a categoria', error);
    }
  };

  const filterCategories = (query) => {
    const filtered = categories.filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredCategories(filtered);
  };

  useEffect(() => {
    loadCategories();
  }, []);

  useEffect(() => {
    filterCategories(searchTerm);
  }, [searchTerm, categories]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryClick = (category) => {
    navigate("/category", { state: { category } });
  };

  return (
    <div className="categories-kk">
      <h2>Categorias</h2>
      <input
        className="category-search"
        type="text"
        placeholder="Buscar categorias..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="categories-s">
        {filteredCategories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            onClick={() => handleCategoryClick(category)}
          >
            <div
              className="category-banner"
              style={{
                backgroundImage: `url(${category.banner_url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '200px',
              }}
            >
              <div className="category-name">{category.name}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;