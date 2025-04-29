import {
    StatisticCardMetric,
    StatisticCardContainer,
    StatisticCardStyled,
    StatisticCardSubtitle,
    StatisticCardTitle,
    StatisticCardTitleContainer,
    StatisticCardTitleDescriptor,
    StatisticCardValue,
    IconContainer,
    TitleText,
    ValueText,
  } from './StatCard.styles';
  import React, { ReactNode } from 'react';
  
  interface Props {
    title: string;
    icon: ReactNode;
    value: string | number;
    'data-testid'?: string;
  }
  
  export const StatisticCard = ({
    title,
    value,
    icon,
    ...props
  }: Props) => {
  
    return (
      // <>
      //   <StatisticCardStyled {...props}>
      //     <StatisticCardTitleContainer>
      //       {icon}
      //       <StatisticCardTitle>
      //         {title}
      //           <StatisticCardTitleDescriptor>
      //             {value}
      //           </StatisticCardTitleDescriptor>
      //       </StatisticCardTitle>
      //     </StatisticCardTitleContainer>
      //     {/* <StatisticCardContainer>
      //       {statistics.map((statistic, i) => (
      //         <StatisticCardMetric
      //           data-testid={`statistic-${i}`}
      //           key={statistic.title}
      //         >
      //           <StatisticCardSubtitle title={statistic.title}>
      //             {statistic.title}
      //           </StatisticCardSubtitle>
      //           <StatisticCardValue title={String(statistic.value)}>
      //             {statistic.value}
      //           </StatisticCardValue>
      //         </StatisticCardMetric>
      //       ))}
      //     </StatisticCardContainer> */}
      //   </StatisticCardStyled>
      // </>
      <StatisticCardStyled {...props}>
        <IconContainer>{icon}</IconContainer>
        <ValueText>{value}</ValueText>
        <TitleText>{title}</TitleText>
      </StatisticCardStyled>
    );
  };
  