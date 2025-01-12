import './ListSearchProducts.css';

const ListSearchProducts = ({ products, categories }) => {
  return (
    <div className='search-list-product'>
      {products.map((product, index) => (
        <button key={index}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>
            {
              categories
                .filter(category => category.id === product.category_id)
                .map(category => category.name)[0] || 'Categoria não encontrada'
            }
          </p>
        </button>
      ))}
    </div>
  );
};

export default ListSearchProducts;
