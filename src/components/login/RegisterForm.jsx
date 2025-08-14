import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import * as UI from './AuthStyle';

const RegisterForm = ({ register }) => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const handleRegister = (e) => {
    e.preventDefault();
    register({ name, email, password });
  };

  return (
    <UI.AuthContainer>
      <UI.AuthBox>
        <UI.AuthImageWrapper>
          <UI.AuthImage src="icon.webp" alt="Discusser" />
        </UI.AuthImageWrapper>
        <UI.AuthHeading>Create Account Discusser</UI.AuthHeading>
        <UI.AuthForm onSubmit={handleRegister}>

          <UI.InputWrapper>
            <UI.InputIcon><UI.FiUser /></UI.InputIcon>
            <UI.AuthInput
              type="text"
              value={name}
              onChange={onNameChange}
              placeholder="Name"
              required
            />
          </UI.InputWrapper>

          <UI.InputWrapper>
            <UI.InputIcon><UI.FiMail /></UI.InputIcon>
            <UI.AuthInput
              type="email"
              value={email}
              onChange={onEmailChange}
              placeholder="Email"
              required
            />
          </UI.InputWrapper>

          <UI.InputWrapper>
            <UI.InputIcon><UI.FiLock /></UI.InputIcon>
            <UI.AuthInput
              type="password"
              value={password}
              onChange={onPasswordChange}
              placeholder="Password"
              minLength="8"
              required
            />
          </UI.InputWrapper>

          <UI.AuthButton type="submit">Register</UI.AuthButton>
        </UI.AuthForm>
        <UI.AuthLinkWrapper>
          <span>Already have an account? </span>
          <a href="/">Log in here</a>
        </UI.AuthLinkWrapper>
      </UI.AuthBox>
    </UI.AuthContainer>
  );
};

RegisterForm.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterForm;
