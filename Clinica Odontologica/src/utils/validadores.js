// Validar CPF
export const validarCPF = (cpf) => {
  const limpo = cpf.replace(/\D/g, '');
  
  if (limpo.length !== 11) return false;
  if (/^(\d)\1{10}$/.test(limpo)) return false; // CPFs com todos números iguais
  
  let soma = 0;
  let resto;
  
  // Validar primeiro dígito
  for (let i = 1; i <= 9; i++) {
    soma += parseInt(limpo.substring(i - 1, i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(limpo.substring(9, 10))) return false;
  
  // Validar segundo dígito
  soma = 0;
  for (let i = 1; i <= 10; i++) {
    soma += parseInt(limpo.substring(i - 1, i)) * (12 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) resto = 0;
  if (resto !== parseInt(limpo.substring(10, 11))) return false;
  
  return true;
};

// Validar Email
export const validarEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Validar Telefone (10 ou 11 dígitos)
export const validarTelefone = (telefone) => {
  const limpo = telefone.replace(/\D/g, '');
  return limpo.length === 10 || limpo.length === 11;
};

// Validar Data (não pode ser futura)
export const validarData = (data) => {
  const dataInformada = new Date(data);
  const hoje = new Date();
  return dataInformada <= hoje;
};

// Validar CRO (5 dígitos + UF)
export const validarCRO = (cro) => {
  const regex = /^\d{5}-[A-Z]{2}$/;
  return regex.test(cro);
};

// Validar campo obrigatório
export const validarObrigatorio = (valor) => {
  return valor && valor.trim() !== '';
};
