import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
});

// Cardapio endpoints
export const getCardapio = () => api.get('/cardapio');
export const getCardapioById = (id) => api.get(`/cardapio/${id}`);
export const createCardapio = (data) => api.post('/cardapio', data);
export const updateCardapio = (id, data) => api.put(`/cardapio/${id}`, data);
export const deleteCardapio = (id) => api.delete(`/cardapio/${id}`);

// Pizza endpoints
export const getPizzas = () => api.get('/pizza');

export default api; 