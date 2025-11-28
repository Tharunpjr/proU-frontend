import React from 'react';

// Animation placeholder - will be replaced with react-bits
const ScaleIn = ({ children }) => <div>{children}</div>;

const EmployeeCard = ({ employee, taskCount = 0 }) => {
  const initials = employee.name
    .split(' ')
    .map(name => name[0])
    .join('')
    .toUpperCase();

  return (
    <ScaleIn>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
            {employee.avatar ? (
              <img 
                src={employee.avatar} 
                alt={employee.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <span className="text-sky-600 font-semibold text-lg">
                {initials}
              </span>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 truncate">
              {employee.name}
            </h3>
            <p className="text-sm text-gray-600 truncate">
              {employee.role}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              {taskCount} active {taskCount === 1 ? 'task' : 'tasks'}
            </p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-sm text-gray-600 truncate">
            {employee.email}
          </p>
        </div>
      </div>
    </ScaleIn>
  );
};

export default EmployeeCard;
