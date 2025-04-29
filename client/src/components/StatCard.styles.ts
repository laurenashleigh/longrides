import styled from 'styled-components';

export const StatisticCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

export const StatisticCardTitle = styled.p`
  font-weight: 600;
  overflow: hidden;
  white-space: nowrap;
  margin: 0 10px 0 0;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const StatisticCardSubtitle = styled.p`
  color: grey;
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const StatisticCardTitleDescriptor = styled.span`
  color: grey;
  margin-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const StatisticCardValue = styled.p`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
`;

export const StatisticCardTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const StatisticCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  border-top: 1px solid grey;
`;

export const StatisticCardMetric = styled.div`
  min-width: 50%;
  :first-child {
    padding-right: 20px;
  }
`;

export const IconContainer = styled.div`
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 10px;
`;
export const ValueText = styled.div`
  font-size: 2rem; 
  font-weight: bold;
  margin-bottom: 5px;
`;

export const TitleText = styled.div`
  font-size: 1rem;
  color: grey;
  text-transform: uppercase; 
`;