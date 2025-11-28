import React from 'react';
import DashboardOverview from '../components/dashboard/DashboardOverview';
import TaskList from '../components/tasks/TaskList';

// Animation placeholder - will be replaced with react-bits
const FadeIn = ({ children }) => <div>{children}</div>;

const Dashboard = ({ employees, tasks, onStatusChange }) => {
  // Show recent tasks (last 6 tasks)
  const recentTasks = tasks
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 6);

  return (
    <div className="space-y-8">
      <FadeIn>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Overview of your team's progress and recent activity</p>
        </div>
      </FadeIn>

      <DashboardOverview employees={employees} tasks={tasks} />

      <FadeIn>
        <div>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Tasks</h2>
          <TaskList 
            tasks={recentTasks} 
            employees={employees} 
            onStatusChange={onStatusChange}
          />
        </div>
      </FadeIn>
    </div>
  );
};

export default Dashboard;
