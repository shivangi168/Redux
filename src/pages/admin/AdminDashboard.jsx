import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import EventListing from './EventListing';
import WorkshopListing from './WorkshopListing';

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
        {renderContent()}
      </main>
    </div>
  );
}
