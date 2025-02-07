import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';
import { ThreadFormContainer, InputField, TextAreaField, SubmitButton } from '../../styled/ThreadFormStyled';

const ThreadForm = ({ onAddThread }) => {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddThread = (event) => {
    event.preventDefault();
    setIsLoading(true); // Set loading true sebelum submit

    onAddThread({ title, category, body });

    setTimeout(() => setIsLoading(false), 1000); // Simulasi loading
  };

  return (
    <ThreadFormContainer>
      <h2>Create Discussion</h2>
      <form onSubmit={handleAddThread}>
        <InputField
          type="text"
          value={title}
          onChange={onTitleChange}
          placeholder="Topic"
          required
        />
        <InputField
          type="text"
          value={category}
          onChange={onCategoryChange}
          placeholder="Category"
          required
        />
        <TextAreaField
          value={body}
          onChange={onBodyChange}
          placeholder="What would you like to discuss ?"
          required
        />
        <SubmitButton type="submit" loading={isLoading}>
          {isLoading ? 'Posting...' : 'Post'}
        </SubmitButton>
      </form>
    </ThreadFormContainer>
  );
};

ThreadForm.propTypes = {
  onAddThread: PropTypes.func.isRequired,
};

export default ThreadForm;
