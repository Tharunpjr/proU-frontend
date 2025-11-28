import React, { useState, useEffect } from 'react';
import { Authenticated, Unauthenticated } from "convex/react";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";
import { Toaster } from "sonner";
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import Tasks from './pages/Tasks';
import Button from './components/shared/Button';
import { fetchEmployees, fetchTasks, createTask, updateTaskStatus } from './api/placeholder';

export default function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [employees, setEmployees] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [employeesData, tasksData] = await Promise.all([
        fetchEmployees(),
        fetchTasks()
      ]);
      setEmployees(employeesData);
      setTasks(tasksData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (taskId, newStatus) => {
    try {
      await updateTaskStatus(taskId, newStatus);
      setTasks(prev => prev.map(task => 
        task.id === taskId ? { ...task, status: newStatus } : task
      ));
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  const handleAddTask = async (taskData) => {
    try {
      const newTask = await createTask(taskData);
      setTasks(prev => [newTask, ...prev]);
    } catch (error) {
      console.error('Error creating task:', error);
    }
  };

  const navigation = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'employees', name: 'Employees', icon: '👥' },
    { id: 'tasks', name: 'Tasks', icon: '📋' }
  ];

  const renderCurrentPage = () => {
    if (loading) {
      return (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-600"></div>
        </div>
      );
    }

    switch (currentPage) {
      case 'employees':
        return <Employees employees={employees} tasks={tasks} />;
      case 'tasks':
        return (
          <Tasks 
            tasks={tasks} 
            employees={employees} 
            onStatusChange={handleStatusChange}
            onAddTask={handleAddTask}
          />
        );
      default:
        return (
          <Dashboard 
            employees={employees} 
            tasks={tasks} 
            onStatusChange={handleStatusChange}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm h-16 flex justify-between items-center border-b shadow-sm px-4">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            aria-label="Toggle sidebar"
          >
            <span className="text-xl">☰</span>
          </button>
          <h1 className="text-xl font-semibold text-sky-600">Employee Task Tracker</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <Authenticated>
            <Button 
              onClick={() => {
                setCurrentPage('tasks');
                setSidebarOpen(false);
              }}
              size="sm"
            >
              Add Task
            </Button>
          </Authenticated>
          <SignOutButton />
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className={`
          fixed lg:static inset-y-0 left-0 z-30 w-64 bg-white border-r transform transition-transform duration-300 ease-in-out
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}>
          <div className="flex flex-col h-full pt-6">
            <nav className="flex-1 px-4 space-y-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setSidebarOpen(false);
                  }}
                  className={`
                    w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors
                    ${currentPage === item.id 
                      ? 'bg-sky-100 text-sky-700 font-medium' 
                      : 'text-gray-700 hover:bg-gray-100'
                    }
                  `}
                >
                  <span className="mr-3 text-lg" aria-hidden="true">{item.icon}</span>
                  {item.name}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div 
            className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Authenticated>
              {renderCurrentPage()}
            </Authenticated>
            
            <Unauthenticated>
              <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-8">
                <div className="text-center">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Welcome to Employee Task Tracker
                  </h1>
                  <p className="text-xl text-gray-600 mb-8">
                    Manage your team's tasks and track progress efficiently
                  </p>
                </div>
                <div className="w-full max-w-md">
                  <SignInForm />
                </div>
              </div>
            </Unauthenticated>
          </div>
        </main>
      </div>

      <Toaster />
    </div>
  );
}
