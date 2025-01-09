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

  getTopProducts: async() => {
    const response = await api.get('/api/products/top-rated')
    return response.data
  },

  getProductById: async(id) => {
    const response = await api.get(`/api/products?id=${id}`)
    console.log(response.data)
    return response.data
  },

  getProductByCategoryId: async(categoryId) => {
    console.log('hook' + categoryId)
    const response = await api.get('/api/products?category_id='+ categoryId)
    return response.data
  },

})