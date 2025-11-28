import React from 'react';
import EmployeeCard from './EmployeeCard';

const EmployeeList = ({ employees, tasks }) => {
  const getTaskCount = (employeeId) => {
    return tasks.filter(task => 
      task.assignedTo === employeeId && task.status !== 'Completed'
    ).length;
  };

  if (employees.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 text-6xl mb-4">👥</div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No employees found</h3>
        <p className="text-gray-600">Add some employees to get started.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {employees.map(employee => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          taskCount={getTaskCount(employee.id)}
        />
      ))}
    </div>
  );
};

export default EmployeeList;
