import { createContext, useState } from 'react';
import { useApi } from '../hooks/useApi';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [product, setProduct] = useState()
    const [products, setProducts] = useState()
    const [topProducts, setTopProducts] = useState()
    const api = useApi();

    const getProducts = async () => {
      if(!products) {
        const data = await api.getProducts();
        setProducts(data)
        return data
      }
    }

    const getTopProducts = async () => {
      if (!topProducts) {
        const data = await api.getTopProducts();
        setTopProducts(data);
        return data
      }
    }

    const getProductById = async (categoryId) => {
      const data = await api.getProductById(categoryId);
      setProduct(data)
      return data
    }

  return (
          <ProductsContext.Provider 
            value={{
              product,
              products,
              topProducts,
              getProducts,
              getTopProducts,
              getProductById
            }}
          >
              {children}
          </ProductsContext.Provider>
      );
}
