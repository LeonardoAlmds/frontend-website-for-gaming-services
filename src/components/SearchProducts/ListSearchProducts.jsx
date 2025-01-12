import { useNavigate } from 'react-router-dom';
import './ListSearchProducts.css';

const ListSearchProducts = ({ products, categories, onProductClick }) => {
  const navigate = useNavigate();

  const handleClick = (product) => {
    onProductClick();
    navigate("/product", { state: { product } });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    products.length > 0 && (
      <div className="search-list-product">
        {products.map((product) => (
          <button
            key={product.id} // Utilize `id` como key para maior eficiência
            className="search-product-item"
            onClick={() => handleClick(product)}
          >
            <div>
              <img src={product.image_url} alt="produto" />
            </div>
            <div className="produts-search">
              <p className="name-search">{product.name}</p>
              <p className="price-search">{'R$ ' + product.price}</p>
              <p className="search-category">
                {
                  categories
                    .filter((category) => category.id === product.category_id)
                    .map((category) => category.name)[0] || 'Categoria não encontrada'
                }
              </p>
            </div>
          </button>
        ))}
      </div>
    )
  );
};

export default ListSearchProducts;
