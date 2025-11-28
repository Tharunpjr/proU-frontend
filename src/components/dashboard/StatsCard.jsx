import React from 'react';

// Animation placeholder - will be replaced with react-bits
const FadeIn = ({ children }) => <div>{children}</div>;

const StatsCard = ({ title, value, icon, trend }) => {
  return (
    <FadeIn>
      <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">{title}</p>
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            {trend && (
              <p className={`text-sm mt-1 ${trend.positive ? 'text-green-600' : 'text-red-600'}`}>
                {trend.positive ? '↗' : '↘'} {trend.value}
              </p>
            )}
          </div>
          {icon && (
            <div className="p-3 bg-sky-100 rounded-lg">
              <span className="text-sky-600 text-xl" aria-hidden="true">
                {icon}
              </span>
            </div>
          )}
        </div>
      </div>
    </FadeIn>
  );
};

export default StatsCard;
