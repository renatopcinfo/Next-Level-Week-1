import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';

const CreatePoint: React.FC = () => {
  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para Home
        </Link>
      </header>

      <form>
        <h1>Cadastro do <br /> ponto de coleta</h1>
      </form>
    </div>
  );
}

export default CreatePoint;