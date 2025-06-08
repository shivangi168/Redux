import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar'; // ✅ Import the Topbar
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
      
      {/* Right main section */}
      <div className="flex-grow-1" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
        <Topbar /> {/* ✅ Show Topbar here */}
        
        <main className="p-4">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}
