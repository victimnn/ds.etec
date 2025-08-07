import React from 'react';

const Home = () => {
  return (
    <div>
      <section className="banner">
        {/* Carrossel de imagens e vídeos */}
        <h2>Bem-vindo ao curso de Desenvolvimento de Sistemas</h2>
        <button>Inscreva-se no Vestibulinho!</button>
      </section>
      <section className="sobre">
        <h3>Sobre o Curso</h3>
        <p>O curso de Técnico em Desenvolvimento de Sistemas (M-Tec) da Etec João Belarmino é a escolha ideal para quem busca uma formação completa e atualizada na área de tecnologia. Integrado ao Ensino Médio, o curso combina a base sólida do conhecimento geral com as competências técnicas essenciais para o mercado de trabalho.</p>
      </section>
      <section className="diferenciais">
        <h3>Diferenciais</h3>
        <ul>
          <li>Projetos práticos</li>
          <li>Parcerias com empresas</li>
          <li>Infraestrutura moderna</li>
        </ul>
      </section>
      <section className="instagram">
        <h3>Feed do Instagram</h3>
        {/* Integração com o Instagram */}
      </section>
    </div>
  );
};

export default Home;