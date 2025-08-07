import React from 'react';

const Contato = () => {
  return (
    <div>
      <h1>Contato</h1>
      <section>
        <h2>Formulário de Contato</h2>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="E-mail" />
          <textarea placeholder="Mensagem"></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
      <section>
        <h2>Localização</h2>
        {/* Mapa do Google */}
      </section>
      <section>
        <h2>Informações de Contato</h2>
        <p>Telefone: (19) 3807-5377</p>
        <p>E-mail: e138dir@cps.sp.gov.br</p>
      </section>
    </div>
  );
};

export default Contato;