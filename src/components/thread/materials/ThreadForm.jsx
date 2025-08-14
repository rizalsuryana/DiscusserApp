import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../../../hooks/useInput';
import * as UI from '../ThreadStyle';

const ThreadForm = ({ onAddThread }) => {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddThread = (event) => {
    event.preventDefault();
    if (!title.trim() || !category.trim() || !body.trim()) return;
    setIsLoading(true);
    onAddThread({ title, category, body });
    setTimeout(() => setIsLoading(false), 1000);
  };

  return (
    <UI.ThreadFormContainer>
      <h2>Create Discussion</h2>
      <form onSubmit={handleAddThread}>
        <input
          type="text"
          value={title}
          onChange={onTitleChange}
          placeholder="Topic"
          required
        />

        <input
          type="text"
          value={category}
          onChange={onCategoryChange}
          placeholder="Category"
          required
        />

        <textarea
          value={body}
          onChange={onBodyChange}
          placeholder="What would you like to discuss?"
          rows={5}
          required
        />

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Posting...' : 'Post'}
        </button>
      </form>
    </UI.ThreadFormContainer>
  );
};

ThreadForm.propTypes = {
  onAddThread: PropTypes.func.isRequired,
};

export default ThreadForm;
