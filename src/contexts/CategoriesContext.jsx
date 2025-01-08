import { createContext, useState } from 'react';
import { useApi } from '../hooks/useApi';

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState();
    const [topCategories, setTopCategories] = useState()
    const api = useApi();

    const getCategories = async () => {
      if (!categories) {
        const data = await api.getCategories();
        setCategories(data);
        return data
      }
    }

    const getTopCategories = async () => {
      if(!topCategories) {
        const data = await api.getTopCategories();
        setTopCategories(data);
        return data
      }
    }

  return (
          <CategoriesContext.Provider 
          value={{
            categories,
            topCategories,
            getCategories,
            getTopCategories
          }}
          >
              {children}
          </CategoriesContext.Provider>
      );
}
