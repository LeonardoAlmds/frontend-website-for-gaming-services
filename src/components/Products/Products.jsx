import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";

const Products = () => {
  const productsContext = useContext(ProductsContext)
  const [products, setProducts] = useState([]);
  
    const loadProducts = async () => {
      try {
        const products = await productsContext.getProducts();
        setProducts(Array.isArray(products) ? products : []);
      } catch (error) {
        console.error('Erro ao carregar a categoria', error);
      }
    };
  
    useEffect(() => {
      loadProducts();
    }, []);

    console.log(products)
  
  return (
    <h1>kaj</h1>
  )
}

export default Products