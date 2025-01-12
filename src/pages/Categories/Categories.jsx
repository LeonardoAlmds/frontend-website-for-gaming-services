import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Categories.css';
import { CategoriesContext } from '../../contexts/CategoriesContext';
import Loading from '../../components/Loading/Loading'; // Certifique-se de importar o componente de Loading

const Categories = () => {
  const categoriesContext = useContext(CategoriesContext);
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false); // Estado de loading
  const navigate = useNavigate();

  const loadCategories = async () => {
    try {
      setLoading(true); // Inicia o loading
      const categories = await categoriesContext.getCategories();
      setCategories(Array.isArray(categories) ? categories : []);
      setFilteredCategories(Array.isArray(categories) ? categories : []);
    } catch (error) {
      console.error('Erro ao carregar as categorias', error);
    } finally {
      // Após 500ms, desativa o loading
      setTimeout(() => setLoading(false), 500);
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

  if (loading) {
    return <Loading />; // Exibe o loading enquanto as categorias estão sendo carregadas
  }

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