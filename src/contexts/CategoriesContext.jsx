import { createContext, useState } from 'react';
import { useApi } from '../hooks/useApi';

export const CategoriesContext = createContext();

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState();
    const [topCategories, setTopCategories] = useState()
    const [category, setCategory] = useState()
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

    const getCategoryById = async (id) => {
      const data = await api.getCategoryById(id)
      setCategory(data)
      return data
    }

  return (
          <CategoriesContext.Provider 
          value={{
            category,
            categories,
            topCategories,
            getCategories,
            getTopCategories,
            getCategoryById
          }}
          >
              {children}
          </CategoriesContext.Provider>
      );
}
