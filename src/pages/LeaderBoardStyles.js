import styled from 'styled-components';

export const LeaderboardContainer = styled.div`
  padding: 70px 1rem 2rem; 
  max-width: 900px;
  margin: 0 auto;
  box-sizing: border-box;
`;

export const LeaderboardHeader = styled.div`
  display: none;
  font-weight: 600;
  padding: 1rem 0;
  border-bottom: 2px solid #e0e0e0;
  justify-content: space-between;
  color: #333;

  span {
    flex: 1;
    text-align: center;
  }

  @media (min-width: 768px) {
    display: flex;
  }
`;

export const LeaderboardRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
  transition: background 0.2s;
  background: ${({ index }) => index % 2 === 0 ? '#fafafa' : '#fff'};

  &:hover {
    background: #f0f8ff;
  }

  @media (max-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;
    border-radius: 8px;
    margin-bottom: 0.5rem;
    background: #fff;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
  }
`;

export const Avatar = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

export const UserName = styled.span`
  flex: 2;
  font-weight: 500;
  color: #333;
`;

export const Score = styled.span`
  flex: 1;
  text-align: center;
  font-weight: 600;
  color: #007bff;
`;

export const MobileList = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: none;
  }
`;
