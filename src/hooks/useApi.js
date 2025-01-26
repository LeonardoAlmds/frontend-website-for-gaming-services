import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
});

export const useApi = () => ({
  
  getCategories: async() => {
    const response = await api.get('/categories/get-all', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data
  },

  getCategoryById: async (id, token) => {
    const response = await api.get(`/categories/id/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data
  },  

  getProducts: async() => {
    const response = await api.get('/products/get-all', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    return response.data
  },

  getProductById: async (id, token) => {
    const response = await api.get(`/products/id/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data
  },

  getProductByCategoryId: async(categoryId, token) => {
    const response = await api.get(`/products/category/${categoryId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data
  }

})