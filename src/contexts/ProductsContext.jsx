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

    const getProductById = async (id) => {
      const data = await api.getProductById(id);
      setProduct(data)
      return data
    }

    const getProductByCategoryId = async (categoryId) => {
      const data = await api.getProductByCategoryId(categoryId);
      setProducts(data);
      return data
    }

  return (
          <ProductsContext.Provider 
            value={{
              product,
              products,
              topProducts,
              getProducts,
              getProductById,
              getTopProducts,
              getProductByCategoryId
            }}
          >
              {children}
          </ProductsContext.Provider>
      );
}
