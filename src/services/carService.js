import axios from 'axios';

// URL base da API
const api = axios.create({
  baseURL: 'http://localhost:5000',
});

// Função para listar os carros
export const listarCarros = async () => {
  try {
    const response = await api.get('/cars');
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Erro ao listar os carros:', error);
    throw error;
  }
};

// Função para adicionar um novo carro
export const adicionarCarro = async (carro) => {
  try {
    const response = await api.post('/cars', carro);
    return response.data;
  } catch (error) {
    console.error('Erro ao adicionar o carro:', error);
    throw error;
  }
};

// Função para editar um carro existente
export const editarCarro = async (carro) => {
    try {
      const response = await api.put('/cars', carro);
      return response.data;
    } catch (error) {
      console.error('Erro ao editar o carro:', error);
      throw error;
    }
  };

// Função para excluir um carro
export const excluirCarro = async (id) => {
  try {
    await api.delete(`/cars/${id}`);
  } catch (error) {
    console.error('Erro ao excluir o carro:', error);
    throw error;
  }
};
