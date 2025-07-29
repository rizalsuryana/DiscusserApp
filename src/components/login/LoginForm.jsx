import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import useInput from "../../hooks/useInput";
import {
  AuthContainer,
  AuthBox,
  AuthImageWrapper,
  AuthImage,
  AuthForm,
  AuthHeading,
  AuthInput,
  AuthButton,
  AuthLinkWrapper,
} from "../styled/AuthStyled";

const LoginForm = ({ login }) => {
  const [email, onEmailChange] = useInput("");
  const [password, onPasswordChange] = useInput("");

  const handleLogin = (event) => {
    event.preventDefault();
    login({ email, password });
  };

  return (
    <AuthContainer>
      <AuthBox>
        <AuthImageWrapper>
          <AuthImage src="icon.webp" alt="Discusser" />
        </AuthImageWrapper>
        <AuthHeading>Login to Discusser</AuthHeading>
        <AuthForm onSubmit={handleLogin}>
          <AuthInput
            type="text"
            value={email}
            onChange={onEmailChange}
            placeholder="Email"
            required
          />
          <AuthInput
            type="password"
            value={password}
            onChange={onPasswordChange}
            placeholder="Password"
            required
          />
          <AuthButton type="submit">Login</AuthButton>
        </AuthForm>
        <AuthLinkWrapper>
          <span>New Here? </span>
          <Link to="/register">Create Account</Link>
        </AuthLinkWrapper>
      </AuthBox>
    </AuthContainer>
  );
};

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginForm;
