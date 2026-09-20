import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <h1 className="text-4xl font-bold text-primary-900 mb-6">
        Bem-vindo ao RUNTIME-CHAT
      </h1>
      <p className="text-lg text-text-muted mb-8">
        Plataforma de Inteligência Artificial conversacional
      </p>
      <div className="space-y-4">
        <h3 className="text-xl font-medium">Como posso ajudar?</h3>
        <ul className="list-disc list-inside text-text-muted mb-8 space-y-2">
          <li>Desenvolver uma aplicação</li>
          <li>Analisar um arquivo</li>
          <li>Explicar um código</li>
          <li>Criar documentação</li>
          <li>Resolver um problema</li>
          <li>Planejar um projeto</li>
        </ul>
        <div className="mt-4">
          <button
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            onClick={() => window.location.href = '/auth/login'}
          >
            Entrar / Registrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;