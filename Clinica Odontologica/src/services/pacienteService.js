import api from './api';

// Listar todos os pacientes
export const listarPacientes = async () => {
  try {
    const response = await api.get('/pacientes');
    return response.data;
  } catch (error) {
    console.error('Erro ao listar pacientes:', error);
    throw error;
  }
};

// Buscar paciente por ID
export const buscarPaciente = async (id) => {
  try {
    const response = await api.get(`/pacientes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar paciente:', error);
    throw error;
  }
};

// Cadastrar novo paciente
export const cadastrarPaciente = async (paciente) => {
  try {
    const response = await api.post('/pacientes', paciente);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar paciente:', error);
    throw error;
  }
};

// Atualizar paciente
export const atualizarPaciente = async (id, paciente) => {
  try {
    const response = await api.put(`/pacientes/${id}`, paciente);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar paciente:', error);
    throw error;
  }
};

// Deletar paciente
export const deletarPaciente = async (id) => {
  try {
    const response = await api.delete(`/pacientes/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar paciente:', error);
    throw error;
  }
};
