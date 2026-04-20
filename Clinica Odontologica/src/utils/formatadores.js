// Formatar CPF: 000.000.000-00
export const formatarCPF = (cpf) => {
  if (!cpf) return '';
  const limpo = cpf.replace(/\D/g, '');
  return limpo.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};

// Formatar Telefone: (00) 00000-0000
export const formatarTelefone = (telefone) => {
  if (!telefone) return '';
  const limpo = telefone.replace(/\D/g, '');
  
  if (limpo.length === 11) {
    return limpo.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
  } else if (limpo.length === 10) {
    return limpo.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
  }
  
  return telefone;
};

// Formatar Data: DD/MM/YYYY
export const formatarData = (data) => {
  if (!data) return '';
  const d = new Date(data);
  const dia = String(d.getDate()).padStart(2, '0');
  const mes = String(d.getMonth() + 1).padStart(2, '0');
  const ano = d.getFullYear();
  return `${dia}/${mes}/${ano}`;
};

// Formatar Hora: HH:MM
export const formatarHora = (hora) => {
  if (!hora) return '';
  return hora.substring(0, 5); // Pega apenas HH:MM
};

// Formatar CRO: 00000-UF
export const formatarCRO = (cro) => {
  if (!cro) return '';
  const limpo = cro.replace(/\D/g, '');
  const uf = cro.replace(/[0-9]/g, '').toUpperCase();
  return `${limpo}-${uf}`;
};

// Remover formatação (para enviar para API)
export const limparFormatacao = (texto) => {
  if (!texto) return '';
  return texto.replace(/\D/g, '');
};
