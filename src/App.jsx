import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ProfileSetup from './pages/ProfileSetup';
import BudgetGoal from './pages/BudgetGoal';
import ExpenseEntry from './pages/ExpenseEntry';
import DailySuggestion from './pages/DailySuggestion';
import Alerts from './pages/Alert';
import Statistics from './pages/Statistics';
import Review from './pages/Review';
import Reminders from './pages/Reminders';
import Login from './pages/Login';
import MainLayout from './components/MainLayout';
import Register from './pages/Register';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'profile', element: <ProfileSetup /> },
      { path: 'budget', element: <BudgetGoal /> },
      { path: 'expenses', element: <ExpenseEntry /> },
      { path: 'suggestion', element: <DailySuggestion /> },
      { path: 'alerts', element: <Alerts /> },
      { path: 'statistics', element: <Statistics /> },
      { path: 'review', element: <Review /> },
      { path: 'reminders', element: <Reminders /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register/>
  }
]);


function App() {
  
  return <RouterProvider router={router} />;
}

export default App
