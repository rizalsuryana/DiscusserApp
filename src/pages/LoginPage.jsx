import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from '../components/login/LoginForm';
import { asyncSetAuthUser } from '../states/authUser/action';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <div>
      <div className="flex">
        <LoginForm login={onLogin}/>
      </div>
    </div>
  );
};

export default LoginPage;