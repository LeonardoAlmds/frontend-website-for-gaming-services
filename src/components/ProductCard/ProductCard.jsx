import './ProductCard.css';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {  
  const navigate = useNavigate()

  const handleClick = (product) => {
    navigate("/product", { state: { product } });
  }

  return (
    <button className="card-link" onClick={() => {handleClick(product)}}>
      <div className="card">
        <img src={product.image_url || './assets/default.png'} alt="Imagem do Produto" />
        <h3>{product.name || 'Título do Produto'}</h3>
        <p className="price">{"R$ " + product.price || 'R$ 0,00'}</p>
      </div>
    </button>
  );
}

export default ProductCard;
