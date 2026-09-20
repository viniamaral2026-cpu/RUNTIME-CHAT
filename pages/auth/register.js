import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    if (password !== confirmPassword) {
      setError('As senhas não coincidem');
      setLoading(false);
      return;
    }
    
    // Will be connected to /api/auth/register
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="w-full max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-primary-900">Cadastro</h2>
        
        {error && (
          <div className="bg-red-100 text-red-800 p-3 rounded-md">
            {error}
          </div>
        )}
        
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            placeholder="Nome completo"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          
          <input
            type="password"
            placeholder="Confirmar senha"
            value={confirmPassword}
            onChange={e => setConfirmPassword(e.target.value)}
            required
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          
          <button
            type="submit"
            className="w-full px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Criar conta
          </button>
          
          <div className="text-center text-sm text-muted-foreground">
            <a href="/auth/login">Já tem uma conta? Entrar</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
