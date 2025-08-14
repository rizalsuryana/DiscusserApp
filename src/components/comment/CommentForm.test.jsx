import { cleanup, render, screen } from '@testing-library/react';
import React from 'react';
import { expect, describe, it, vi, afterEach } from 'vitest';
import CommentForm from './CommentForm';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

describe('CommentForm component', () => {
  afterEach(() => {
    cleanup();
  });

  const mockAuthUser = { avatar: 'https://example.com/avatar.png' };

  it('should handle comment typing correctly', async () => {
    render(<CommentForm onAddComment={vi.fn()} authUser={mockAuthUser} />);

    const commentInput = screen.getByPlaceholderText('Answer Discussion');

    await userEvent.type(commentInput, 'Biasa aja');

    expect(commentInput).toHaveValue('Biasa aja');
  });

  it('should call onAddComment with correct value when form is submitted', async () => {
    const mockAddComment = vi.fn().mockResolvedValue(); // async mock
    render(<CommentForm onAddComment={mockAddComment} authUser={mockAuthUser} />);

    const commentInput = screen.getByPlaceholderText('Answer Discussion');
    await userEvent.type(commentInput, 'Biasa aja');

    const sendButton = screen.getByRole('button');
    await userEvent.click(sendButton);

    expect(mockAddComment).toHaveBeenCalledWith({ comment: 'Biasa aja' });
  });

  it('should disable submit button while submitting', async () => {
    const mockAddComment = vi.fn(() => new Promise((res) => setTimeout(res, 100)));
    render(<CommentForm onAddComment={mockAddComment} authUser={mockAuthUser} />);

    const commentInput = screen.getByPlaceholderText('Answer Discussion');
    await userEvent.type(commentInput, 'Test');

    const sendButton = screen.getByRole('button');
    await userEvent.click(sendButton);

    expect(sendButton).toBeDisabled();
  });
});
