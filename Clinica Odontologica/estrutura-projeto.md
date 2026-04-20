# 🦷 Estrutura do Projeto - Clínica Odontológica

```
clinica-odontologica/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/           
 reutilizáveis
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Loading.jsx
│   │   └── Modal.jsx
│   │
│   ├── pages/               
│   │   ├── Home.jsx
│   │   ├── Pacientes/
│   │   │   ├── ListarPacientes.jsx
│   │   │   ├── CadastrarPaciente.jsx
│   │   │   └── EditarPaciente.jsx
│   │   │
│   │   ├── Consultas/
│   │   │   ├── ListarConsultas.jsx
│   │   │   ├── AgendarConsulta.jsx
│   │   │   └── EditarConsulta.jsx
│   │   │
│   │   └── Dentistas/
│   │       ├── ListarDentistas.jsx
│   │       ├── CadastrarDentista.jsx
│   │       └── EditarDentista.jsx
│   │
│   ├── services/            # Chamadas de API
│   │   ├── api.js          # Configuração do axios
│   │   ├── pacienteService.js
│   │   ├── consultaService.js
│   │   └── dentistaService.js
│   │
│   ├── utils/              # Funções extras
│   │   ├── formatadores.js  # Formatar CPF, telefone, data
│   │   └── validadores.js   # Validações de formulário
│   │
│   ├── styles/             # Estilos CSS
│   │   ├── global.css
│   │   ├── navbar.css
│   │   └── tabelas.css
│   │
│   ├── App.jsx             # Componente principal
│   ├── routes.jsx          # Configura as rotas
│   └── index.js            # Ponto de entrada
│
├── package.json
└── README.md


```bash
npm install react-router-dom axios
```
