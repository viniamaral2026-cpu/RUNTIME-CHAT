import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    // Will be connected to /api/auth/login
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white p-8 flex items-center justify-center">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-primary-900">Entrar</h2>
        
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded-md">
            {error}
          </div>
        )}
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          
          <div className="flex items-center justify-between">
            <input
              type={showPassword ? 'password' : 'password'}
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-sm text-primary-600 underline"
            >
              {showPassword ? 'Ocultar' : 'Mostrar'}
            </button>
          </div>
          
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Entrar
          </button>
          
          <div className="text-sm text-muted-foreground">
            <a href="/auth/register">Criar conta</a>
            <span>&nbsp;|&nbsp;</span>
            <a href="/auth/forgot-password">Esqueci minha senha</a>
          </div>
        </form>
        
        <div className="mt-6 text-center text-sm text-muted-foreground">
          <span>Não tem uma conta? <a href="/register">Crie uma</a></span>
        </div>
      </div>
    </div>
  );
};

export default Login;
