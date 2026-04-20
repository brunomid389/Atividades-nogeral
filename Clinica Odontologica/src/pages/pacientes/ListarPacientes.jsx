import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { listarPacientes, deletarPaciente } from '../../services/pacienteService';
import { formatarCPF, formatarTelefone } from '../../utils/formatadores';
import './pacientes.css';

function ListarPacientes() {
  const [pacientes, setPacientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState('');

  useEffect(() => {
    carregarPacientes();
  }, []);

  const carregarPacientes = async () => {
    try {
      setLoading(true);
      const dados = await listarPacientes();
      setPacientes(dados);
    } catch (error) {
      alert('Erro ao carregar pacientes!');
    } finally {
      setLoading(false);
    }
  };

  const handleDeletar = async (id, nome) => {
    if (window.confirm(`Deseja realmente excluir o paciente ${nome}?`)) {
      try {
        await deletarPaciente(id);
        alert('Paciente excluído com sucesso!');
        carregarPacientes(); // Recarrega a lista
      } catch (error) {
        alert('Erro ao excluir paciente!');
      }
    }
  };

  // Filtrar pacientes pela busca
  const pacientesFiltrados = pacientes.filter(p => 
    p.nome.toLowerCase().includes(busca.toLowerCase()) ||
    p.cpf.includes(busca)
  );

  if (loading) {
    return <div className="container">Carregando...</div>;
  }

  return (
    <div className="container">
      <div className="header-lista">
        <h1>🦷 Pacientes</h1>
        <Link to="/pacientes/cadastrar" className="btn btn-primary">
          + Novo Paciente
        </Link>
      </div>

      <div className="busca">
        <input 
          type="text" 
          placeholder="Buscar por nome ou CPF..."
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
      </div>

      <table className="tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>CPF</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pacientesFiltrados.length === 0 ? (
            <tr>
              <td colSpan="5" style={{textAlign: 'center'}}>
                Nenhum paciente encontrado
              </td>
            </tr>
          ) : (
            pacientesFiltrados.map(paciente => (
              <tr key={paciente.id}>
                <td>{paciente.nome}</td>
                <td>{formatarCPF(paciente.cpf)}</td>
                <td>{formatarTelefone(paciente.telefone)}</td>
                <td>{paciente.email}</td>
                <td className="acoes">
                  <Link 
                    to={`/pacientes/editar/${paciente.id}`} 
                    className="btn btn-editar"
                  >
                    Editar
                  </Link>
                  <button 
                    onClick={() => handleDeletar(paciente.id, paciente.nome)}
                    className="btn btn-deletar"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListarPacientes;
