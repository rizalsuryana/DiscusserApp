// NavbarStyles.js
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  position: relative;
`;

export const DesktopNav = styled.nav`
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  height: 60px;
  background: linear-gradient(135deg, #0095f6, #0064e0);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: fixed;   /* ganti sticky jadi fixed */
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;

  @media (min-width: 768px) {
    display: flex;
  }
`;


export const MobileNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: linear-gradient(135deg, #0095f6, #0064e0);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LogoImage = styled.img`
  height: 30px;
  width: auto;
  background: white;   // beri background putih supaya terlihat
  border-radius: 1rem;  // optional biar bulat sedikit
  padding: 0.1px;        // beri sedikit padding supaya nggak nempel pinggir
`;


export const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
`;

export const NavLinkItem = styled.li`
  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: white;
    text-decoration: none;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.2s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.1);
    }

    svg {
      font-size: 1.25rem;
    }
  }
`;

export const ProfileSection = styled.div`
  position: relative;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const AvatarImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: ${({ active }) => active ? '2px solid #ffffff' : 'none'};
`;

export const ProfileMenu = styled.div`
  position: absolute;
  top: 120%;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 0.5rem 0;
  min-width: 200px;
  z-index: 100;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(-10px)')};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
  transition: all 0.2s ease;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #262626;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  svg {
    color: #0095f6;
  }
`;

export const MobileNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  flex: 1;
`;

export const ProfileButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const MobileProfileMenu = styled.div`
  position: fixed;
  bottom: 70px;
  right: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  padding: 0.5rem 0;
  min-width: 180px;
  z-index: 1000;
  opacity: ${({ show }) => (show ? 1 : 0)};
  transform: ${({ show }) => (show ? 'translateY(0)' : 'translateY(10px)')};
  pointer-events: ${({ show }) => (show ? 'auto' : 'none')};
  transition: all 0.2s ease;
`;

export const MobileMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #262626;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f5f5f5;
  }

  svg {
    color: #0095f6;
  }
`;

export const FloatingCreateButton = styled(Link)`
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #0095f6, #0064e0);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 100;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }

  svg {
    font-size: 1.8rem;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
export const LogoText = styled.span`
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  margin-left: 0.5rem;

  @media (max-width: 768px) {
    display: none; // sembunyikan di mobile
  }
`;
export const LogoName = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  color: white;
  @media (max-width: 768px) {
    display: none; // sembunyikan nama di mobile
  }
`;
