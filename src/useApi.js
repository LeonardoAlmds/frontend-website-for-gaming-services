import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const useApi = () => ({
  
  getCategories: async() => {
    const response = await api.get('/api/categories')
    return response.data
  },

  getTopCategories: async() => {
    const response = await api.get('/api/categories/top')
    return response.data
  },

  getProducts: async() => {
    const response = await api.get('/api/products')
    return response.data
  },

  getProductsById: async(id) => {
    const response = await api.get(`/api/products?id=${id}`)
    return response.data
  },

  getProductsByCategory: async(category) => {
    const response = await api.get(`/api/products?category_id=${category}`)
    return response.data
  },

  getTopProducts: async() => {
    const response = await api.get('/api/products/top-rated')
    return response.data
  },

  

})