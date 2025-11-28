// Mock API functions - replace with real API calls when backend is ready
// Set VITE_API_BASE in .env file to switch to real API
// Example: VITE_API_BASE=https://your-backend-api.com

import mockData from '../data/mock.json';

const API_BASE = import.meta.env.VITE_API_BASE || 'mock';

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchEmployees = async () => {
  await delay(300);
  if (API_BASE === 'mock') {
    return mockData.employees;
  }
  // Replace with real API call:
  // const response = await fetch(`${API_BASE}/employees`);
  // return response.json();
};

export const fetchTasks = async () => {
  await delay(400);
  if (API_BASE === 'mock') {
    return mockData.tasks;
  }
  // Replace with real API call:
  // const response = await fetch(`${API_BASE}/tasks`);
  // return response.json();
};

export const createTask = async (taskData) => {
  await delay(500);
  if (API_BASE === 'mock') {
    // Simulate creating a task with a new ID
    return {
      id: Date.now(),
      ...taskData,
      createdAt: new Date().toISOString()
    };
  }
  // Replace with real API call:
  // const response = await fetch(`${API_BASE}/tasks`, {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(taskData)
  // });
  // return response.json();
};

export const updateTaskStatus = async (taskId, status) => {
  await delay(300);
  if (API_BASE === 'mock') {
    return { id: taskId, status };
  }
  // Replace with real API call:
  // const response = await fetch(`${API_BASE}/tasks/${taskId}`, {
  //   method: 'PATCH',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ status })
  // });
  // return response.json();
};
