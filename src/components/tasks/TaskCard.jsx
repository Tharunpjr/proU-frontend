import React from 'react';
import Badge from '../shared/Badge';

const TaskCard = ({ task, employee, onStatusChange }) => {
  const handleStatusChange = (e) => {
    onStatusChange(task.id, e.target.value);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {task.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {task.description}
          </p>
        </div>
        <Badge status={task.status} />
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Assigned to:</span>
          <span className="font-medium text-gray-900">
            {employee ? employee.name : 'Unassigned'}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Due date:</span>
          <span className="text-gray-900">
            {formatDate(task.dueDate)}
          </span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Task ID:</span>
          <span className="font-mono text-gray-600">#{task.id}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <label htmlFor={`status-${task.id}`} className="block text-sm font-medium text-gray-700 mb-2">
          Update Status
        </label>
        <select
          id={`status-${task.id}`}
          value={task.status}
          onChange={handleStatusChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
          aria-label={`Change status for task: ${task.title}`}
        >
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
      </div>
    </div>
  );
};

export default TaskCard;
