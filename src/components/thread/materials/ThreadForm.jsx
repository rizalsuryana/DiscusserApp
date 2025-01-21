import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../button/Button';
import useInput from '../../../hooks/useInput';

const ThreadForm = (attributes) => {
  const { onAddThread } = attributes;

  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAddThread = (event) => {
    setIsLoading(false);
    event.preventDefault();
    onAddThread({ title, category, body });
    setIsLoading(true);
  };

  return (
    <div className="thread-form">
      <form onSubmit={handleAddThread} className="form-input-thread">
        <div>
          <h2>Create Thread</h2>
          <div className="form-thread-title">
            <input type="text"
              value={title}
              onChange={onTitleChange}
              placeholder='Title'
              required
            />
          </div>
          <div className="form-thread-category">
            <input type="text"
              value={category}
              onChange={onCategoryChange}
              placeholder='Category'
              required
            />
          </div>
          <div className="form-thread-body">
            <textarea name="form-thread__text-area"
              type='text'
              value={body}
              onChange={onBodyChange}
              placeholder="what's going on today?"
              required
            />
          </div>
          <div className="form-thread-button">
            <Button
              type='submit'
              loading={isLoading}
              className='button-form-thread'
            >
                Post
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

ThreadForm.propTypes = {
  onAddThread: PropTypes.func.isRequired,
};

export default ThreadForm;