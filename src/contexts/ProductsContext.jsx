import { createContext, useState } from 'react';
import { useApi } from '../hooks/useApi';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
    const [topProducts, setTopProducts] = useState()
    const api = useApi();

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
              topProducts,
              getTopProducts
            }}
          >
              {children}
          </ProductsContext.Provider>
      );
}
