import React from 'react';
import { FaTachometerAlt, FaCalendarAlt, FaChalkboardTeacher } from 'react-icons/fa';

export default function Sidebar({ onSelect }) {
  return (
    <div className="bg-dark text-white vh-100 p-3" style={{ width: '250px' }}>
      <h4 className="text-center mb-4">Admin Panel</h4>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <button className="btn btn-dark w-100 text-start" onClick={() => onSelect('dashboard')}>
            <FaTachometerAlt className="me-2" />
            Dashboard
          </button>
        </li>
        <li className="nav-item mb-2">
          <button className="btn btn-dark w-100 text-start" onClick={() => onSelect('events')}>
            <FaCalendarAlt className="me-2" />
            Event Listing
          </button>
        </li>
        <li className="nav-item mb-2">
          <button className="btn btn-dark w-100 text-start" onClick={() => onSelect('workshops')}>
            <FaChalkboardTeacher className="me-2" />
            Workshop Listing
          </button>
        </li>
      </ul>
    </div>
  );
}
