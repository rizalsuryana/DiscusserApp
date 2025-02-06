import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadForm from '../components/thread/materials/ThreadForm';
import ROUTE_PATH from '../config/routePaths';
import { asyncAddThread } from '../states/threads/action';
import Container from '../components/styled/Container';
import CardThread from '../components/styled/CardThread';


const AddThread = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onAddThread = ({ title, body, category }) => {
    const payload ={
      title,
      body,
      category
    };
    dispatch(asyncAddThread(payload));
    navigate(ROUTE_PATH.HOME_PAGE);
  };

  return (
    <Container>
      <CardThread>
        <ThreadForm onAddThread={onAddThread}/>
      </CardThread>
    </Container>
  );
};

export default AddThread;