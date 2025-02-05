/**
 * Skenario testing
 *
 * - CommentForm component
 *   - should handle comment typing correctly
 *   - should call onAddComment function when form is submitted
 */


import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { expect, describe, it, vi, afterEach } from 'vitest';
import CommentForm from './CommentForm';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);
describe('CommentForm component', () => {
  afterEach(()=> {
    cleanup();
  });

  it('should handle comment typing correctly', async () => {
    // arrange
    render(<CommentForm onAddComment={()=> {}}/>);
    // mock
    const commentInput = await screen.getByPlaceholderText('Answer Discussion');

    // action
    await userEvent.type(commentInput, 'Biasa aja');

    // assert
    expect(commentInput).toHaveValue('Biasa aja');
  });

  it('should send comment when button send is clicked', async () => {
    // Arrange
    const mockInput = vi.fn();
    render(
      <CommentForm onAddComment={mockInput}/>
    );
    const commentInput = await screen.getByPlaceholderText('Answer Discussion');
    await userEvent.type(commentInput, 'Biasa aja');
    const sendButton = await screen.getByRole('button');

    // action
    await userEvent.click(sendButton);

    // assert
    expect(mockInput).toBeCalled({
      comment: 'Biasa aja'
    });
  });


});
