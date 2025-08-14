/**
 * Skenario testing
 *
 * - ThreadForm component
 *   - should handle title typing correctly
 *   - should handle category typing correctly
 *   - should handle body typing correctly
 *   - should call onAddThread function when form is submitted
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import ThreadForm from './ThreadForm';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

describe('ThreadForm component', () => {
  afterEach(() => cleanup());

  it('should handle title typing correctly', async () => {
    render(<ThreadForm onAddThread={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Topic');
    await userEvent.type(titleInput, 'Test Thread Title');
    expect(titleInput).toHaveValue('Test Thread Title');
  });

  it('should handle category typing correctly', async () => {
    render(<ThreadForm onAddThread={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText('Category');
    await userEvent.type(categoryInput, 'Test Category');
    expect(categoryInput).toHaveValue('Test Category');
  });

  it('should handle body typing correctly', async () => {
    render(<ThreadForm onAddThread={() => {}} />);
    const bodyInput = await screen.getByPlaceholderText('What would you like to discuss?');
    await userEvent.type(bodyInput, 'This is the thread body content.');
    expect(bodyInput).toHaveValue('This is the thread body content.');
  });

  it('should call onAddThread function when form is submitted', async () => {
    const mockOnAddThread = vi.fn();
    render(<ThreadForm onAddThread={mockOnAddThread} />);

    const titleInput = await screen.getByPlaceholderText('Topic');
    const categoryInput = await screen.getByPlaceholderText('Category');
    const bodyInput = await screen.getByPlaceholderText('What would you like to discuss?');

    await userEvent.type(titleInput, 'Test Thread Title');
    await userEvent.type(categoryInput, 'Test Category');
    await userEvent.type(bodyInput, 'This is the thread body content.');

    const submitButton = await screen.getByRole('button', { name: /post/i });
    await userEvent.click(submitButton);

    expect(mockOnAddThread).toHaveBeenCalledWith({
      title: 'Test Thread Title',
      category: 'Test Category',
      body: 'This is the thread body content.',
    });
  });
});