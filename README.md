# Employee Task Tracker

A modern, responsive frontend web application for managing employee tasks and tracking team progress. Built with React, Vite, and Tailwind CSS.

## Features

- **Dashboard Overview**: Real-time statistics and recent task activity
- **Employee Management**: View team members and their active task counts
- **Task Management**: Create, update, and filter tasks with status tracking
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Clean UI**: Card-based layout with subtle animations and accessible controls

## Tech Stack

- **Frontend**: React 19, Vite
- **Styling**: Tailwind CSS
- **Authentication**: Convex Auth
- **State Management**: React hooks (useState, useEffect)
- **Icons**: Unicode emojis for simplicity

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd employee-task-tracker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── api/
│   └── placeholder.js          # Mock API functions
├── components/
│   ├── dashboard/
│   │   ├── StatsCard.jsx      # Statistics display card
│   │   └── DashboardOverview.jsx
│   ├── employees/
│   │   ├── EmployeeCard.jsx   # Individual employee card
│   │   └── EmployeeList.jsx   # Employee grid layout
│   ├── tasks/
│   │   ├── TaskCard.jsx       # Task display and status update
│   │   ├── TaskList.jsx       # Task grid layout
│   │   └── AddTaskModal.jsx   # Task creation modal
│   ├── filters/
│   │   └── FilterBar.jsx      # Status and employee filters
│   └── shared/
│       ├── Badge.jsx          # Status badges
│       └── Button.jsx         # Reusable button component
├── data/
│   └── mock.json              # Sample employee and task data
├── pages/
│   ├── Dashboard.jsx          # Main dashboard page
│   ├── Employees.jsx          # Employee management page
│   └── Tasks.jsx              # Task management page
├── App.jsx                    # Main application component
└── main.jsx                   # Application entry point
```

## Switching to Real API

This application currently uses mock data for demonstration purposes. To connect to a real backend:

1. Create a `.env` file in the project root:
```env
VITE_API_BASE=https://your-backend-api.com
```

2. Replace the mock functions in `src/api/placeholder.js` with real API calls:
```javascript
// Example real API implementation
export const fetchEmployees = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_BASE}/employees`);
  return response.json();
};
```

3. Update the API endpoints to match your backend structure.

## Animation System

The application includes placeholder animation wrappers that are ready for integration with react-bits or similar animation libraries:

- `<FadeIn>` - For headers and important content
- `<SlideUp>` - For statistics grids
- `<ScaleIn>` - For employee cards
- `<PopIn>` - For modal content

These can be easily replaced with actual animation implementations when needed.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run linting checks

## Key Features

### Dashboard
- Overview statistics (total employees, tasks, completion rate)
- Recent task activity
- Quick access to task creation

### Employee Management
- Employee cards with profile information
- Active task count per employee
- Responsive grid layout

### Task Management
- Task creation with assignment and due dates
- Status updates (Pending, In Progress, Completed)
- Filtering by status and assigned employee
- Task details with descriptions and metadata

### Responsive Design
- Mobile-first approach
- Collapsible sidebar navigation
- Adaptive grid layouts
- Touch-friendly interactions

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Notes

- This is a frontend-only application with no backend included
- Authentication is handled through Convex Auth
- All data operations currently use mock data
- The application is designed to be easily integrated with any REST API backend

## License

MIT License - see LICENSE file for details
