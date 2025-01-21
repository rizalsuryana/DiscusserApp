import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import RegisterForm from '../components/login/RegisterForm';
import ROUTE_PATH from '../config/routePaths';
import { asyncRegisterUser } from '../states/users/action';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate(ROUTE_PATH.HOME_PAGE);
  };

  return (
    <div className="flex">
      <RegisterForm register={onRegister}/>
    </div>
  );
};

export default RegisterPage;