import React from 'react';
import DashboardCard from './DashboardCard';
import { FaUser, FaListAlt, FaCalendarAlt } from 'react-icons/fa';
// import Topbar from '../components/admin/Topbar';


export default function Dashboard() {
  return (

    <div className="p-4 bg-light w-100">
        {/* <Topbar/> */}
      <h3 className="mb-4">DASHBOARD</h3>

      <div className="row mb-4">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h5>Welcome Back!</h5>
            <p className="mt-2"><strong>Dev As Vendor</strong></p>
            <p>deepaknft@yopmail.com</p>
            <p>789456123</p>
            <button className="btn btn-primary btn-sm mt-2">Change Image</button>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">
            <h5>Profile</h5>
            <p><strong>Organisation:</strong> Dev As Vendor</p>
            <p><strong>Location:</strong> BUILDING NO-113 SHOP Ghaziabad, Uttar Pradesh</p>
            <p><strong>Registered on:</strong> Mar 04, 2022</p>
            <a href="/" className="text-end d-block text-decoration-none">See all locations</a>
          </div>
        </div>
      </div>

      <div className="row">
        <DashboardCard
          title="Program"
          icon={<FaUser />}
          count={113}
          stats={[
            { label: "Published", value: 3, color: "green" },
            { label: "Drafted", value: 2, color: "gray" },
            { label: "Expired", value: 108, color: "red" },
          ]}
        />
        <DashboardCard
          title="Workshop"
          icon={<FaListAlt />}
          count={182}
          stats={[
            { label: "Published", value: 0, color: "green" },
            { label: "Drafted", value: 0, color: "gray" },
            { label: "Expired", value: 182, color: "red" },
          ]}
        />
        <DashboardCard
          title="Events"
          icon={<FaCalendarAlt />}
          count={301}
          stats={[
            { label: "Published", value: 1, color: "green" },
            { label: "Drafted", value: 0, color: "gray" },
            { label: "Expired", value: 300, color: "red" },
          ]}
        />
      </div>
    </div>
  );
}
