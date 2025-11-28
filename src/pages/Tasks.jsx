import React, { useState, useMemo } from 'react';
import TaskList from '../components/tasks/TaskList';
import FilterBar from '../components/filters/FilterBar';
import Button from '../components/shared/Button';
import AddTaskModal from '../components/tasks/AddTaskModal';

// Animation placeholder - will be replaced with react-bits
const FadeIn = ({ children }) => <div>{children}</div>;

const Tasks = ({ tasks, employees, onStatusChange, onAddTask }) => {
  const [statusFilter, setStatusFilter] = useState('All');
  const [employeeFilter, setEmployeeFilter] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredTasks = useMemo(() => {
    return tasks.filter(task => {
      const statusMatch = statusFilter === 'All' || task.status === statusFilter;
      const employeeMatch = employeeFilter === 'All' || task.assignedTo === parseInt(employeeFilter);
      return statusMatch && employeeMatch;
    });
  }, [tasks, statusFilter, employeeFilter]);

  const handleAddTask = (taskData) => {
    onAddTask(taskData);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-8">
      <FadeIn>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Tasks</h1>
            <p className="text-gray-600">Manage and track all project tasks</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            Add New Task
          </Button>
        </div>
      </FadeIn>

      <FilterBar
        statusFilter={statusFilter}
        onStatusFilterChange={setStatusFilter}
        employeeFilter={employeeFilter}
        onEmployeeFilterChange={setEmployeeFilter}
        employees={employees}
      />

      <div>
        <div className="flex items-center justify-between mb-6">
          <p className="text-sm text-gray-600">
            Showing {filteredTasks.length} of {tasks.length} tasks
          </p>
        </div>
        
        <TaskList 
          tasks={filteredTasks} 
          employees={employees} 
          onStatusChange={onStatusChange}
        />
      </div>

      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddTask}
        employees={employees}
      />
    </div>
  );
};

export default Tasks;
