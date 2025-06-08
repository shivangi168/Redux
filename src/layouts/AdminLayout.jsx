import React, { useState } from 'react';
import Sidebar from '../components/admin/Sidebar';
import Dashboard from '../components/admin/Dashboard';
import EventListing from '../components/admin/EventListing';
import WorkshopListing from '../components/admin/WorkshopListing';
import Topbar from '../components/admin/Topbar';

export default function AdminDashboard() {
  const [selected, setSelected] = useState('dashboard');

  const renderContent = () => {
    switch (selected) {
      case 'dashboard':
        return <Dashboard />;
      case 'events':
        return <EventListing />;
      case 'workshops':
        return <WorkshopListing />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="d-flex">
      <Sidebar onSelect={setSelected} />
      <main className="flex-grow-1 p-4" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        <topbar/>
        {renderContent()}
      </main>
    </div>
  );
}
