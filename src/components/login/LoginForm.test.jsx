/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle email typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */

import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import LoginForm from './LoginForm';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { MemoryRouter } from 'react-router-dom';

expect.extend(matchers);

describe('LoginForm component', () => {
  // cleanup previous test before do next test
  afterEach(()=> {
    cleanup();
  });

  it('should handle email typing correctly', async () => {
    // Arrange
    render(
      // karena ngelik / navigate
      <MemoryRouter>
        <LoginForm login={()=> {}} />
      </MemoryRouter>
    );
    const emailInput = await screen.getByPlaceholderText('Email');

    // Action
    await userEvent.type(emailInput, 'email@test.com');

    // Assert
    expect(emailInput).toHaveValue('email@test.com');
  });

  it('should handle password typing correctly', async () => {
  // Arrange
    render(
      <MemoryRouter>
        <LoginForm login={()=> {}}/>
      </MemoryRouter>
    );
    const passwordInput = await screen.getByPlaceholderText('Password');
    // Action
    await userEvent.type(passwordInput, 'passwordtest');
    // Assert
    expect(passwordInput).toHaveValue('passwordtest');
  });




  it('it should call login function when login button is clicked', async () => {

    // Arrange
    const mockLogin = vi.fn();
    render(
      <MemoryRouter>
        <LoginForm login={mockLogin}/>
      </MemoryRouter>
    );
    const emailInput = await screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'email@test.com');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    const loginButton = await screen.getByRole('button', { name: 'Login' });

    // Action
    await userEvent.click(loginButton);

    // Assert
    expect(mockLogin).toBeCalledWith({
      email: 'email@test.com',
      password: 'passwordtest'
    });
  });




  // end
});