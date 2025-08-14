import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../../hooks/useInput';
import * as UI from './AuthStyle';

const LoginForm = ({ login }) => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password });
  };

  return (
    <UI.AuthContainer>
      <UI.AuthBox>
        <UI.AuthImageWrapper>
          <UI.AuthImage src="icon.webp" alt="Discusser" />
        </UI.AuthImageWrapper>
        <UI.AuthHeading>Login to Discusser</UI.AuthHeading>
        <UI.AuthForm onSubmit={handleLogin}>

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
              required
            />
          </UI.InputWrapper>

          <UI.AuthButton type="submit">Login</UI.AuthButton>
        </UI.AuthForm>
        <UI.AuthLinkWrapper>
          <span>New Here? </span>
          <a href="/register">Create Account</a>
        </UI.AuthLinkWrapper>
      </UI.AuthBox>
    </UI.AuthContainer>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
