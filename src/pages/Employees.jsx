import React from 'react';
import EmployeeList from '../components/employees/EmployeeList';

// Animation placeholder - will be replaced with react-bits
const FadeIn = ({ children }) => <div>{children}</div>;

const Employees = ({ employees, tasks }) => {
  return (
    <div className="space-y-8">
      <FadeIn>
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Employees</h1>
          <p className="text-gray-600">Manage your team members and their assignments</p>
        </div>
      </FadeIn>

      <EmployeeList employees={employees} tasks={tasks} />
    </div>
  );
};

export default Employees;
