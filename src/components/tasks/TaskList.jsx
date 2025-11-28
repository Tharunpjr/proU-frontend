import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, employees, onStatusChange }) => {
  const getEmployee = (employeeId) => {
    return employees.find(emp => emp.id === employeeId);
  };

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">📋</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No tasks found</h3>
        <p className="text-gray-600">Create a new task to get started.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tasks.map(task => (
        <TaskCard
          key={task.id}
          task={task}
          employee={getEmployee(task.assignedTo)}
          onStatusChange={onStatusChange}
        />
      ))}
    </div>
  );
};

export default TaskList;
