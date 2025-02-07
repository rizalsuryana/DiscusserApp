import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import {
  AuthContainer,
  AuthBox,
  AuthImageWrapper,
  AuthImage,
  AuthForm,
  AuthHeading,
  AuthInput,
  AuthButton,
  AuthLinkWrapper
} from '../styled/AuthStyled';

const RegisterForm = ({ register }) => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const handleRegister = (event) => {
    event.preventDefault();
    register({ name, email, password });
  };

  return (
    <AuthContainer>
      <AuthBox>
        <AuthImageWrapper>
          <AuthImage src="icon.webp" alt="Discusser" />
        </AuthImageWrapper>
        <AuthHeading>Create Account Discusser</AuthHeading>
        <AuthForm onSubmit={handleRegister}>
          <AuthInput type="text" value={name} onChange={onNameChange} placeholder="Name" required />
          <AuthInput type="email" value={email} onChange={onEmailChange} placeholder="Email" required />
          <AuthInput type="password" value={password} onChange={onPasswordChange} placeholder="Password" minLength="8" required />
          <AuthButton type="submit">Register</AuthButton>
        </AuthForm>
        <AuthLinkWrapper>
          <span>Already have an account? </span>
          <Link to="/">Log in here</Link>
        </AuthLinkWrapper>
      </AuthBox>
    </AuthContainer>
  );
};

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired
};

export default RegisterForm;
