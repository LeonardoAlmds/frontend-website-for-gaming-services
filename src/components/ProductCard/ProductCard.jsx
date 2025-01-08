import './ProductCard.css'

const ProductCard = ({ product }) => {  
  return (
    <div className="card">
      <img src={product.image_url || './assets/default.png'} alt="Imagem do Produto" />
      <h3>{product.name || 'Título do Produto'}</h3>
      <p className="price">{"R$ " + product.price || 'R$ 0,00'}</p>
    </div>
  )
}

export default ProductCard