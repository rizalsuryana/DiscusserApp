import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../button/Button';
import useInput from '../../hooks/useInput';

const RegisterForm = ({ register }) => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const handleRegister = (event) => {
    event.preventDefault();
    register({ name, email, password });
  };

  return (
    <form className="form-register" onSubmit={handleRegister}>
      <div>
        <div className="register-image">
          <img className='image-register' src="icon.webp" alt="Discusser" />
        </div>
        <h2 className="register-page-head">
            Create Account Discusser
        </h2>
        <div className="register-input__name">
          <input type="text" className="register-input__name-field"
            value={name} onChange={onNameChange} placeholder='Name' required
          />
        </div>
        <div className="register-input__email">
          <input type="text" className="register-input__email-field"
            value={email} onChange={onEmailChange}
            placeholder='Email' required
          />
        </div>
        <div className="register-input__password">
          <input type="password" className="register-input__password-field"
            value={password} onChange={onPasswordChange}
            placeholder='Password' required
          />
        </div>
        <div className="register-input__button">
          <Button type='submit' className='register-button'>
                Register
          </Button>
        </div>
        <div className="register-input__login-link">
          <span>Already Have Acoount? </span>
          <Link to='/'>LogIn Here</Link>
        </div>
      </div>
    </form>
  );
};


RegisterForm.propTypes ={
  register: PropTypes.func.isRequired
};

export default RegisterForm;