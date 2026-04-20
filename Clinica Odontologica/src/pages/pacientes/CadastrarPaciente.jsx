import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cadastrarPaciente } from '../../services/pacienteService';
import { validarCPF, validarEmail } from '../../utils/validadores';
import './pacientes.css';

function CadastrarPaciente() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    telefone: '',
    email: '',
    endereco: '',
    dataNascimento: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validações básicas
    if (!formData.nome || !formData.cpf || !formData.telefone) {
      alert('Preencha os campos obrigatórios!');
      return;
    }

    if (!validarCPF(formData.cpf)) {
      alert('CPF inválido!');
      return;
    }

    if (formData.email && !validarEmail(formData.email)) {
      alert('Email inválido!');
      return;
    }

    try {
      setLoading(true);
      await cadastrarPaciente(formData);
      alert('Paciente cadastrado com sucesso!');
      navigate('/pacientes'); // Redireciona para a lista
    } catch (error) {
      alert('Erro ao cadastrar paciente!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Cadastrar Novo Paciente</h1>

      <form onSubmit={handleSubmit} className="formulario">
        <div className="form-group">
          <label>Nome Completo *</label>
          <input 
            type="text" 
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>CPF *</label>
            <input 
              type="text" 
              name="cpf"
              value={formData.cpf}
              onChange={handleChange}
              placeholder="000.000.000-00"
              required
            />
          </div>

          <div className="form-group">
            <label>Data de Nascimento</label>
            <input 
              type="date" 
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Telefone *</label>
            <input 
              type="text" 
              name="telefone"
              value={formData.telefone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Endereço</label>
          <input 
            type="text" 
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
            placeholder="Rua, número, bairro, cidade"
          />
        </div>

        <div className="form-acoes">
          <button 
            type="button" 
            onClick={() => navigate('/pacientes')}
            className="btn btn-cancelar"
          >
            Cancelar
          </button>
          <button 
            type="submit" 
            className="btn btn-primary"
            disabled={loading}
          >
            {loading ? 'Salvando...' : 'Cadastrar'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CadastrarPaciente;
