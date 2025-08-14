import React from 'react';
import { describe, it, expect, afterEach, vi } from 'vitest';
import { render, screen, cleanup } from '@testing-library/react';
import LoginForm from './LoginForm';
import userEvent from '@testing-library/user-event';
import matchers from '@testing-library/jest-dom/matchers';
import { MemoryRouter } from 'react-router-dom';

expect.extend(matchers);

describe('LoginForm component', () => {
  afterEach(()=> {
    cleanup();
  });

  const setup = () => render(
    <MemoryRouter>
      <LoginForm login={vi.fn()} />
    </MemoryRouter>
  );

  it('should handle email typing correctly', async () => {
    setup();
    const emailInput = screen.getByPlaceholderText('Email');
    await userEvent.type(emailInput, 'email@test.com');
    expect(emailInput).toHaveValue('email@test.com');
  });

  it('should handle password typing correctly', async () => {
    setup();
    const passwordInput = screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, 'passwordtest');
    expect(passwordInput).toHaveValue('passwordtest');
  });

  it('should call login function with email and password when login button is clicked', async () => {
    const mockLogin = vi.fn();
    render(
      <MemoryRouter>
        <LoginForm login={mockLogin}/>
      </MemoryRouter>
    );

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    await userEvent.type(emailInput, 'email@test.com');
    await userEvent.type(passwordInput, 'passwordtest');

    const loginButton = screen.getByRole('button', { name: /login/i });
    await userEvent.click(loginButton);

    expect(mockLogin).toHaveBeenCalledWith({
      email: 'email@test.com',
      password: 'passwordtest',
    });
  });
});
