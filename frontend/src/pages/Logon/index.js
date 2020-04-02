import React, {useState, useEffect} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'
import { ToastContainer, toast } from 'react-toastify'

import api from '../../services/api';

import './style.css';
import 'react-toastify/dist/ReactToastify.css';
import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

function Logon() {
  const [id, setId] = useState('');

  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('sessions', { id });

      localStorage.setItem('ong_id', id);
      localStorage.setItem('ong_name', response.data.name);

      toast(`Bem-Vindo ${response.data.name}`, {
        autoClose: 2500
      });

      setTimeout(() => {
        history.push('/profile');
      }, 2500);

    }catch(err){
      toast.error("Falha no Login");
    }

  }

  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="Be The Hero"/>

        <form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>

          <input
            value={id}
            onChange={e => setId(e.target.value)}
            placeholder="Sua ID"/>
          <button className="button" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="E02041"/> Não tenho cadastro
          </Link>
          <ToastContainer/>
        </form>
      </section>

      <img src={ heroesImg } alt="Heroes"/>
    </div>
  );
}

export default Logon;