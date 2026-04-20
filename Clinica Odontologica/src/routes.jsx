import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

// Importar páginas de Pacientes
import ListarPacientes from './pages/Pacientes/ListarPacientes';
import CadastrarPaciente from './pages/Pacientes/CadastrarPaciente';
import EditarPaciente from './pages/Pacientes/EditarPaciente';

// Importar páginas de Consultas
import ListarConsultas from './pages/Consultas/ListarConsultas';
import AgendarConsulta from './pages/Consultas/AgendarConsulta';
import EditarConsulta from './pages/Consultas/EditarConsulta';

// Importar páginas de Dentistas
import ListarDentistas from './pages/Dentistas/ListarDentistas';
import CadastrarDentista from './pages/Dentistas/CadastrarDentista';
import EditarDentista from './pages/Dentistas/EditarDentista';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Página inicial */}
        <Route path="/" element={<Home />} />
        
        {/* Rotas de Pacientes */}
        <Route path="/pacientes" element={<ListarPacientes />} />
        <Route path="/pacientes/cadastrar" element={<CadastrarPaciente />} />
        <Route path="/pacientes/editar/:id" element={<EditarPaciente />} />
        
        {/* Rotas de Consultas */}
        <Route path="/consultas" element={<ListarConsultas />} />
        <Route path="/consultas/agendar" element={<AgendarConsulta />} />
        <Route path="/consultas/editar/:id" element={<EditarConsulta />} />
        
        {/* Rotas de Dentistas */}
        <Route path="/dentistas" element={<ListarDentistas />} />
        <Route path="/dentistas/cadastrar" element={<CadastrarDentista />} />
        <Route path="/dentistas/editar/:id" element={<EditarDentista />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
