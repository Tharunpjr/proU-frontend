import React from 'react';

const Badge = ({ status, size = 'sm' }) => {
  const getStatusStyles = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const sizeStyles = size === 'sm' 
    ? 'px-2 py-1 text-xs' 
    : 'px-3 py-1.5 text-sm';

  return (
    <span 
      className={`inline-flex items-center rounded-full border font-medium ${getStatusStyles(status)} ${sizeStyles}`}
      aria-label={`Status: ${status}`}
    >
      {status}
    </span>
  );
};

export default Badge;
