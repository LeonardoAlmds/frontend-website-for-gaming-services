import { createContext, useState } from 'react';
import { useApi } from '../hooks/useApi';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
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

    const getProductById = async (id) => {
      if (!products) {
        const data = await api.getProductsById(id);
        setProducts(data);
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

  return (
          <ProductsContext.Provider 
            value={{
              products,
              topProducts,
              getProducts,
              getProductById,
              getTopProducts
            }}
          >
              {children}
          </ProductsContext.Provider>
      );
}
