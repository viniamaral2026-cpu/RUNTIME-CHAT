// Chat API Service - Conecta com o backend RUNTIME-BACKEND
// Base URL da API do backend

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api';

export const chatService = {
  // Obter conversas
  getConversations: async () => {
    const response = await fetch(`${API_BASE}/conversations/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) throw new Error('Failed to fetch conversations');
    return response.json();
  },

  // Criar nova conversa
  createConversation: async (title = 'Nova conversa') => {
    const response = await fetch(`${API_BASE}/conversations/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title }),
    });
    if (!response.ok) throw new Error('Failed to create conversation');
    return response.json();
  },

  // Obter mensagens de uma conversa
  getMessages: async (conversationId) => {
    const response = await fetch(`${API_BASE}/conversations/${conversationId}/messages/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) throw new Error('Failed to fetch messages');
    return response.json();
  },

  // Enviar mensagem
  sendMessage: async (conversationId, content, files = []) => {
    const formData = new FormData();
    formData.append('content', content);
    files.forEach(file => formData.append('files', file));
    
    const response = await fetch(`${API_BASE}/conversations/${conversationId}/messages/`, {
      method: 'POST',
      body: formData,
    });
    if (!response.ok) throw new Error('Failed to send message');
    return response.json();
  },

  // Editar mensagem
  editMessage: async (conversationId, messageId, content) => {
    const response = await fetch(`${API_BASE}/conversations/${conversationId}/messages/${messageId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content }),
    });
    if (!response.ok) throw new Error('Failed to edit message');
    return response.json();
  },

  // Excluir mensagem
  deleteMessage: async (conversationId, messageId) => {
    const response = await fetch(`${API_BASE}/conversations/${conversationId}/messages/${messageId}/`, {
      method: 'DELETE',
    });
    if (!response.ok) throw new Error('Failed to delete message');
    return response.json();
  },
};

export const authService = {
  login: async (email, password) => {
    const response = await fetch(`${API_BASE}/auth/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    if (!response.ok) throw new Error('Failed to login');
    return response.json();
  },

  register: async (name, email, password) => {
    const response = await fetch(`${API_BASE}/auth/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    if (!response.ok) throw new Error('Failed to register');
    return response.json();
  },
};

export const userService = {
  getProfile: async () => {
    const response = await fetch(`${API_BASE}/users/profile/`);
    if (!response.ok) throw new Error('Failed to fetch profile');
    return response.json();
  },
};

export const projectService = {
  getProjects: async () => {
    const response = await fetch(`${API_BASE}/projects/`);
    if (!response.ok) throw new Error('Failed to fetch projects');
    return response.json();
  },

  createProject: async (name, description) => {
    const response = await fetch(`${API_BASE}/projects/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description }),
    });
    if (!response.ok) throw new Error('Failed to create project');
    return response.json();
  },
];
