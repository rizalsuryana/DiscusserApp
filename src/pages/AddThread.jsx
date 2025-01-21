import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadForm from '../components/thread/materials/ThreadForm';
import ROUTE_PATH from '../config/routePaths';
import { asyncAddThread } from '../states/threads/action';

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
    <div className="add-thread">
      <div className="add-thread__form">
        <ThreadForm onAddThread={onAddThread}/>
      </div>
    </div>
  );
};

export default AddThread;