import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f4f6f9;
`;

export const AuthBox = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
border: 0.1rem solid  #007bff;
 box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 15px rgba(0, 123, 255, 0.8), 0 0 25px rgba(0, 123, 255, 0.6); /* Glow lebih terang saat hover */
  }
`;

export const AuthImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const AuthImage = styled.img`
  max-width: 40%;
  height: auto;
  border-radius: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AuthHeading = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const AuthInput = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const AuthButton = styled.button`
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:disabled {
    background-color: #ccc;
  }
`;

export const AuthLinkWrapper = styled.div`
  text-align: center;
  font-size: 14px;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
