// API Services for RUNTIME-CHAT Administration
// These are conceptual services to be connected to backend API

export const authService = {
  login: async (email, password, rememberMe = false) => {
    // Will be connected to /api/auth endpoint
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, rememberMe })
    });
    return response.json();
  },
  
  register: async (name, email, password) => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password })
    });
    return response.json();
  },
  
  forgotPassword: async (email) => {
    const response = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email })
    });
    return response.json();
  },
  
  resetPassword: async (token, newPassword, confirmPassword) => {
    const response = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, newPassword, confirmPassword })
    });
    return response.json();
  },
  
  changePassword: async (currentPassword, newPassword, confirmNewPassword) => {
    const response = await fetch('/api/settings/security/change-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentPassword, newPassword, confirmNewPassword })
    });
    return response.json();
  }
};

export const userService = {
  getProfile: async () => {
    const response = await fetch('/api/users/profile');
    return response.json();
  },
  
  updateProfile: async (data) => {
    const response = await fetch('/api/users/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  }
};

export const conversationService = {
  getConversations: async () => {
    const response = await fetch('/api/conversations');
    return response.json();
  },
  
  createConversation: async (title = 'Nova conversa') => {
    const response = await fetch('/api/conversations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title })
    });
    return response.json();
  },
  
  getConversation: async (id) => {
    const response = await fetch(`/api/conversations/${id}`);
    return response.json();
  },
  
  updateConversation: async (id, data) => {
    const response = await fetch(`/api/conversations/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    return response.json();
  },
  
  deleteConversation: async (id) => {
    const response = await fetch(`/api/conversations/${id}`, {
      method: 'DELETE'
    });
    return response.json();
  }
};

export const messageService = {
  getMessages: async (conversationId) => {
    const response = await fetch(`/api/conversations/${conversationId}/messages`);
    return response.json();
  },
  
  sendMessage: async (conversationId, content, files = []) => {
    const response = await fetch(`/api/conversations/${conversationId}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content, files })
    });
    return response.json();
  },
  
  deleteMessage: async (conversationId, messageId) => {
    const response = await fetch(`/api/conversations/${conversationId}/messages/${messageId}`, {
      method: 'DELETE'
    });
    return response.json();
  },
  
  editMessage: async (conversationId, messageId, content) => {
    const response = await fetch(`/api/conversations/${conversationId}/messages/${messageId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    });
    return response.json();
  }
};

export const projectService = {
  getProjects: async () => {
    const response = await fetch('/api/projects');
    return response.json();
  },
  
  createProject: async (name, description) => {
    const response = await fetch('/api/projects', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description })
    });
    return response.json();
  },
  
  getProject: async (id) => {
    const response = await fetch(`/api/projects/${id}`);
    return response.json();
  }
};

export const fileService = {
  getFiles: async (projectId or conversationId) => {
    const response = await fetch('/api/files');
    return response.json();
  },
  
  uploadFile: async (file, destination) => {
    const formData = new FormData();
    formData.append('file', file);
    if (destination) formData.append('destination', destination);
    
    const response = await fetch('/api/files/upload', {
      method: 'POST',
      body: formData
    });
    return response.json();
  },
  
  deleteFile: async (fileId) => {
    const response = await fetch(`/api/files/${fileId}`, {
      method: 'DELETE'
    });
    return response.json();
  }
};

export const codexService = {
  getWorkspace: async () => {
    const response = await fetch('/api/codex/workspace');
    return response.json();
  },
  
  executeTask: async (task) => {
    const response = await fetch('/api/codex/execute', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(task)
    });
    return response.json();
  }
};
