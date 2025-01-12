import './ListSearchProducts.css';

const ListSearchProducts = ({ products, categories }) => {
  return (
    products.length > 0 && (
      <div className='search-list-product'>
        {products.map((product, index) => (
          <button key={index} className="search-product-item">
            <div>
              <img src={product.image_url} alt="produto" />
            </div>
            <div className='produts-search'>
              <p className='name-search'>{product.name}</p>
              <p className='price-search'>{'R$ ' + product.price}</p>
              <p className='search-category'>
                {
                  categories
                    .filter(category => category.id === product.category_id)
                    .map(category => category.name)[0] || 'Categoria não encontrada'
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
