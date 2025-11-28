import React from 'react';
import StatsCard from './StatsCard';

// Animation placeholder - will be replaced with react-bits
const SlideUp = ({ children }) => <div>{children}</div>;

const DashboardOverview = ({ employees, tasks }) => {
  const totalEmployees = employees.length;
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.status === 'Completed').length;
  const completionRate = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
  const inProgressTasks = tasks.filter(task => task.status === 'In Progress').length;

  const stats = [
    {
      title: 'Total Employees',
      value: totalEmployees,
      icon: '👥',
      trend: null
    },
    {
      title: 'Total Tasks',
      value: totalTasks,
      icon: '📋',
      trend: null
    },
    {
      title: 'Completed Tasks',
      value: completedTasks,
      icon: '✅',
      trend: { positive: true, value: `${completionRate}%` }
    },
    {
      title: 'In Progress',
      value: inProgressTasks,
      icon: '⏳',
      trend: null
    }
  ];

  return (
    <SlideUp>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <StatsCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={stat.icon}
            trend={stat.trend}
          />
        ))}
      </div>
    </SlideUp>
  );
};

export default DashboardOverview;
