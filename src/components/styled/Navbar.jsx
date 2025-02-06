import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  border: 2px solid #007bff;
  display: flex;
  background-color: white;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  position: fixed;
  margin: 10px;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    border: none;
    bottom: 0;
    padding: 1rem;
    margin: 0;
    border-radius: 0;
    background-color: white;
    left: 0;
    right: 0;
    height: 2rem;
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

export const Discusser = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
   @media (max-width: 768px) {
    display: none;
  }
`;


export const NavbarLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: row;
  }
`;


export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin; auto;

    @media (max-width: 769px) {
    flex-direction: row;
  }
`;

export const ProfileName = styled.span`
    @media (max-width: 769px) {
    display: none;
  }
`;

export const ProfileAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;

    @media (max-width: 769px) {
    display: none;
    border-radius: 10px;
  }
`;


export const CreatePostButton = styled(Link)`
  background-color: #white;
  padding: 0.8rem;
  border: solid;
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
    background-color: #007bff;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;


export const NavbarTitle = styled.div`
  font-size: 1rem;
   display: none;
  align-items: center;
  margin: 10px 1px;
  width: 100%;
  color: black;
  padding:10px;
    &:hover {
    color: #007bff;
  }

  @media (max-width: 769px) {
    display: none;
  }
`;

export const NavbarItem = styled(Link)`
  text-decoration: none;
  display: flex;
  color: #007bff;
  flex-direction: row; /* Align icons and titles side by side */
  align-items: center;
  font-size: 2rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color:rgb(8, 8, 8);
  }

  @media (max-width: 768px) {
     font-size: 2rem;
    margin: auto;
  }
`;

export const ButtonLogout = styled.button`
  background-color: white;
  border: none;
  color: #007bff;
  text-decoration: none;
  display: flex;
  flex-direction: row; /* Align icons and titles side by side */
  align-items: center;
  font-size: 2rem;
  transition: color 0.2s ease-in-out;
  margin-bottom: 55px;

  &:hover {
    color:rgb(8, 8, 8);
  }

  @media (min-width: 768px) {
  display: none;

  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin: auto;
    padding-right: 4rem;
    padding-left: 1rem;
  }
`;

export const AddPost = styled(Link)`
   text-decoration: none;
   color: #007bff;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 2rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color:rgb(8, 8, 8);
  }


  @media (max-width: 769px) {
    // display: none;
  }
`;

export const NavbarTitleButton = styled(Link)`
  font-size: 1rem;
  color:  #007bff;
  align-items: center;
  margin-bottom: 3rem;
  width: 100%;
  text-decoration: none;

    &:hover {
    color: Black;
    background-color: #007bff;
  }

  @media (max-width: 769px) {
    display: none;
  }
`;