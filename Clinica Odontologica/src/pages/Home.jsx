import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';

function Home() {
  return (
    <div className="container">
      <div className="home-header">
        <h1>🦷 Bem-vindo à Clínica Odontológica</h1>
        <p>Sistema de gerenciamento de pacientes e consultas</p>
      </div>

      <div className="cards-container">
        <Link to="/pacientes" className="card">
          <div className="card-icon">👥</div>
          <h2>Pacientes</h2>
          <p>Gerenciar cadastro de pacientes</p>
        </Link>

        <Link to="/consultas" className="card">
          <div className="card-icon">📅</div>
          <h2>Consultas</h2>
          <p>Agendar e gerenciar consultas</p>
        </Link>

        <Link to="/dentistas" className="card">
          <div className="card-icon">👨‍⚕️</div>
          <h2>Dentistas</h2>
          <p>Gerenciar profissionais</p>
        </Link>
      </div>

      <div className="home-footer">
        <h3>Recursos do Sistema:</h3>
        <ul>
          <li>✅ Cadastro completo de pacientes</li>
          <li>✅ Agendamento de consultas</li>
          <li>✅ Gestão de dentistas</li>
          <li>✅ Busca e filtros</li>
          <li>✅ Interface simples e intuitiva</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
