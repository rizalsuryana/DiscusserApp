import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

const LoginInput = ({ login }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] =  useInput('');

  return (
    <form className='login-input'>
      <input type='email' value={email} onChange={onEmailChange} placeholder='email'/>
      <input type="password" value={password} onChange={onPasswordChange} placeholder='password' />
      <button type='button' onClick={()=> login({ email, password })}></button>
    </form>
  );
};

LoginInput.propTypes = {
  login: PropTypes.func.isRequired
};

export default LoginInput;