import React from 'react';

const Home = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-4xl font-bold text-primary-900 mb-6">
        Bem-vindo ao RUNTIME-CHAT
      </h1>
      <p className="text-lg text-muted-foreground mb-8">
        Plataforma de Inteligência Artificial conversacional
      </p>
      <div className="space-y-4">
        <h3 className="text-xl font-medium">Como posso ajudar?</h3>
        <ul className="list-disc list-inside text-sm text-gray-600">
          <li>Desenvolver uma aplicação</li>
          <li>Analisar um arquivo</li>
          <li>Explicar um código</li>
          <li>Criar documentação</li>
          <li>Resolver um problema</li>
          <li>Planejar um projeto</li>
        </ul>
      </div>
    </div>
  );
};

export default Home;
