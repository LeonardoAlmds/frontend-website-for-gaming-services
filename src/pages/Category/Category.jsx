import { useState, useContext, useEffect } from 'react';
import './Category.css'
import { Link, useLocation } from 'react-router-dom';
import Products from '../../components/Products/Products';
import { ProductsContext } from '../../contexts/ProductsContext';

const Category = () => {
  const productsContext = useContext(ProductsContext);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('')

  const location = useLocation();
  const { category } = location.state || {}; 

  const loadProducts = async () => {
    try {
      const products = await productsContext.getProductById(category.id);
      setProducts(Array.isArray(products) ? products : []);
    } catch (error) {
      console.error("Erro ao carregar a categoria", error);
    }
  };

  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(() => {
    loadProducts();
  }, [category.id]);

  return (
    <div className="category-container">
      <img id="category-image" src={category.icon_url} alt="Categoria" />
      <div>
          <h1 id="category-name">{category.name}</h1>
          <p id="category-description">Compra e venda de services.</p>
      </div>  

      <Link to={'/categories'} className="category-btn">Ver todas as categorias</Link>

      <input 
        className="product-search category-search" 
        type="text" value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        placeholder="Pesquisar produto..." 
      />

      <Products products={filteredProducts}/>
     
  </div>
  );
}

export default Category