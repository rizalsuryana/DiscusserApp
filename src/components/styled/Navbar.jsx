import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  background-color: #222;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  position: fixed;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    height: 60px;
    justify-content: space-around;
    box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 769px) {
    width: 80px;
    height: 100vh;
    top: 0;
    left: 0;
    box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  }
`;

export const NavbarLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;

export const NavbarItem = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #f0a500;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    font-size: 1rem;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
  gap: 0.5rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ProfileAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

export const ButtonLogout = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: red;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const CreatePostButton = styled(Link)`
  background-color: #f0a500;
  color: white;
  padding: 0.8rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  position: fixed;
  bottom: 70px;
  right: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #ffba08;
  }

  /* Sembunyikan di tampilan desktop */
  @media (min-width: 769px) {
    display: none;
  }
`;

