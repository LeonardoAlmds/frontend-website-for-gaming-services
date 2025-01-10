import './ProductCard.css';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {  
  return (
    <Link to={`/product/${product.id}`} className="card-link">
      <div className="card">
        <img src={product.image_url || './assets/default.png'} alt="Imagem do Produto" />
        <h3>{product.name || 'Título do Produto'}</h3>
        <p className="price">{"R$ " + product.price || 'R$ 0,00'}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
