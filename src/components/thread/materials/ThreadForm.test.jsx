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
  // Cleanup previous test before doing the next one
  afterEach(() => {
    cleanup();
  });

  it('should handle title typing correctly', async () => {
    // Arrange
    render(<ThreadForm onAddThread={() => {}} />);
    const titleInput = await screen.getByPlaceholderText('Title');

    // Action
    await userEvent.type(titleInput, 'Test Thread Title');

    // Assert
    expect(titleInput).toHaveValue('Test Thread Title');
  });

  it('should handle category typing correctly', async () => {
    // Arrange
    render(<ThreadForm onAddThread={() => {}} />);
    const categoryInput = await screen.getByPlaceholderText('Category');

    // Action
    await userEvent.type(categoryInput, 'Test Category');

    // Assert
    expect(categoryInput).toHaveValue('Test Category');
  });

  it('should handle body typing correctly', async () => {
    // Arrange
    render(<ThreadForm onAddThread={() => {}} />);
    const bodyInput = await screen.getByPlaceholderText("what's going on today?");

    // Action
    await userEvent.type(bodyInput, 'This is the thread body content.');

    // Assert
    expect(bodyInput).toHaveValue('This is the thread body content.');
  });

  it('should call onAddThread function when form is submitted', async () => {
    // Arrange
    const mockOnAddThread = vi.fn();
    render(<ThreadForm onAddThread={mockOnAddThread} />);

    const titleInput = await screen.getByPlaceholderText('Title');
    await userEvent.type(titleInput, 'Test Thread Title');
    const categoryInput = await screen.getByPlaceholderText('Category');
    await userEvent.type(categoryInput, 'Test Category');
    const bodyInput = await screen.getByPlaceholderText("what's going on today?");
    await userEvent.type(bodyInput, 'This is the thread body content.');

    const submitButton = await screen.getByRole('button', { name: /post/i });

    // Action
    await userEvent.click(submitButton);

    // Assert
    expect(mockOnAddThread).toBeCalledWith({
      title: 'Test Thread Title',
      category: 'Test Category',
      body: 'This is the thread body content.',
    });
  });
});
