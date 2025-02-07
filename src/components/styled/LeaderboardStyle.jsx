import styled from 'styled-components';

export const LeaderboardsWrapperLB = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

export const HeaderLB = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  font-weight: bold;
  border-bottom: 2px solid #ddd;
`;

export const ListLB = styled.div`
  margin-top: 1rem;
`;

export const ItemLB = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  transition: background 0.3s;

  &:hover {
    background: #f8f9fa;
  }
`;

export const AvatarLB = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #007bff;
`;

export const UserNameLB = styled.h3`
  flex: 1;
  margin-left: 1rem;
  font-size: 1.1rem;
  font-weight: 600;
  text-align: left;
`;

export const ScoreLB = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  color: #007bff;
`;
