import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children }) => {
  return (
    <div className="card-card">
      {children}
    </div>
  );
};

const Title = ({ children }) => {
  return (
    <div className="card-title">
      <h1>
        {children}
      </h1>
    </div>
  );
};

const Body = ({ children }) => {
  return (
    <div className="card-body">
      {children}
    </div>
  );
};

const Footer = ({ children }) => {
  return (
    <div className="card-footer">
      {children}
    </div>
  );
};

Card.propTypes ={
  children: PropTypes.node,
};

Title.propTypes={
  children: PropTypes.node,
};

Body.propTypes={
  children: PropTypes.node,
};

Footer.propTypes={
  children: PropTypes.node,
};

Card.defaultProps = {
  children: ''
};

Title.defaultProps = {
  children: ''
};

Body.defaultProps = {
  children: ''
};

Footer.defaultProps = {
  children: ''
};

Card.Title = Title,
Card.Body = Body,
Card.Footer = Footer;

export default Card;
