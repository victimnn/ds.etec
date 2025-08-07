import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre">Sobre o Curso</Link></li>
        <li><Link to="/projetos">Projetos dos Alunos</Link></li>
        <li><Link to="/vestibulinho">Vestibulinho</Link></li>
        <li><Link to="/mercado">Mercado de Trabalho</Link></li>
        <li><Link to="/contato">Contato</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
