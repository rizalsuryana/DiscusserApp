import styled from 'styled-components';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  padding-top: 60px; /* Height of navbar */
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DesktopSidebar = styled.aside`
  width: 280px;
  padding: 1.5rem;
  background: white;
  border-right: 1px solid #e0e0e0;
  position: sticky;
  top: 60px; /* Height of navbar */
  height: calc(100vh - 60px);
  overflow-y: auto;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileCategories = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: sticky;
    top: 60px;
    z-index: 800;
    background: white;
    padding: 0.75rem 1rem;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  }
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 2rem;
  background: white;
  min-height: calc(100vh - 60px);

  @media (max-width: 768px) {
    padding: 1.25rem;
    min-height: unset;
  }

  @media (min-width: 1200px) {
    padding: 2.5rem;
  }
`;

/* Additional styles for better spacing */
export const Section = styled.section`
  margin-bottom: 2rem;
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
`;

export const PageTitle = styled.h1`
  font-size: 1.75rem;
  margin-bottom: 1.5rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }
`;