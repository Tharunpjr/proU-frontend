import React from 'react';

const FilterBar = ({ 
  statusFilter, 
  onStatusFilterChange, 
  employeeFilter, 
  onEmployeeFilterChange, 
  employees 
}) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md mb-6">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="status-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Status
          </label>
          <select
            id="status-filter"
            value={statusFilter}
            onChange={(e) => onStatusFilterChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="flex-1">
          <label htmlFor="employee-filter" className="block text-sm font-medium text-gray-700 mb-1">
            Filter by Employee
          </label>
          <select
            id="employee-filter"
            value={employeeFilter}
            onChange={(e) => onEmployeeFilterChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          >
            <option value="All">All Employees</option>
            {employees.map(employee => (
              <option key={employee.id} value={employee.id}>
                {employee.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
