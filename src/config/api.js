// URL base da API
export const API_BASE_URL = 'https://sua-api.com'; // Substitua pela URL real da sua API

// Endpoints
export const ENDPOINTS = {
  tutorials: '/tutorials',
  categories: '/categories',
};

// Função para buscar tutoriais
export const fetchTutorials = async (category) => {
  try {
    // Por enquanto, retorna os dados mockados
    const response = await import('../data/mockData');
    return response.tutorials[category];
    
    // Quando a API estiver pronta, descomente o código abaixo
    /*
    const response = await fetch(`${API_BASE_URL}${ENDPOINTS.tutorials}?category=${category}`);
    if (!response.ok) {
      throw new Error('Erro ao buscar tutoriais');
    }
    return await response.json();
    */
  } catch (error) {
    console.error('Erro:', error);
    throw error;
  }
}; 