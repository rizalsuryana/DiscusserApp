import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import useInput from '../../hooks/useInput';

const LoginForm = ({ login }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const handleLogin = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (

    <form onSubmit={handleLogin} className="login-form">
      <div>
        <h2 className="login-page-head">
            Login to Theadify
        </h2>
        <div className="login-page__email">
          <input type="text"
            value={email}
            onChange={onEmailChange}
            placeholder='Email'
            required
          />
        </div>
        <div className="login-page__password">
          <input type="password"
            value={password}
            onChange={onPasswordChange}
            placeholder='Password'
            required
          />
        </div>
        <div className="login-page__button">
          <Button className="login-button" type='submit'>
                Login
          </Button>
        </div>
        <div className="login-page__create-account">
          <Link to='/register'>Create an Account</Link>
        </div>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired
};

export default LoginForm;