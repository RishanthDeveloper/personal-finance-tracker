import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Accounts from './pages/Accounts';
import Budgets from './pages/Budgets';

// Placeholder components for unimplemented pages
const Analytics = () => <div className="p-6">Analytics Page (Coming Soon)</div>;
const Goals = () => <div className="p-6">Goals Page (Coming Soon)</div>;
const Insights = () => <div className="p-6">AI Insights Page (Coming Soon)</div>;
const Notifications = () => <div className="p-6">Notifications Page (Coming Soon)</div>;
const Settings = () => <div className="p-6">Settings Page (Coming Soon)</div>;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="budgets" element={<Budgets />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="goals" element={<Goals />} />
          <Route path="insights" element={<Insights />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
