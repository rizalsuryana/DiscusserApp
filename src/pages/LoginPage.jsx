import React from 'react';
import { useDispatch } from 'react-redux';
import PageView from '../components/page-materials/PageView';
import LoginForm from '../components/login/LoginForm';
import { asyncSetAuthUser } from '../states/authUser/action';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <PageView>
      <div className="flex">
        <LoginForm login={onLogin}/>
      </div>
    </PageView>
  );
};

export default LoginPage;