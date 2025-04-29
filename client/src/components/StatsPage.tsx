import React, { ReactNode } from 'react';
import PageContainer from "./PageContainer"
import { StatisticCard } from "./StatCard";
import { FaGlobe, FaRoute, FaCalendarAlt, FaHourglassEnd, FaMountain, FaMedal } from "react-icons/fa";
import { GridContainer } from './Common.styles';

interface Statistic {
    title: string;
    value: string | number;
    icon: ReactNode;
  }

const StatsPage = () => {
    const statistics: Statistic[] = [
        { title: 'Total Distance', value: '1234 km', icon: <FaRoute />},
        { title: 'Longest Tour', value: '1200 km', icon: <FaMountain /> },
        { title: 'Total days riding', value: 24, icon: <FaCalendarAlt /> },
        { title: 'Countries visited', value: 12, icon: <FaGlobe /> },
        { title: 'Tours completed', value: 3, icon: <FaMedal /> },
        { title: 'Days since last tour', value: 3, icon: <FaHourglassEnd /> },
    ];
    
    return (
        <PageContainer pageTitle="Tour Stats" pageSubtitle="Your ride statistics.">
            <GridContainer>
                {statistics.map((stat, index) => (
                    <StatisticCard key={index} title={stat.title} value={stat.value} icon={stat.icon} />
                ))}
            </GridContainer>
        </PageContainer>
    )
}

export default StatsPage;