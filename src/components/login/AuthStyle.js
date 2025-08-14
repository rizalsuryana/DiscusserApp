
import styled, { keyframes } from 'styled-components';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

// ==================== Gradient Background Animation ====================
const gradientBG = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 1rem;
  background: linear-gradient(-45deg, #3b82f6, #60a5fa, #0ea5e9, #3b82f6);
  background-size: 400% 400%;
  animation: ${gradientBG} 15s ease infinite;
`;


export const AuthImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AuthImage = styled.img`
  width: 70px;
  height: 70px;
`;

export const AuthHeading = styled.h2`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 700;
  color: #1f2937;
  letter-spacing: 0.5px;
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InputWrapper = styled.div`
  position: relative;
`;





export const AuthButton = styled.button`
  padding: 0.75rem 1rem;
  background: linear-gradient(135deg, #3b82f6, #2563eb);
  color: white;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 0.6rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: linear-gradient(135deg, #2563eb, #3b82f6);
    transform: translateY(-2px);
    box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const AuthLinkWrapper = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #4b5563;

  a {
    color: #3b82f6;
    font-weight: 500;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// Export icons
export { FiMail, FiLock, FiUser };


export const AuthBox = styled.div`
  width: 100%;
  max-width: 400px;
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0 15px 35px rgba(0,0,0,0.15);
  padding: 2rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;   /* penting */
  overflow: hidden;         /* mencegah input keluar */
`;

export const AuthInput = styled.input`
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 2.5rem; /* left padding buat icon */
  border-radius: 0.6rem;
  border: 1px solid #d1d5db;
  font-size: 0.95rem;
  outline: none;
  transition: all 0.25s;
  box-sizing: border-box;   /* penting biar padding tidak overflow */
  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 8px rgba(59,130,246,0.2);
  }
`;

export const InputIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 0.75rem;
  transform: translateY(-50%);
  color: #9ca3af;
  pointer-events: none;    /* icon tidak menghalangi input */
`;

