import React from 'react';
import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';

const PageView = (attributes) => {
  const { children } = attributes;

  return (
    <div>
      {children}
      <ToastContainer
        position="top"
        autoClose={2400}
        theme="dark"
      />
    </div>
  );
};

PageView.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageView;